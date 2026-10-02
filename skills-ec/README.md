# Pacote de Skills — Estruturação Comercial (E.C.) + Marca V4 · V4 Company

Este pacote contém **31 skills**, prontas para instalar em qualquer máquina com o Claude Code:

- **25 skills de Estruturação Comercial (E.C.)**: o sistema documentado no Guia de Skills
  (https://apresentacao-guia-skills-ec-v4.vercel.app), mais `ec-poc` e `ec-visual-style`.
- **6 skills de Marca e formatos V4**: identidade visual e geração de documentos, decks e interfaces.

## O que está incluído

```
skills/
│  ── Estruturação Comercial ──
├── ec-playbook/                 (skill de entrada — orquestra as demais)
├── ec-poc/                      (orquestra uma POC com 6 entregáveis)
├── ec-kickoff/
├── ec-entrevista-gestor/
├── ec-entrevista-bottom/
├── ec-entrevista-top/
├── ec-analise/
├── ec-org-pessoas/
├── ec-kpis/
├── ec-ferramentas/
├── ec-bpmn/
├── ec-cadencia/
├── ec-cha/
├── ec-script/
├── ec-sla/
├── ec-playbook-comercial/
├── ec-entrega-processos/
├── ec-comissionamento/
├── ec-dre/
├── ec-forecast-comercial/
├── ec-entrega-gestao/
├── ec-stack/
├── ec-crm/
├── ec-exportar-docx/            (inclui template_gerar_docx.js)
├── ec-visual-style/
│
│  ── Marca e formatos V4 ──
├── v4-brand-v2/                 (brandbook oficial 2025 — base das demais)
├── v4-docs/                     (documentos Word .docx com a marca V4)
├── v4-slides/                   (apresentações PowerPoint .pptx com a marca V4)
├── documento-de-entrega/        (relatório branco A4 em HTML)
├── layout-de-entrega/           (deck HTML "Sales Enablement" — inclui assets/template.html)
└── geral-frontend-design/       (interfaces e páginas web com design de qualidade)
```

**Não incluídas neste pacote:**
- `ec-avaliador-belt` e `master-black-belt` (Lean Six Sigma, fora do escopo da E.C.).
- `ec-status-visoflex`: contém dados de um cliente específico.

## Pré-requisitos na máquina de destino

- [Claude Code](https://claude.ai/code) instalado.
- Para `/ec-exportar-docx`: Node.js instalado + pacote `docx` (`npm install -g docx`).
- Para `/ec-forecast-comercial`: Node.js instalado + pacote `exceljs` (`npm install -g exceljs`).
- Para `/ec-visual-style`: [Pandoc](https://pandoc.org) instalado e um `.docx` de referência no padrão E.C.
  (ajuste o caminho do `--reference-doc` no SKILL.md para um arquivo da sua máquina).
- Para `/ec-poc`: os caminhos de Inputs/Output no SKILL.md apontam para a estrutura de pastas do autor —
  ajuste-os para a sua máquina.
- Para `/v4-slides`: Node.js + `pptxgenjs` (`npm install -g pptxgenjs`).

## Como instalar

### Opção 1 — Script automático (recomendado)

**Windows (PowerShell):**
```powershell
cd caminho\para\a\pasta\skills-ec
.\install.ps1
```

**macOS / Linux:**
```bash
cd caminho/para/a/pasta/skills-ec
chmod +x install.sh
./install.sh
```

O script copia cada pasta de `skills/` para `~/.claude/skills/` (ou `%USERPROFILE%\.claude\skills\` no
Windows). Skills com o mesmo nome já instaladas são substituídas; nenhuma outra skill existente na
máquina é afetada.

### Opção 2 — Manual

1. Baixe ou clone este repositório.
2. Copie cada subpasta de `skills\` para dentro de:
   - Windows: `C:\Users\<seu-usuario>\.claude\skills\`
   - macOS/Linux: `~/.claude/skills/`
3. Reinicie o Claude Code (ou abra uma nova sessão) para que as skills apareçam na lista.

## Como verificar se funcionou

Abra o Claude Code na máquina de destino e digite `/ec-playbook`. Se a skill responder com a
orientação de orquestração das 20 etapas, a instalação funcionou. Repita para qualquer outra skill do
pacote (`/ec-kickoff`, `/v4-brand-v2`, `/documento-de-entrega`, etc.).

## Origem

Pacote gerado a partir da instalação local de Denis Orosco (`C:\Users\denis\.claude\skills\`).
Versão inicial em 20/08/2026 (23 skills E.C.); atualizado em 02/10/2026 com as versões mais recentes,
`ec-poc`, `ec-visual-style` e as 6 skills de Marca e formatos V4.
