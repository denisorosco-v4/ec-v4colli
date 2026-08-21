# Pacote de Skills — Estruturação Comercial (E.C.) · V4 Company

Este pacote contém as **23 skills** do sistema de Estruturação Comercial documentadas no Guia de Skills
(https://apresentacao-guia-skills-ec-v4.vercel.app), prontas para instalar em qualquer máquina com o
Claude Code.

## O que está incluído

```
skills/
├── ec-playbook/                 (skill de entrada — orquestra as demais)
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
└── ec-exportar-docx/            (inclui template_gerar_docx.js)
```

**Não incluídas neste pacote** (fora do escopo do Guia, por decisão do usuário):
`ec-visual-style`, `ec-poc`, `ec-avaliador-belt`, `ec-status-visoflex`.

## Pré-requisitos na máquina de destino

- [Claude Code](https://claude.ai/code) instalado.
- Para `/ec-exportar-docx`: Node.js instalado + pacote `docx` (`npm install -g docx`).
- Para `/ec-forecast-comercial`: Node.js instalado + pacote `exceljs` (`npm install -g exceljs`).

## Como instalar

### Opção 1 — Script automático (recomendado)

**Windows (PowerShell):**
```powershell
cd caminho\para\a\pasta\extraida
.\install.ps1
```

**macOS / Linux:**
```bash
cd caminho/para/a/pasta/extraida
chmod +x install.sh
./install.sh
```

O script copia cada pasta de `skills/` para `~/.claude/skills/` (ou `%USERPROFILE%\.claude\skills\` no
Windows) — o mesmo diretório de onde este pacote foi extraído. Skills com o mesmo nome já instaladas
são substituídas; nenhuma outra skill existente na máquina é afetada.

### Opção 2 — Manual

1. Extraia o `.zip`.
2. Copie cada subpasta de `skills\` para dentro de:
   - Windows: `C:\Users\<seu-usuario>\.claude\skills\`
   - macOS/Linux: `~/.claude/skills/`
3. Reinicie o Claude Code (ou abra uma nova sessão) para que as skills apareçam na lista.

## Como verificar se funcionou

Abra o Claude Code na máquina de destino e digite `/ec-playbook` — se a skill responder com a
orientação de orquestração das 20 etapas, a instalação funcionou. Repita para qualquer outra skill do
pacote (`/ec-kickoff`, `/ec-analise`, etc.).

## Origem

Pacote gerado em 20/08/2026 a partir da instalação local de Denis Orosco
(`C:\Users\denis\.claude\skills\`), com o mesmo escopo do Guia de Skills publicado em
https://apresentacao-guia-skills-ec-v4.vercel.app.
