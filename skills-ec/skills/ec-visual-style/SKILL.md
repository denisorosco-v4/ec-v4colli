---
name: ec-visual-style
description: Define o padrão visual oficial (tipografia, cores, formatação) usado em todos os entregáveis de Estruturação Comercial (E.C.) e aplicado automaticamente pelo Pandoc na conversão de arquivos .md para .docx.
---

# Padrão Visual — Entregáveis de Estruturação Comercial (E.C)

> Este padrão é aplicado automaticamente via Pandoc com `--reference-doc` apontando para o template oficial. Nenhuma formatação manual é necessária — o template aplica o estilo ao converter `.md` para `.docx`.

---

## Paleta de Cores

| Elemento | Cor | Hex |
|---|---|---|
| Vermelho principal (E.C.) | Vermelho escuro | `#C0272D` |
| Texto corpo | Preto | `#000000` |
| Header de tabela | Vermelho escuro | `#C0272D` (fundo) + `#FFFFFF` (texto) |

---

## Hierarquia de Títulos — Mapeamento Markdown → Visual

| Nível Markdown | Estilo Visual | Exemplo real |
|---|---|---|
| `# H1` — Título do documento | Grande, negrito, **PRETO** | "PLAYBOOK DE VENDAS" |
| `## H2` — Capítulo | Negrito, **VERMELHO `#C0272D`**, destaque | "Capítulo 2 — Estrutura Organizacional e Pessoas" |
| `### H3` — Seção | Negrito, **VERMELHO `#C0272D`**, médio | "Seção 2.1 — Organograma Fase 1" |
| `#### H4` — Sub-seção | Negrito, **VERMELHO `#C0272D`**, menor | "SDR — A Contratar (Prioridade 1)" |

---

## Padrão Visual por Elemento

| Elemento | Estilo |
|---|---|
| Título do documento (`# H1`) | Preto, grande, bold — sem fundo colorido |
| Subtítulo E.C. (`## H2` logo após o título) | Vermelho `#C0272D`, bold — sem fundo colorido |
| Dados do cliente na abertura | Label em **bold** preto, valor em texto normal |
| Cabeçalho de capítulo (`## H2`) | Vermelho `#C0272D`, bold, proeminente — sem fundo |
| Cabeçalho de seção (`### H3`) | Vermelho `#C0272D`, bold italic, médio — sem fundo |
| Cabeçalho de sub-seção (`#### H4`) | Vermelho `#C0272D`, bold, menor — sem fundo |
| Corpo do texto | Calibri ~10–11pt, preto, regular |
| Cabeçalho de tabela | Fundo vermelho `#C0272D`, texto branco bold, caixa alta |
| Linhas de dados de tabela | Fundo branco, bordas finas, texto preto |
| Primeira coluna de tabela (labels) | Texto vermelho bold (quando a tabela usa esse padrão) |
| Bloco de nota / citação (`>`) | Itálico recuado |
| Código / árvore de estrutura | Monospace (Courier New) |
| Separador de seção (`---`) | Linha horizontal fina |

---

## Cabeçalho e Rodapé de Página

| Elemento | Estilo |
|---|---|
| Header esquerdo | Nome do documento, bold, vermelho `#C0272D` |
| Header direito | "Versão X.X \| Ano \| Confidencial", texto normal |
| Separador do header | Linha horizontal vermelha sob o cabeçalho |
| Rodapé | "Página N" centralizado |

---

## Estrutura da Página de Abertura

```
[PRETO bold, grande]   PLAYBOOK DE VENDAS
[VERMELHO bold]        ESTRUTURAÇÃO COMERCIAL

[bold] Cliente:        Nome do cliente
[bold] Localização:    Cidade — UF
[bold] Versão:         X.X | Ano
[bold] Parceria:       V4 Company
```

---

## Template e Geração Automática

**Template de referência:**
`c:\Users\User\Desktop\Trabalho\projetos\Projetos E.C\Decorti\Output\Entrega\decorti_playbook_comercial.docx`

**Comando de geração:**
```powershell
pandoc "input.md" -o "output.docx" --reference-doc="c:\Users\User\Desktop\Trabalho\projetos\Projetos E.C\Decorti\Output\Entrega\decorti_playbook_comercial.docx"
```

Usar sempre via skill `/ec-exportar-docx`.
