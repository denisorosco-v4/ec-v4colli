---
name: ec-exportar-docx
description: Converter arquivos `.md` de entregas de Estruturação Comercial (E.C.) em arquivos `.docx` com o estilo visual exato do padrão E.C./V4 Company — via geração programática com `docx` (npm), não pandoc.
---

# Skill: /ec-exportar-docx

**Objetivo:** Converter arquivos `.md` de entregas de Estruturação Comercial (E.C.) em arquivos `.docx` com o estilo visual exato do padrão E.C./V4 Company — via geração programática com `docx` (npm), não pandoc.

---

## Fluxo de execução

1. Receber o caminho do arquivo `.md` (ou lista de arquivos)
2. Copiar `template_gerar_docx.js` (nesta mesma pasta da skill) para o diretório de trabalho/scratchpad como `_gerar_docx.js` — **não reescrever o parser do zero**; ele já lê o `.md` direto do disco (`fs.readFileSync`) e cobre toda a sintaxe descrita abaixo. Reescrever do zero é a maior fonte de risco de perder fidelidade de conteúdo.
3. Executar: `node _gerar_docx.js "<caminho\entrada.md>" ["<caminho\saida.docx>"]` (se o caminho de saída for omitido, sai ao lado do `.md` com extensão `.docx`)
4. Validar o `.docx` gerado (ver seção Validação)
5. Deletar o script temporário (`_gerar_docx.js`) — **nunca delete `template_gerar_docx.js`**, ele é o mestre reutilizável da skill
6. Reportar resultado

Se o markdown tiver alguma sintaxe que o template ainda não cobre (ver "Cobertura do template" abaixo), ajuste a cópia `_gerar_docx.js` pontualmente — e, se a extensão for genérica e reaproveitável, retro-alimente `template_gerar_docx.js` para a próxima vez.

---

## Pré-requisitos

```powershell
node --version        # Node.js instalado
npm list -g docx      # pacote docx instalado globalmente
```

Se `docx` não estiver instalado:
```powershell
npm install -g docx
```

> **Nota Windows:** o `template_gerar_docx.js` já resolve `docx` automaticamente mesmo quando instalado só globalmente (tenta `require("docx")` e cai para `%APPDATA%\npm\node_modules`, `NODE_PATH`, etc.). Só defina `$env:NODE_PATH = "C:\Users\<usuario>\AppData\Roaming\npm\node_modules"` manualmente se, por algum motivo, esse fallback falhar.

---

## Cobertura do template (`template_gerar_docx.js`)

O template já interpreta, linha a linha, direto do `.md` fonte:

| Sintaxe Markdown | Tratamento no .docx |
|---|---|
| `# ` … `##### ` | Heading1–Heading5 (specs abaixo) |
| `**negrito**` / `*itálico*` | `TextRun` com `bold`/`italics` — funciona inline, misturado com texto normal, dentro de parágrafos, listas, blockquotes e células de tabela |
| `[texto](url)` | `ExternalHyperlink` real (clicável), cor `#2E74B5`, sublinhado — nunca deixar o `[texto](url)` cru como texto |
| `- item` / `* item` | Lista com marcador via `numbering` (`LevelFormat.BULLET`), nunca caractere `•` digitado no texto |
| `1. item` | Lista numerada via `numbering` (`LevelFormat.DECIMAL`) — a numeração automática do Word, não o dígito literal do markdown |
| `> texto` | Parágrafo recolhido (indent left 720), preserva negrito/itálico/link internos |
| Tabela `\| ... \|` + linha separadora `\|---\|---\|` | `Table` com header vermelho, zebra, bordas — ver spec de Tabelas |
| ` ```lang ... ``` ` (bloco de código/diagrama ASCII, ex.: fluxogramas com `↓ ├── └──`) | Cada linha em `Paragraph` separado, fonte **Consolas** (monoespaçada — preserva alinhamento vertical do diagrama), fundo `#F2F2F2` (mesma cor de zebra das tabelas, não inventa cor nova), indentação leve. **Nunca** usar Arial aqui — sendo proporcional, quebra o alinhamento de diagramas ASCII |
| `---` (linha horizontal isolada) | Ignorado — o espaçamento já vem dos estilos de heading/parágrafo |
| Bloco de `**Label:** valor` logo abaixo do H1 (uma ou várias linhas consecutivas) | Consumido como metadados do documento (Cliente/Data/Responsável/Versão/etc.) — alimenta o cabeçalho breadcrumb e a linha de autoria (ver Identidade Visual abaixo) e continua renderizado como parágrafo normal, nada é perdido |
| Heading nível ≥2 seguido imediatamente (linha em branco tolerada, mas não linhas de outro tipo) por **≥2 linhas consecutivas** `**Label:** valor` | Vira um "card": heading renderizado como barra escura (com badge vermelho quando um código/número é detectável no texto do heading) + as linhas viram uma tabela chave/valor de 2 colunas — ver "Cards de item" abaixo |
| Tabela com coluna de cabeçalho contendo `Duração`/`Prazo` **e** contexto (H1 ou heading da seção) contendo "Cadência" | Gera automaticamente um banner de KPIs ("placar executivo") acima da primeira seção — ver "Banner de KPIs" abaixo. Nunca fabrica número: cada tile exige padrão numérico consistente em ≥2 linhas da tabela; sem isso, aquele tile (ou o banner inteiro) é omitido |

Se aparecer uma sintaxe nova (ex.: imagem `![]()`, tabela com célula mesclada, lista com múltiplos níveis de indentação), trate como extensão do template — não como exceção ad-hoc só naquele script descartável.

---

## ESPECIFICAÇÕES TÉCNICAS — aplicar RIGOROSAMENTE

### Página
- Tamanho: A4 (width: 11906, height: 16838 DXA)
- Orientação: Retrato
- Margens: top 1080, bottom 1080, left 1080, right 1080 DXA
- Margem de cabeçalho: 708 DXA | Margem de rodapé: 708 DXA
- **Largura útil (área de conteúdo): 9746 DXA**

### Paleta de Cores (valores exatos)
| Elemento | Hex |
|---|---|
| Vermelho primário (H2–H3, header, tabela header, badge de card, topo do banner de KPI) | `#C0272D` |
| Título principal (H1) | `#202124` (quase preto — não usa o vermelho) |
| Azul médio (H4, H5, links) | `#2E74B5` |
| Texto corpo | `#333333` (ou default) |
| Texto secundário / metadados / cabeçalho breadcrumb (lado direito) | `#555555` |
| Rodapé | `#888888` |
| Fundo linha par de tabela / fundo de bloco de código | `#F2F2F2` |
| Fundo header de tabela | `#C0272D` |
| Fundo de card de item (heading estruturado) | `#000000`, texto `#FFFFFF` |
| Fundo da base do banner de KPI (linha de legendas) | `#F5F5F5` |
| Borda interna de tabela | `#CCCCCC` |
| Borda externa de tabela | `#000000` |
| Branco | `#FFFFFF` |

> Esses tokens vêm dos design systems já usados pelas skills `documento-de-entrega` (relatório branco) e `ec-entrega-processos` (apresentação de entrega) — o `/ec-exportar-docx` aproxima esse mesmo padrão em Word nativo (OOXML via `docx`), sem os recursos que só CSS permite (canto arredondado, sombra). Ver "Identidade Visual — elementos calculados" abaixo.

### Fonte
- Família universal do corpo: **Arial** (ascii, hAnsi, eastAsia e cs)
- Tamanho base: 20 half-pt (10pt)
- Blocos de código/diagrama ASCII: **Consolas**, 18 half-pt (9pt) — única exceção ao Arial, obrigatória para não quebrar alinhamento de diagramas

### Hierarquia de Títulos

| Markdown | Style ID | Tamanho (half-pt) | Cor | Bold | Itálico | Antes | Depois |
|---|---|---|---|---|---|---|---|
| `#` H1 | Heading1 | 32 (16pt) | #202124 | Sim | Não | 300 | 120 |
| `##` H2 | Heading2 | 26 (13pt) | #C0272D | Sim | Não | 240 | 80 |
| `###` H3 | Heading3 | 22 (11pt) | #C0272D | Sim | Não | 200 | 60 |
| `####` H4 | Heading4 | 20 (10pt) | #2E74B5 | Não | Sim | 0 | 0 |
| `#####` H5 | Heading5 | 20 (10pt) | #2E74B5 | Não | Não | 0 | 0 |

Todos os headings: font Arial, alinhamento left, lineRule auto, line 240.

### Corpo de Texto
- Arial, 20 half-pt (10pt), cor padrão
- Espaçamento: before 0, after 80, line 240, lineRule auto
- Bold, itálico e link apenas onde o Markdown indicar (`**texto**`, `*texto*`, `[texto](url)`)

### Cabeçalho (Header) — todas as páginas, estilo breadcrumb
- Um parágrafo com dois runs + uma tabulação real entre eles (`new Tab()` como child — nunca `"\t"` dentro do texto de um `TextRun`, isso vira caractere literal não conformante no OOXML), alinhamento LEFT com `tabStops: [{ type: RIGHT, position: 9746 }]`
- Borda inferior: cor #C0272D, tamanho 6, single, espaço 0
- Espaço depois do parágrafo: 80
- **Run 1 (esquerda):** `V4 COMPANY · {Cliente}` — Arial 18 half-pt, bold, cor #C0272D. `{Cliente}` vem do metadado `Cliente:` capturado após o H1 (ou, na ausência, do último segmento do H1 separado por ` — `)
- **Run 2 (direita):** `{Título curto do doc} · {Data}` — Arial 18 half-pt, cor #555555, sem bold. `{Título curto}` é o H1 sem o sufixo do nome do cliente; `{Data}` vem de `Data:`/`Data da Apresentação:`/`Vigência:`/`Ano:`, o que existir primeiro

### Linha de autoria (corpo, logo abaixo do H1)
- Um parágrafo bold, vermelho (#C0272D), **sublinhado** (`underline: {}`), juntando `{Cliente} · {Data} · {Responsável}` (omitindo o que não existir) — reconstrói em destaque o que já está nos metadados do documento, sem duplicar dado novo
- As linhas originais `**Cliente:**`, `**Data:**`, `**Responsável:**` etc. continuam sendo renderizadas normalmente logo abaixo — nada é removido, a linha de autoria é um elemento adicional

### Rodapé (Footer) — todas as páginas
- Um parágrafo, alinhamento RIGHT
- Texto: "Página " + campo PAGE automático (`PageNumber.CURRENT`)
- Arial 16 half-pt, cor #888888

### Cards de item (heading estruturado)
Quando um heading nível ≥2 é seguido (após pular linhas em branco) por **duas ou mais linhas consecutivas** `**Label:** valor`, o par vira um "card":
- O heading vira uma tabela de 1 linha: se o texto do heading tiver um código/número reconhecível (`Cadência 1 — ...`, `C1 — ...`, `Etapa 2 — ...`, `1. ...`), a primeira célula (900 DXA) mostra esse código em badge vermelho (#C0272D) bold branco centralizado, e a segunda célula (resto da largura) mostra o restante do título em bold branco sobre fundo preto (#000000). Sem código reconhecível, é uma única célula preta full-width com o heading completo
- As linhas `**Label:** valor` viram uma tabela chave/valor de 2 colunas (2436 + 7310 DXA): label em bold vermelho, valor normal (preserva negrito/itálico/link internos), zebra `#F2F2F2` nas linhas pares
- Esse heading **não** usa o estilo `HeadingN` nem entra no outline do Word (é uma tabela) — headings "normais" (sem o padrão de ≥2 labels) continuam exatamente como antes

### Banner de KPIs / "Placar Executivo" (calculado, nunca inventado)
Antes da primeira seção do documento, se a primeira tabela markdown tiver uma coluna de cabeçalho batendo com `/dura[cç][aã]o|prazo/i` **e** o H1 ou o heading da seção contiver "Cadência":
- Tile 1 (sempre, se a tabela existir): `{nº de linhas} {header da 1ª coluna pluralizado}` / legenda "total mapeado"
- Tile "maior cadência": maior valor de `\d+\s*toques?` na coluna de duração — só entra se ≥2 linhas tiverem esse padrão
- Tile "urgência": menor valor de `\d+\s*dias?` na coluna de duração — só entra se ≥2 linhas tiverem esse padrão
- Tile "manutenção de carteira": primeira linha cuja coluna de duração contenha "Mensal" (literal) — só entra se existir
- Banner só é emitido se restarem **≥2 tiles válidos**; senão nada é inserido (evita fabricar dado). Renderizado como tabela de 2 linhas: topo vermelho/branco bold, base `#F5F5F5`/cinza (#555555)

### Tabelas
- Largura total: **9746 DXA** (sempre WidthType.DXA, nunca PERCENTAGE)
- Layout: fixed
- Bordas externas: #000000, single, sz 4
- Bordas internas: #CCCCCC, single, sz 4
- Margens de célula: top 80, bottom 80, left 120, right 120 DXA
- ShadingType: **CLEAR** (NUNCA SOLID)
- **Linha de cabeçalho (primeira linha):** fundo #C0272D, texto #FFFFFF, Arial 18 half-pt, bold, alinhamento left
- **Linhas ímpares de dados:** fundo #FFFFFF
- **Linhas pares de dados:** fundo #F2F2F2
- Células com `**bold**` no markdown: aplicar bold no TextRun

**Distribuição de colunas (soma = 9746 DXA):**
| Colunas | Larguras |
|---|---|
| 2 | 4873 + 4873 |
| 3 | 3248 + 3248 + 3250 |
| 4 | 2436 + 2436 + 2437 + 2437 |
| 5 | 1949 cada |
| >5 | dividir 9746 igualmente, sobra no último |

### Listas
- NUNCA inserir caracteres de bullet manualmente (• ou •)
- Usar `LevelFormat.BULLET` com numbering config para listas não-ordenadas (`- item`)
- Usar `LevelFormat.DECIMAL` para listas ordenadas (`1. item`)
- Indentação: left 720, hanging 360

### Blocos de código / diagramas ASCII
- Detectar por ` ``` ` de abertura/fechamento (qualquer linguagem ou nenhuma)
- Cada linha do bloco → um `Paragraph` próprio, preservando a linha **original, sem trim** (indentação e caracteres como `↓ ├── └── →` são parte do conteúdo)
- Fonte Consolas 18 half-pt, sem negrito/itálico, `spacing: {before:0, after:0}`
- Fundo `#F2F2F2` via `shading` no próprio `Paragraph` (não em tabela)

### Links
- `[texto](url)` → `ExternalHyperlink({ link: url, children: [TextRun azul #2E74B5 sublinhado] })`
- Nunca deixar o markdown do link como texto literal

### Quebras de Página
- Inserir pageBreak **antes** de cada H1, exceto o primeiro do documento
- Usar PageBreak dentro de Paragraph — nunca standalone

---

## Regras críticas

1. **Nunca use WidthType.PERCENTAGE** — sempre WidthType.DXA
2. **Tabelas precisam de dupla declaração de largura**: `columnWidths` no Table E `width` em cada TableCell
3. **Nunca use `\n`** — use Paragraphs separados
4. **Nunca use ShadingType.SOLID** — sempre ShadingType.CLEAR
5. **PageBreak deve estar dentro de um Paragraph** com `children: [new PageBreak()]`
6. **Override built-in styles** — usar IDs exatos: "Heading1", "Heading2", etc.
7. **Incluir `outlineLevel`** — obrigatório (0 para H1, 1 para H2, etc.)
8. **Nunca colocar `"\t"` como texto dentro de um `TextRun`** — usar `new Tab()` como child próprio (o header do template já faz isso certo)
9. **Ler o `.md` com `fs.readFileSync` e parsear programaticamente** — nunca retranscrever o conteúdo manualmente dentro do script gerador; é a maior fonte de erro de fidelidade/ortografia

---

## Validação

O `.docx` é um ZIP com XML dentro. Validação portável (não depende de path de máquina específica) — rodar sempre após gerar:

```powershell
$docx = "CAMINHO_DO_DOCX_GERADO"
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead($docx)
$entry = $zip.Entries | Where-Object { $_.FullName -eq "word/document.xml" }
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8)
$xmlContent = $reader.ReadToEnd()
$reader.Close(); $stream.Close(); $zip.Dispose()

try { [xml]$x = $xmlContent; Write-Output "document.xml valido" } catch { Write-Output "ERRO XML" }

# Confira que as contagens batem com o markdown fonte (conte manualmente H1/H2/H3, tabelas,
# itens de lista no .md e compare):
$h1 = [regex]::Matches($xmlContent, 'w:val="Heading1"').Count
$h2 = [regex]::Matches($xmlContent, 'w:val="Heading2"').Count
$h3 = [regex]::Matches($xmlContent, 'w:val="Heading3"').Count
$tbl = [regex]::Matches($xmlContent, '<w:tbl>').Count
$numPr = [regex]::Matches($xmlContent, '<w:numPr>').Count
$hyperlink = [regex]::Matches($xmlContent, '<w:hyperlink').Count
$hasDoubleAsterisk = $xmlContent.Contains('**')          # deve ser False — senão markdown nao foi convertido
$hasRawLink = [regex]::IsMatch($xmlContent, '\]\(http')  # deve ser False — senão link nao foi convertido
Write-Output "H1=$h1 H2=$h2 H3=$h3 Tabelas=$tbl numPr=$numPr Hyperlinks=$hyperlink ResidualBold=$hasDoubleAsterisk ResidualLink=$hasRawLink"
```

Se `ResidualBold` ou `ResidualLink` vier `True`, ou as contagens não baterem com o `.md` fonte, o parser perdeu algum trecho — inspecionar o `document.xml` (é texto/XML, pode abrir direto) e corrigir antes de entregar.

Se a validação falhar de forma estrutural (zip corrompido, XML malformado): descompactar o `.docx`, inspecionar o XML, corrigir e recompactar.

---

## Relatório final

```
✓ Convertido com sucesso:
  - [nome].docx
  Destino: [caminho]
  Validação: PASSOU / FALHOU [mensagem se falhou]
  Conferência: H1=.. H2=.. H3=.. Tabelas=.. Itens de lista=.. (bateram com o .md fonte)

✗ Erro:
  - [nome].md → [mensagem]
```

---

## Exemplos de uso

```
/ec-exportar-docx
Arquivo: c:\...\WK Carpetes\Outputs\Playbook Comercial — WK Carpetes.md
```

```
/ec-exportar-docx
Pasta: c:\...\WK Carpetes\Outputs
Arquivos: todos
```

Chamada direta do template (fora do fluxo da skill, ex.: para depurar):
```
node "<pasta-da-skill>\template_gerar_docx.js" "C:\caminho\entrada.md" "C:\caminho\saida.docx"
```
