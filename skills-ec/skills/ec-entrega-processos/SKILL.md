---
name: ec-entrega-processos
description: Gerar o HTML completo da Apresentação de Entrega de Processos e Estratégia — o documento visual que será apresentado ao cliente na reunião de entrega do Playbook Comercial. O output é um arquivo HTML autocontido, com CSS inline, pronto para abrir no browser, converter em PDF ou hospedar no Claude Artifacts / claude.ai.
---

# Skill: /ec-entrega-processos
**Objetivo:** Gerar o HTML completo da Apresentação de Entrega de Processos e Estratégia — o documento visual que será apresentado ao cliente na reunião de entrega do Playbook Comercial. O output é um arquivo HTML autocontido, com CSS inline, pronto para abrir no browser, converter em PDF ou hospedar no Claude Artifacts / claude.ai.

---

## Inputs esperados

| Documento | O que contribui para a apresentação |
|---|---|
| **Playbook Comercial** (output da `/ec-playbook-comercial`) | Conteúdo principal — todos os capítulos sintetizados na apresentação |
| **Plano de ROI** | Nome do cliente, cidade, segmento, meta de receita — dados para a capa e contexto |
| **Documento Geral de Análise** (`/ec-analise`) | Diagnóstico inicial — base para o slide "De onde viemos" |

---

## Dados Prioritários e Benchmark Automático

> A skill gera o HTML de entrega do Playbook. Se o Playbook não estiver completo ou tiver seções baseadas em benchmark, a apresentação deve refletir isso visualmente.

**Se o Playbook Comercial estiver incompleto — pergunte:**
1. Quais capítulos do Playbook foram produzidos?
2. Quais seções foram construídas com base em benchmark e precisam de sinalização visual na apresentação?
3. Os dados da capa estão confirmados? (nome do cliente, cidade, segmento)

**Para seções sem conteúdo disponível, pesquise na internet:**
- Estrutura de apresentação de entrega de Playbook mais eficaz para o segmento do cliente
- Como comunicar premissas de benchmark de forma profissional em uma apresentação executiva

> ⚠️ Seções baseadas em benchmark devem ter nota visual na apresentação: **"Premissa a validar com o cliente".**

---

## Instruções para o modelo

Com os documentos em mãos, você deve:

1. **Extrair os pontos centrais de cada capítulo do Playbook** — não copiar o conteúdo integral, mas sintetizar o que o cliente precisa ver na reunião de entrega
2. **Gerar o HTML completo** — com CSS inline no `<style>`, sem dependências externas. O arquivo deve funcionar offline
3. **Seguir a identidade visual V4 Company** definida em `/ec-visual-style`: vermelho `#C0272D`, preto `#000000`, branco `#FFFFFF`
4. **Estruturar como apresentação de slides** — cada seção é uma "tela" que ocupa a largura total, com rolagem vertical
5. **Usar linguagem de entrega** — o tom é de apresentação ao cliente, não de documento interno. Direto, confiante, orientado a resultado

**Princípio central:** o cliente deve olhar para esta apresentação e entender em 30 minutos como sua operação comercial vai funcionar daqui em diante.

---

## Identidade Visual obrigatória

| Elemento | Especificação |
|---|---|
| **Cor principal** | `#C0272D` (vermelho V4) |
| **Cor de fundo escuro** | `#000000` (preto) |
| **Cor de fundo claro** | `#FFFFFF` (branco) |
| **Cor de fundo neutro** | `#F5F5F5` (cinza claro) |
| **Fonte principal** | `'Segoe UI', Arial, sans-serif` |
| **Cabeçalho de seção** | Fundo preto, texto branco bold, caixa alta |
| **Subseção** | Fundo `#C0272D`, texto branco bold |
| **Tabelas — cabeçalho** | Fundo `#C0272D`, texto branco bold |
| **Tabelas — primeira coluna** | Texto `#C0272D` bold |
| **Destaques / badges** | Fundo `#C0272D`, texto branco, border-radius arredondado |
| **Rodapé** | Fundo `#C0272D`, texto branco |

---

## Estrutura obrigatória do HTML

### 1. Capa
- Fundo preto, ocupando 100vh
- Logo ou nome "V4 COMPANY" em vermelho no topo
- "PLAYBOOK DE VENDAS" em branco bold, caixa alta, fonte grande
- "ESTRUTURAÇÃO COMERCIAL" em vermelho bold, caixa alta
- Nome do cliente em branco, tamanho médio
- Cidade — UF | Versão 1.0 | Ano em cinza
- Linha vermelha separadora
- "Elaborado em parceria com V4 Company" em vermelho pequeno no rodapé da capa

### 2. Agenda
- Fundo branco
- Título "O QUE VOCÊ VAI VER HOJE" em fundo preto, texto branco
- Lista numerada dos capítulos com ícone ou número em vermelho

### 3. Slide de contexto — "O problema que este Playbook resolve"
- Baseado na seção de Apresentação do Playbook
- Destaque visual para o diagnóstico principal (1 a 3 pontos críticos)

### 4. Capítulo 2 — Estrutura Organizacional e Pessoas
- Organograma Fase 1 e Fase 2 em formato visual (cards lado a lado ou tabela estilizada)
- Gatilho de transição em destaque

### 5. Capítulo 3 — Processo Comercial (BPMN)
- Tabela do fluxo principal estilizada
- Canais de entrada como badges coloridos

### 6. Capítulo 4 — KPIs e Rituais
- KPIs em cards (3 colunas): nome, meta e ícone de camada do funil
- Rituais em formato de linha do tempo ou tabela compacta

### 7. Capítulo 5 — Ferramentas e Stack Digital
- Stack em cards por categoria com nome da ferramenta e custo estimado
- Mapa de integração simplificado em texto estruturado

### 8. Capítulo 6 — Cadências e Scripts
- Réguas de cadência em formato visual: linha do tempo horizontal por toque
- Exemplos dos scripts principais (primeiro contato e fechamento)
- Quadro comparativo: Atendimento Atual vs. Padrão [Cliente]

### 9. Capítulo 7 — SLA
- Condições de chegada do lead em tabela compacta estilizada
- SLAs de processo em formato de timeline ou tabela com badges de prazo

### 10. Próximos Passos
- O que muda a partir de agora (lista de ações imediatas)
- Checklist da Fase 1: o que implementar primeiro
- Gatilho para a Fase 2

### 11. Rodapé / Encerramento
- Fundo vermelho
- "Este é um documento vivo. Revisado a cada 90 dias."
- "Construído em parceria com V4 Company"
- Contato / site V4

---

## Especificações técnicas do HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Playbook Comercial — [Nome do Cliente]</title>
  <style>
    /* Todo o CSS deve estar aqui — sem CDN externo */
    /* Usar variáveis CSS para as cores da identidade visual */
    :root {
      --vermelho: #C0272D;
      --preto: #000000;
      --branco: #FFFFFF;
      --cinza-claro: #F5F5F5;
      --cinza-medio: #666666;
    }
    /* Reset básico, tipografia, layout de seções, tabelas, cards, badges */
  </style>
</head>
<body>
  <!-- Estrutura de seções conforme ordem acima -->
</body>
</html>
```

**Requisitos técnicos obrigatórios:**
- Todo CSS no `<style>` do `<head>` — sem link para CDN ou arquivo externo
- Sem JavaScript — o documento deve funcionar como HTML estático
- Responsivo: funcionar bem em tela de notebook (1280px) e ao imprimir/exportar para PDF
- Cada seção principal deve ter `id` para navegação interna opcional
- Tabelas com `border-collapse: collapse` e padding confortável
- Imagens: não usar — apenas CSS puro para todos os elementos visuais
- Print-friendly: `@media print` com quebras de página (`page-break-before: always`) entre seções principais

---

## Regras de qualidade do HTML

- O HTML gerado deve ser válido e abrir sem erros em qualquer browser moderno
- Nenhuma seção deve ficar vazia — se um dado não estiver disponível no Playbook, indicar "[A definir com o cliente]"
- O conteúdo deve ser síntese — não copiar parágrafos inteiros do Playbook. Usar bullets, tabelas e destaques visuais
- As cores devem respeitar a hierarquia: preto para títulos de seção principal, vermelho para subseções e destaques, branco para texto sobre fundos escuros
- O documento deve ter aparência profissional ao ser impresso em A4 — testar mentalmente o layout antes de gerar

---

## Como usar esta skill

1. Digite `/ec-entrega-processos`
2. Compartilhe:
   - **Obrigatório:** Playbook Comercial completo (output da `/ec-playbook-comercial`)
   - **Complementar:** Plano de ROI (para dados da capa), Documento de Análise (para o slide de contexto)
3. O modelo gera o HTML completo — copie o output, salve como `.html` e abra no browser
4. Para converter em PDF: no browser, use Ctrl+P → Salvar como PDF (ou File → Print → Save as PDF)
5. Para hospedar: cole o HTML diretamente no Claude Artifacts ou em qualquer serviço de hosting estático
