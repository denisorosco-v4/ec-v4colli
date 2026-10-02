// Template reutilizável — skill /ec-exportar-docx
// Converte um .md no padrão E.C./V4 Company para .docx, via geração programática (lib "docx").
//
// Uso:
//   node template_gerar_docx.js "<caminho\entrada.md>" ["<caminho\saida.docx>"]
// Se o caminho de saída for omitido, usa o mesmo caminho/nome do .md trocando a extensão para .docx.
//
// Este script é a referência viva da skill: copie-o (ou execute direto), ajuste apenas SRC/OUT,
// e rode. Não reescreva a lógica de parsing do zero a cada conversão — ela já cobre:
// headings H1-H5, parágrafos com **bold**/*italic*/[link](url), listas com e sem ordem,
// blockquotes ("> "), tabelas markdown, blocos de código/diagramas ASCII (```), quebras de página
// antes de cada H1 (exceto o primeiro), header/footer de página, numeração automática,
// cabeçalho estilo breadcrumb (V4 COMPANY · Cliente), linha de autoria vermelha sublinhada,
// banner de KPIs ("placar executivo") calculado a partir de tabelas quando seguro, e cards
// escuros para blocos estruturados repetidos (heading + >=2 linhas "**Label:** valor").
// Extensões (28/09/2026): imagens ![alt](<caminho>) em página A4 paisagem com a imagem original
// sem alteração; blocos ```mermaid renderizados como imagem via mmdc (fallback: bloco de código;
// navegador do puppeteer configurável por MMDC_PUPPETEER=<config.json>); código inline `x` em
// Consolas; escape \* ; wrappers <div>; listas aninhadas (3 níveis, inclusive dentro de citação);
// listas numeradas com sub-itens e número inicial preservado; marcação limpa em títulos e cards.

const fs = require("fs");
const path = require("path");
const os = require("os");

// ---------- Resolve o módulo "docx" mesmo se instalado só globalmente (Windows) ----------
function requireDocx() {
  try { return require("docx"); } catch (e) { /* segue para os fallbacks */ }
  const candidates = [
    process.env.NODE_PATH,
    path.join(process.env.APPDATA || "", "npm", "node_modules"),
    path.join(os.homedir(), "AppData", "Roaming", "npm", "node_modules"),
    "/usr/local/lib/node_modules",
    "/usr/lib/node_modules",
  ].filter(Boolean);
  for (const c of candidates) {
    try { return require(path.join(c, "docx")); } catch (_) { /* tenta o próximo */ }
  }
  console.error("ERRO: módulo 'docx' não encontrado. Rode: npm install -g docx");
  process.exit(1);
}

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  BorderStyle, WidthType, ShadingType, Header, Footer, PageNumber,
  AlignmentType, LevelFormat, PageBreak, TabStopType, VerticalAlign, Tab,
  ExternalHyperlink, ImageRun, PageOrientation,
} = requireDocx();
const { execSync } = require("child_process");
const crypto = require("crypto");

// ---------- Argumentos ----------
const SRC = process.argv[2];
if (!SRC) {
  console.error("Uso: node template_gerar_docx.js \"<entrada.md>\" [\"<saida.docx>\"]");
  process.exit(1);
}
const OUT = process.argv[3] || SRC.replace(/\.md$/i, ".docx");

const raw = fs.readFileSync(SRC, "utf8");
const lines = raw.split(/\r?\n/).filter(l => !/^\s*<\/?div\b[^>]*>\s*$/i.test(l));
const SRC_DIR = path.dirname(SRC);
const ESC_STAR = "\uE000";

// ================================================================
// PARSING INLINE: [texto](url) | **bold** | *italic*
// ================================================================
function tokenizeInline(text) {
  const tokens = [];
  text = (text || "").replace(/\\\*/g, ESC_STAR);
  const regex = /(`[^`]+`|\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let lastIndex = 0;
  let m;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > lastIndex) tokens.push({ type: "text", text: text.slice(lastIndex, m.index) });
    const token = m[0];
    if (token.startsWith("`")) {
      tokens.push({ type: "text", text: token.slice(1, -1), code: true });
    } else if (token.startsWith("[")) {
      const mm = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(token);
      tokens.push({ type: "link", text: mm[1], url: mm[2] });
    } else if (token.startsWith("**")) {
      tokens.push({ type: "text", text: token.slice(2, -2), bold: true });
    } else {
      tokens.push({ type: "text", text: token.slice(1, -1), italics: true });
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) tokens.push({ type: "text", text: text.slice(lastIndex) });
  if (tokens.length === 0) tokens.push({ type: "text", text: "" });
  return tokens;
}

// Retorna array de TextRun / ExternalHyperlink — ambos válidos como children de Paragraph
function makeRuns(text, overrides = {}) {
  return tokenizeInline(text).map(t => {
    if (t.type === "link") {
      return new ExternalHyperlink({
        link: t.url,
        children: [new TextRun({
          text: t.text.split(ESC_STAR).join("*"), font: "Arial", size: overrides.size || 20,
          color: "2E74B5", underline: {},
        })],
      });
    }
    return new TextRun({
      text: t.text.split(ESC_STAR).join("*"),
      bold: overrides.forceBold || t.bold || false,
      italics: t.italics || false,
      font: t.code ? "Consolas" : (overrides.font || "Arial"),
      size: overrides.size || 20,
      color: overrides.color || undefined,
    });
  });
}

function stripBold(s) {
  return (s || "").replace(/\*\*/g, "").trim();
}

function paragraph(text, opts = {}) {
  return new Paragraph({
    children: makeRuns(text, opts),
    indent: opts.indent,
    spacing: opts.spacing,
    alignment: opts.alignment,
    shading: opts.shading,
  });
}

function cleanInline(t) {
  return (t || "").replace(/\\\*/g, ESC_STAR).replace(/\*\*/g, "").replace(/\*([^*]+)\*/g, "$1").replace(/`([^`]+)`/g, "$1").split(ESC_STAR).join("*");
}
function heading(text, level) {
  return new Paragraph({ text: cleanInline(text), style: `Heading${level}` });
}

// ---------- Imagens (PNG) e diagramas mermaid ----------
function pngSize(buf) { return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) }; }
function fitImage(buf, maxW, maxH, cssScale) {
  const { w, h } = pngSize(buf);
  let W = w / cssScale, H = h / cssScale;
  const k = Math.min(maxW / W, maxH / H, 1e9);
  W = W * k; H = H * k;
  return { width: Math.round(W), height: Math.round(H) };
}
const MERMAID_DIR = path.join(os.tmpdir(), "ec_docx_mermaid");
function renderMermaid(code) {
  fs.mkdirSync(MERMAID_DIR, { recursive: true });
  const hash = crypto.createHash("md5").update(code).digest("hex").slice(0, 12);
  const mmd = path.join(MERMAID_DIR, hash + ".mmd"), png = path.join(MERMAID_DIR, hash + ".png");
  if (!fs.existsSync(png)) {
    fs.writeFileSync(mmd, code, "utf8");
    const cfg = path.join(MERMAID_DIR, "config.json");
    fs.writeFileSync(cfg, JSON.stringify({ theme: "default", themeVariables: { fontFamily: "Arial" } }));
    const pp = process.env.MMDC_PUPPETEER ? ` -p "${process.env.MMDC_PUPPETEER}"` : "";
    execSync(`mmdc -i "${mmd}" -o "${png}" -s 2 -b white -c "${cfg}"${pp}`, { stdio: "pipe", shell: true });
  }
  return fs.readFileSync(png);
}

// ================================================================
// IDENTIDADE VISUAL — tokens (V4 Company / E.C.)
// ================================================================
const COLOR_RED = "C0272D";
const COLOR_DARK_TITLE = "202124"; // H1 — "preto" per padrão documento-de-entrega
const COLOR_CARD_BG = "000000";
const COLOR_CARD_SUBTEXT = "CCCCCC";
const COLOR_BANNER_LIGHT = "F5F5F5";
const COLOR_GRAY_SECONDARY = "555555";

// ================================================================
// TABELAS
// ================================================================
function isSeparatorRow(line) {
  const stripped = line.replace(/[|:\-\s]/g, "");
  return stripped.length === 0 && line.includes("-");
}

function splitRow(line) {
  let cells = line.split("|");
  if (cells.length && cells[0].trim() === "") cells.shift();
  if (cells.length && cells[cells.length - 1].trim() === "") cells.pop();
  return cells.map(c => c.trim());
}

// Larguras padronizadas somando 9746 DXA (largura útil A4 com margens 1080)
function getColumnWidths(n) {
  switch (n) {
    case 2: return [4873, 4873];
    case 3: return [3248, 3248, 3250];
    case 4: return [2436, 2436, 2437, 2437];
    case 5: return [1949, 1949, 1949, 1949, 1949];
    default: {
      const w = Math.floor(9746 / n);
      const arr = new Array(n).fill(w);
      arr[n - 1] += 9746 - w * n;
      return arr;
    }
  }
}

const CELL_MARGINS = { top: 80, bottom: 80, left: 120, right: 120 };

const STANDARD_BORDERS = {
  top: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
  bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
  left: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
  right: { style: BorderStyle.SINGLE, size: 4, color: "000000" },
  insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: "CCCCCC" },
  insideVertical: { style: BorderStyle.SINGLE, size: 4, color: "CCCCCC" },
};

function buildCell(text, width, { isHeader = false, shadeFill = null } = {}) {
  let runs;
  if (isHeader) {
    runs = [new TextRun({ text, bold: true, font: "Arial", size: 18, color: "FFFFFF" })];
  } else {
    runs = makeRuns(text, { size: 20 });
  }
  const cellProps = {
    width: { size: width, type: WidthType.DXA },
    margins: CELL_MARGINS,
    verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({ children: runs, alignment: AlignmentType.LEFT })],
  };
  if (isHeader) {
    cellProps.shading = { type: ShadingType.CLEAR, fill: COLOR_RED, color: "auto" };
  } else if (shadeFill) {
    cellProps.shading = { type: ShadingType.CLEAR, fill: shadeFill, color: "auto" };
  }
  return new TableCell(cellProps);
}

function buildTable(headerCells, dataRows) {
  const n = headerCells.length;
  const widths = getColumnWidths(n);

  const headerRow = new TableRow({
    children: headerCells.map((c, i) => buildCell(c, widths[i], { isHeader: true })),
    tableHeader: true,
  });

  const rows = dataRows.map((rowCells, idx) => {
    const shadeFill = idx % 2 === 0 ? null : "F2F2F2"; // 1a linha de dados (idx 0, impar) = branco
    return new TableRow({
      children: rowCells.map((c, i) => buildCell(c, widths[i], { shadeFill })),
    });
  });

  return new Table({
    width: { size: 9746, type: WidthType.DXA },
    columnWidths: widths,
    layout: "fixed",
    borders: STANDARD_BORDERS,
    rows: [headerRow, ...rows],
  });
}

// ---------- Tabela chave/valor (para blocos "card": **Label:** valor) ----------
function buildKVTable(pairs) {
  const widths = [2436, 7310];
  const rows = pairs.map(([label, value], idx) => {
    const shadeFill = idx % 2 === 0 ? null : "F2F2F2";
    return new TableRow({
      children: [
        new TableCell({
          width: { size: widths[0], type: WidthType.DXA },
          margins: CELL_MARGINS,
          verticalAlign: VerticalAlign.CENTER,
          shading: shadeFill ? { type: ShadingType.CLEAR, fill: shadeFill, color: "auto" } : undefined,
          children: [new Paragraph({ children: [new TextRun({ text: label, bold: true, font: "Arial", size: 20, color: COLOR_RED })] })],
        }),
        new TableCell({
          width: { size: widths[1], type: WidthType.DXA },
          margins: CELL_MARGINS,
          verticalAlign: VerticalAlign.CENTER,
          shading: shadeFill ? { type: ShadingType.CLEAR, fill: shadeFill, color: "auto" } : undefined,
          children: [new Paragraph({ children: makeRuns(value, { size: 20 }) })],
        }),
      ],
    });
  });
  return new Table({
    width: { size: 9746, type: WidthType.DXA },
    columnWidths: widths,
    layout: "fixed",
    borders: STANDARD_BORDERS,
    rows,
  });
}

// ---------- Card de seção (heading + bloco estruturado) — badge vermelho + barra escura ----------
function buildCardHeading(badge, title) {
  if (!badge) {
    return new Table({
      width: { size: 9746, type: WidthType.DXA },
      columnWidths: [9746],
      layout: "fixed",
      borders: STANDARD_BORDERS,
      rows: [new TableRow({
        children: [new TableCell({
          width: { size: 9746, type: WidthType.DXA },
          margins: { top: 120, bottom: 120, left: 160, right: 160 },
          shading: { type: ShadingType.CLEAR, fill: COLOR_CARD_BG, color: "auto" },
          children: [new Paragraph({ children: [new TextRun({ text: title, bold: true, font: "Arial", size: 22, color: "FFFFFF" })] })],
        })],
      })],
    });
  }
  const badgeWidth = 900;
  const restWidth = 9746 - badgeWidth;
  return new Table({
    width: { size: 9746, type: WidthType.DXA },
    columnWidths: [badgeWidth, restWidth],
    layout: "fixed",
    borders: STANDARD_BORDERS,
    rows: [new TableRow({
      children: [
        new TableCell({
          width: { size: badgeWidth, type: WidthType.DXA },
          margins: { top: 120, bottom: 120, left: 80, right: 80 },
          shading: { type: ShadingType.CLEAR, fill: COLOR_RED, color: "auto" },
          verticalAlign: VerticalAlign.CENTER,
          children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: badge, bold: true, font: "Arial", size: 22, color: "FFFFFF" })] })],
        }),
        new TableCell({
          width: { size: restWidth, type: WidthType.DXA },
          margins: { top: 120, bottom: 120, left: 160, right: 160 },
          shading: { type: ShadingType.CLEAR, fill: COLOR_CARD_BG, color: "auto" },
          verticalAlign: VerticalAlign.CENTER,
          children: [new Paragraph({ children: [new TextRun({ text: title, bold: true, font: "Arial", size: 22, color: "FFFFFF" })] })],
        }),
      ],
    })],
  });
}

// ---------- Banner de KPIs / "Placar Executivo" (calculado, nunca inventado) ----------
function buildStatBanner(tiles) {
  const n = tiles.length;
  const widths = getColumnWidths(n);
  const topRow = new TableRow({
    children: tiles.map((t, i) => new TableCell({
      width: { size: widths[i], type: WidthType.DXA },
      margins: CELL_MARGINS,
      shading: { type: ShadingType.CLEAR, fill: COLOR_RED, color: "auto" },
      verticalAlign: VerticalAlign.CENTER,
      children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: t.value, bold: true, font: "Arial", size: 20, color: "FFFFFF" })],
      })],
    })),
  });
  const bottomRow = new TableRow({
    children: tiles.map((t, i) => new TableCell({
      width: { size: widths[i], type: WidthType.DXA },
      margins: CELL_MARGINS,
      shading: { type: ShadingType.CLEAR, fill: COLOR_BANNER_LIGHT, color: "auto" },
      verticalAlign: VerticalAlign.CENTER,
      children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: t.caption, font: "Arial", size: 16, color: COLOR_GRAY_SECONDARY })],
      })],
    })),
  });
  return new Table({
    width: { size: 9746, type: WidthType.DXA },
    columnWidths: widths,
    layout: "fixed",
    borders: STANDARD_BORDERS,
    rows: [topRow, bottomRow],
  });
}

// ---------- Extrai um "badge" curto (C1, 2, etc.) de um heading, quando existir padrão claro ----------
function extractBadge(headingText) {
  let m;
  if ((m = /^Cad[êe]ncia\s+(\d+)\s*[—-]\s*(.+)$/i.exec(headingText))) {
    return { badge: `C${m[1]}`, title: m[2].trim() };
  }
  // Código alfanumérico com hífen interno (ex.: "S03-A", "HI-01", "OBJ-01") — exige espaço
  // dos DOIS lados do separador título/código para não confundir o hífen interno do código
  // com o separador (evita "S03-A" e "S03-B" colapsarem no mesmo badge "S03").
  if ((m = /^([A-Za-z]{1,4}\d{0,3}(?:-[A-Za-z0-9]+)*)\s+[—-]\s+(.+)$/.exec(headingText))) {
    return { badge: m[1], title: m[2].trim() };
  }
  if ((m = /^(Etapa|Fase|Est[aá]gio|Passo)\s+(\d+)\s*[—-]\s*(.+)$/i.exec(headingText))) {
    return { badge: m[2], title: (m[3] || headingText).trim() };
  }
  // Numeração decimal composta (ex.: "3.1. Processos e Jornada do Cliente") — preserva o
  // sub-índice completo no badge ("3.1"), nunca só o primeiro dígito (evita 3 cards "3" repetidos).
  if ((m = /^(\d+(?:\.\d+)+)\.?\s+(.+)$/.exec(headingText))) {
    return { badge: m[1], title: m[2].trim() };
  }
  if ((m = /^(\d+)\.\s*(.+)$/.exec(headingText))) {
    return { badge: m[1], title: m[2].trim() };
  }
  return { badge: null, title: headingText };
}

function pluralizePt(word) {
  const w = (word || "").trim();
  if (!w) return w;
  if (/[aeiouáéíóúâêôãõ]$/i.test(w)) return w + "s";
  if (/m$/i.test(w)) return w.slice(0, -1) + "ns";
  if (/[rz]$/i.test(w)) return w + "es";
  if (/l$/i.test(w)) return w.slice(0, -1) + "is";
  return w + "s";
}

// Deriva o "banner de KPIs" a partir de uma tabela real do documento — só dispara quando há
// uma coluna de duração/prazo claramente identificável E o contexto (título do doc/seção)
// fala de "cadência". Nunca fabrica número: cada tile exige >=2 linhas com padrão numérico
// consistente na tabela; caso contrário aquele tile é omitido (e o banner todo, se sobrar <2).
function computeTilesFromTable(tableBlock, durIdx) {
  const rows = tableBlock.rows;
  const tiles = [];

  const shortLabel = (text) => {
    const clean = stripBold(text);
    const { badge } = extractBadge(clean);
    if (badge) return /^\d+$/.test(badge) ? `C${badge}` : badge;
    return clean.length > 28 ? clean.slice(0, 28) + "…" : clean;
  };

  tiles.push({
    value: `${rows.length} ${pluralizePt(stripBold(tableBlock.header[0]))}`,
    caption: "total mapeado",
  });

  const toquesVals = rows
    .map((r, idx) => {
      const m = /(\d+)\s*toques?/i.exec(r[durIdx] || "");
      return m ? { idx, val: parseInt(m[1], 10) } : null;
    })
    .filter(Boolean);
  if (toquesVals.length >= 2) {
    const max = toquesVals.reduce((a, b) => (b.val > a.val ? b : a));
    tiles.push({ value: `${shortLabel(rows[max.idx][0])} — ${max.val} toques`, caption: "maior cadência" });
  }

  const diasVals = rows
    .map((r, idx) => {
      const m = /(\d+)\s*dias?/i.exec(r[durIdx] || "");
      return m ? { idx, val: parseInt(m[1], 10) } : null;
    })
    .filter(Boolean);
  if (diasVals.length >= 2) {
    const min = diasVals.reduce((a, b) => (b.val < a.val ? b : a));
    tiles.push({ value: `${shortLabel(rows[min.idx][0])} — ${min.val} dias`, caption: "urgência" });
  }

  const mensalIdx = rows.findIndex(r => /mensal/i.test(r[durIdx] || ""));
  if (mensalIdx !== -1 && tiles.length < 4) {
    tiles.push({ value: `${shortLabel(rows[mensalIdx][0])} — Mensal`, caption: "manutenção de carteira" });
  }

  return tiles.slice(0, 4);
}

function tryBuildStatTiles(blocksArr, h1TitleText) {
  let precedingHeadingText = "";
  for (let idx = 0; idx < blocksArr.length; idx++) {
    const b = blocksArr[idx];
    if (b.type === "heading") precedingHeadingText = b.text;
    if (b.type === "cardheading") precedingHeadingText = b.title;
    if (b.type === "table") {
      const durIdx = b.header.findIndex(h => /dura[cç][aã]o|prazo/i.test(h));
      const context = `${h1TitleText || ""} ${precedingHeadingText || ""}`;
      if (durIdx !== -1 && /cad[êe]ncia/i.test(context)) {
        const tiles = computeTilesFromTable(b, durIdx);
        if (tiles.length >= 2) {
          const sectionIdx = blocksArr.findIndex(bb => (bb.type === "heading" && bb.level >= 2) || bb.type === "cardheading");
          return { tiles, insertBeforeIndex: sectionIdx === -1 ? idx : sectionIdx };
        }
      }
      return null; // só considera a primeira tabela do documento
    }
  }
  return null;
}

// ================================================================
// PARSE MARKDOWN -> BLOCOS
// ================================================================
const blocks = [];
let h1Title = null;
let firstH1Seen = false;
const docMeta = {};
// Cada bloco de lista numerada ganha seu próprio numId (reference exclusiva) — o OOXML não
// reinicia a contagem automaticamente entre blocos não contíguos que compartilham numId
// (Word continua 4,5,6... em vez de reiniciar em 1 no segundo "1. 2. 3." do documento).
const orderedListRefs = [];

let i = 0;
while (i < lines.length) {
  const line = lines[i];
  const trimmed = line.trim();

  if (trimmed === "") { i++; continue; }
  if (trimmed === "---") { i++; continue; } // separador horizontal: espaçamento já vem dos estilos

  // Bloco de código / diagrama ASCII ```lang ... ```
  if (trimmed.startsWith("```")) {
    const lang = trimmed.slice(3).trim().toLowerCase();
    const codeLines = [];
    i++;
    while (i < lines.length && !lines[i].trim().startsWith("```")) {
      codeLines.push(lines[i]); // preserva indentação original — NÃO usar trimmed aqui
      i++;
    }
    i++; // pula a linha de fechamento ```
    if (lang === "mermaid") blocks.push({ type: "mermaid", code: codeLines.join("\n") });
    else blocks.push({ type: "code", lines: codeLines });
    continue;
  }

  // Headings (#, ##, ###, ####, #####)
  const mHeading = /^(#{1,5})\s+(.*)$/.exec(trimmed);
  if (mHeading) {
    const level = mHeading[1].length;
    const text = mHeading[2].trim();

    if (level === 1) {
      if (!firstH1Seen) {
        h1Title = text;
        firstH1Seen = true;
        blocks.push({ type: "heading", level: 1, text });
        i++;
        // ---- Consome o bloco de metadados logo após o H1 (linhas em negrito) ----
        while (i < lines.length && lines[i].trim() === "") i++;
        while (i < lines.length) {
          const mt = lines[i].trim();
          const mLabeled = /^\*\*([^*:]+):\*\*\s*(.*)$/.exec(mt);
          const mFullBold = !mLabeled && /^\*\*(.+)\*\*$/.exec(mt);
          if (mLabeled) {
            docMeta[mLabeled[1].trim()] = mLabeled[2].trim();
            blocks.push({ type: "paragraph", text: mt });
            i++;
          } else if (mFullBold) {
            if (!docMeta.__combinedParts) {
              const parts = mFullBold[1].split(/\s*·\s*/).map(s => s.trim()).filter(Boolean);
              if (parts.length >= 2) docMeta.__combinedParts = parts;
            }
            blocks.push({ type: "paragraph", text: mt });
            i++;
          } else {
            break;
          }
        }
        continue;
      } else {
        blocks.push({ type: "pagebreak" }); // quebra de página antes de cada H1 seguinte
        blocks.push({ type: "heading", level: 1, text });
        i++;
        continue;
      }
    }

    // Heading nível >= 2: verifica se é um "card" (heading seguido de >=2 linhas "**Label:** valor")
    let j = i + 1;
    while (j < lines.length && lines[j].trim() === "") j++; // linha branca entre heading e bloco não invalida o card
    const labelPairs = [];
    while (j < lines.length) {
      const lt = lines[j].trim();
      const mLab = /^\*\*([^*:]+):\*\*\s*(.+)$/.exec(lt);
      if (mLab) { labelPairs.push([mLab[1].trim(), mLab[2].trim()]); j++; } else break;
    }
    if (labelPairs.length >= 2) {
      const { badge, title } = extractBadge(text);
      blocks.push({ type: "cardheading", badge: badge ? cleanInline(badge) : badge, title: cleanInline(title) });
      blocks.push({ type: "kvtable", rows: labelPairs });
      i = j;
      continue;
    }

    blocks.push({ type: "heading", level, text });
    i++;
    continue;
  }

  // Tabela markdown (linha | ... | seguida de linha separadora |---|---|)
  if (trimmed.startsWith("|") && i + 1 < lines.length && isSeparatorRow(lines[i + 1].trim())) {
    const headerCells = splitRow(trimmed);
    i += 2;
    const dataRows = [];
    while (i < lines.length && lines[i].trim().startsWith("|")) {
      dataRows.push(splitRow(lines[i].trim()));
      i++;
    }
    blocks.push({ type: "table", header: headerCells, rows: dataRows });
    continue;
  }

  // Lista ordenada (1. 2. 3. ...) — numId próprio por bloco, ver comentário em orderedListRefs
  if (/^\d+\.\s+/.test(trimmed)) {
    const items = [];
    const start = parseInt(/^(\d+)\./.exec(trimmed)[1], 10);
    while (i < lines.length) {
      const L = lines[i];
      if (/^\d+\.\s+/.test(L.trim()) && !/^\s{2,}/.test(L)) { items.push({ text: L.trim().replace(/^\d+\.\s+/, "") }); i++; }
      else if (/^\s{2,}[-*]\s+/.test(L)) { items.push({ text: L.trim().replace(/^[-*]\s+/, ""), sub: true }); i++; }
      else if (L.trim() === "" && i + 1 < lines.length && (/^\s{2,}[-*]\s+/.test(lines[i + 1]) || /^\d+\.\s+/.test(lines[i + 1]))) { i++; }
      else break;
    }
    const ref = `numbers-${orderedListRefs.length}`;
    orderedListRefs.push({ ref, start });
    blocks.push({ type: "orderedlist", items, ref });
    continue;
  }

  // Lista não ordenada (- item / * item)
  if (/^[-*]\s+/.test(trimmed)) {
    const items = [];
    while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
      const lvl = /^\s{2,}/.test(lines[i]) ? 1 : 0;
      items.push({ text: lines[i].trim().replace(/^[-*]\s+/, ""), level: lvl });
      i++;
    }
    blocks.push({ type: "list", items });
    continue;
  }

  // Imagem ![alt](caminho) ou ![alt](<caminho com espaços>)
  const mImg = /^!\[([^\]]*)\]\(<?([^)>]+)>?\)\s*$/.exec(trimmed);
  if (mImg) {
    blocks.push({ type: "image", alt: mImg[1], src: path.resolve(SRC_DIR, mImg[2]) });
    i++;
    continue;
  }

  // Blockquote ("> ")
  if (trimmed.startsWith(">")) {
    const text = trimmed.replace(/^>\s?/, "");
    if (text.trim() === "") { i++; continue; }
    if (/^[-*]\s+/.test(text.trim())) blocks.push({ type: "list", items: [{ text: text.trim().replace(/^[-*]\s+/, ""), level: /^\s{2,}/.test(text) ? 2 : 1 }] });
    else blocks.push({ type: "blockquote", text });
    i++;
    continue;
  }

  // Parágrafo normal (fallback)
  blocks.push({ type: "paragraph", text: trimmed });
  i++;
}

// ================================================================
// METADADOS DERIVADOS — cliente / data / responsável / autoria / breadcrumb
// (nunca inventa: só reorganiza o que já existe no .md; cai em fallback vazio quando falta)
// ================================================================
function pickMeta(...labels) {
  for (const l of labels) if (docMeta[l]) return docMeta[l];
  return null;
}

let clienteVal = pickMeta("Cliente") || (docMeta.__combinedParts && docMeta.__combinedParts[0]) || null;
let dataVal = pickMeta("Data", "Data da Apresentação", "Vigência", "Ano") || (docMeta.__combinedParts && docMeta.__combinedParts[1]) || null;
let responsavelVal = pickMeta("Responsável") || (docMeta.__combinedParts && docMeta.__combinedParts[2]) || null;

if (!clienteVal && h1Title && h1Title.includes(" — ")) {
  const segs = h1Title.split(" — ").map(s => s.trim());
  clienteVal = segs[segs.length - 1];
}

let shortDocTitle = h1Title || "";
if (clienteVal && h1Title && h1Title.endsWith(clienteVal)) {
  shortDocTitle = h1Title.slice(0, h1Title.length - clienteVal.length).replace(/[—|-]\s*$/, "").trim() || h1Title;
}

const authorshipLine = [clienteVal, dataVal, responsavelVal].filter(Boolean).join(" · ");

// Insere a linha de autoria (vermelha, negrito, sublinhada) logo abaixo do H1
if (authorshipLine) {
  blocks.splice(1, 0, { type: "authorship", text: authorshipLine });
}

// Insere o banner de KPIs (quando computável com segurança) antes da primeira seção
const statResult = tryBuildStatTiles(blocks, h1Title);
if (statResult) {
  blocks.splice(statResult.insertBeforeIndex, 0, { type: "statbanner", tiles: statResult.tiles });
}

// ================================================================
// MONTA OS CHILDREN DO DOCUMENTO
// ================================================================
const children = [];
for (const b of blocks) {
  if (b.type === "pagebreak") {
    children.push({ __pagebreak: true });
  } else if (b.type === "heading") {
    children.push(heading(b.text, b.level));
  } else if (b.type === "authorship") {
    children.push(new Paragraph({
      children: [new TextRun({ text: b.text, bold: true, font: "Arial", size: 20, color: COLOR_RED, underline: {} })],
      spacing: { before: 0, after: 160, line: 240, lineRule: "auto" },
    }));
  } else if (b.type === "cardheading") {
    children.push(buildCardHeading(b.badge, b.title));
    children.push(new Paragraph({ text: "", spacing: { after: 40 } }));
  } else if (b.type === "kvtable") {
    children.push(buildKVTable(b.rows));
    children.push(new Paragraph({ text: "", spacing: { after: 80 } }));
  } else if (b.type === "statbanner") {
    children.push(buildStatBanner(b.tiles));
    children.push(new Paragraph({ text: "", spacing: { after: 160 } }));
  } else if (b.type === "paragraph") {
    children.push(paragraph(b.text));
  } else if (b.type === "list") {
    for (const item of b.items) {
      children.push(new Paragraph({
        children: makeRuns(item.text),
        numbering: { reference: "bullets", level: item.level || 0 },
      }));
    }
  } else if (b.type === "orderedlist") {
    for (const item of b.items) {
      children.push(new Paragraph({
        children: makeRuns(item.text),
        numbering: item.sub ? { reference: "bullets", level: 1 } : { reference: b.ref, level: 0 },
      }));
    }
  } else if (b.type === "image") {
    const buf = fs.readFileSync(b.src);
    // página paisagem A4: largura útil 14678 DXA (978 px); altura útil descontando cabeçalho, rodapé e legenda
    const dim = fitImage(buf, 978, 560, 1);
    children.push({ __landscape: [
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 80 },
        children: [new ImageRun({ type: "png", data: buf, transformation: dim, altText: { title: b.alt, description: b.alt, name: path.basename(b.src) } })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0 },
        children: [new TextRun({ text: cleanInline(b.alt), italics: true, font: "Arial", size: 18, color: COLOR_GRAY_SECONDARY })] }),
    ] });
  } else if (b.type === "mermaid") {
    let buf = null;
    try { buf = renderMermaid(b.code); } catch (e) {
      console.warn("AVISO: mermaid não renderizado (instale @mermaid-js/mermaid-cli); mantido como bloco de código.");
      b.code.split("\n").forEach(codeLine => children.push(new Paragraph({
        children: [new TextRun({ text: codeLine.length ? codeLine : " ", font: "Consolas", size: 18 })],
        spacing: { before: 0, after: 0, line: 240, lineRule: "auto" },
        shading: { type: ShadingType.CLEAR, fill: "F2F2F2", color: "auto" }, indent: { left: 160 } })));
      continue;
    }
    const dim = fitImage(buf, 650, 820, 2);
    children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 80, after: 120 },
      children: [new ImageRun({ type: "png", data: buf, transformation: dim, altText: { title: "Diagrama", description: "Diagrama", name: "diagrama.png" } })] }));
  } else if (b.type === "blockquote") {
    children.push(paragraph(b.text, { indent: { left: 720 } }));
  } else if (b.type === "code") {
    // Diagrama ASCII / bloco de código: fonte monoespaçada (preserva alinhamento),
    // fundo cinza claro (mesma cor de zebra das tabelas — não inventa cor nova).
    b.lines.forEach(codeLine => {
      children.push(new Paragraph({
        children: [new TextRun({
          text: codeLine.length ? codeLine : " ",
          font: "Consolas",
          size: 18,
        })],
        spacing: { before: 0, after: 0, line: 240, lineRule: "auto" },
        shading: { type: ShadingType.CLEAR, fill: "F2F2F2", color: "auto" },
        indent: { left: 160 },
      }));
    });
    children.push(new Paragraph({ text: "", spacing: { after: 80 } }));
  } else if (b.type === "table") {
    children.push(buildTable(b.header, b.rows));
    children.push(new Paragraph({ text: "", spacing: { after: 80 } }));
  }
}

// ================================================================
// HEADER / FOOTER — cabeçalho estilo breadcrumb (V4 COMPANY · Cliente | Título · Data)
// ================================================================
const headerLeftText = clienteVal ? `V4 COMPANY · ${clienteVal}` : "V4 COMPANY";
const headerRightText = [shortDocTitle, dataVal].filter(Boolean).join(" · ");

const docHeader = new Header({
  children: [
    new Paragraph({
      tabStops: [{ type: TabStopType.RIGHT, position: 9746 }],
      border: { bottom: { color: COLOR_RED, space: 0, style: BorderStyle.SINGLE, size: 6 } },
      spacing: { after: 80 },
      alignment: AlignmentType.LEFT,
      children: [
        new TextRun({ text: headerLeftText, bold: true, font: "Arial", size: 18, color: COLOR_RED }),
        new TextRun({ children: [new Tab()], font: "Arial", size: 18 }),
        new TextRun({ text: headerRightText, bold: false, font: "Arial", size: 18, color: COLOR_GRAY_SECONDARY }),
      ],
    }),
  ],
});

const docHeaderLandscape = new Header({
  children: [
    new Paragraph({
      tabStops: [{ type: TabStopType.RIGHT, position: 14678 }],
      border: { bottom: { color: COLOR_RED, space: 0, style: BorderStyle.SINGLE, size: 6 } },
      spacing: { after: 80 },
      alignment: AlignmentType.LEFT,
      children: [
        new TextRun({ text: headerLeftText, bold: true, font: "Arial", size: 18, color: COLOR_RED }),
        new TextRun({ children: [new Tab()], font: "Arial", size: 18 }),
        new TextRun({ text: headerRightText, bold: false, font: "Arial", size: 18, color: COLOR_GRAY_SECONDARY }),
      ],
    }),
  ],
});

const docFooter = new Footer({
  children: [
    new Paragraph({
      alignment: AlignmentType.RIGHT,
      children: [
        new TextRun({ text: "Página ", font: "Arial", size: 16, color: "888888" }),
        new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 16, color: "888888" }),
      ],
    }),
  ],
});

// ================================================================
// DOCUMENTO
// ================================================================
const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Arial", size: 20 },
        paragraph: { spacing: { after: 80, line: 240, lineRule: "auto" } },
      },
    },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { font: "Arial", size: 32, bold: true, color: COLOR_DARK_TITLE },
        paragraph: { spacing: { before: 300, after: 120, line: 240, lineRule: "auto" }, outlineLevel: 0 },
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { font: "Arial", size: 26, bold: true, color: COLOR_RED },
        paragraph: { spacing: { before: 240, after: 80, line: 240, lineRule: "auto" }, outlineLevel: 1 },
      },
      {
        id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { font: "Arial", size: 22, bold: true, color: COLOR_RED },
        paragraph: { spacing: { before: 200, after: 60, line: 240, lineRule: "auto" }, outlineLevel: 2 },
      },
      {
        id: "Heading4", name: "Heading 4", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { font: "Arial", size: 20, italics: true, color: "2E74B5" },
        paragraph: { spacing: { before: 0, after: 0, line: 240, lineRule: "auto" }, outlineLevel: 3 },
      },
      {
        id: "Heading5", name: "Heading 5", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { font: "Arial", size: 20, color: "2E74B5" },
        paragraph: { spacing: { before: 0, after: 0, line: 240, lineRule: "auto" }, outlineLevel: 4 },
      },
    ],
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }, {
          level: 1, format: LevelFormat.BULLET, text: "◦", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 1440, hanging: 360 } } },
        }, {
          level: 2, format: LevelFormat.BULLET, text: "▪", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 2160, hanging: 360 } } },
        }],
      },
      // Uma entrada de numbering por bloco de lista numerada do documento (orderedListRefs) —
      // cada uma com numId próprio, para que a numeração reinicie em 1 em cada bloco.
      ...orderedListRefs.map(({ ref, start }) => ({
        reference: ref,
        levels: [{
          level: 0, format: LevelFormat.DECIMAL, text: "%1.", start: start || 1, alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }],
      })),
    ],
  },
  sections: buildSections(),
});

function buildSections() {
  const PORTRAIT = { page: { size: { width: 11906, height: 16838 },
    margin: { top: 1080, bottom: 1080, left: 1080, right: 1080, header: 708, footer: 708 } } };
  const LANDSCAPE = { page: { size: { width: 11906, height: 16838, orientation: PageOrientation.LANDSCAPE },
    margin: { top: 1080, bottom: 1080, left: 1080, right: 1080, header: 708, footer: 708 } } };
  const out = []; let group = [];
  const flush = () => {
    while (group.length && group[0] && group[0].__pagebreak) group.shift();
    const real = group.map(c => (c && c.__pagebreak) ? new Paragraph({ children: [new PageBreak()] }) : c);
    if (real.length) out.push({ properties: PORTRAIT, headers: { default: docHeader }, footers: { default: docFooter }, children: real });
    group = [];
  };
  for (const c of children) {
    if (c && c.__landscape) {
      flush();
      out.push({ properties: LANDSCAPE, headers: { default: docHeaderLandscape }, footers: { default: docFooter }, children: c.__landscape });
    } else group.push(c);
  }
  flush();
  return out;
}

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(OUT, buffer);
  console.log("OK:", OUT);
  console.log("Blocos processados:", blocks.length);
}).catch(err => {
  console.error("ERRO:", err);
  process.exit(1);
});
