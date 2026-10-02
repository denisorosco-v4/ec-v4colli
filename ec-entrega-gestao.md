---
name: ec-entrega-gestao
description: Gerar o HTML completo da Apresentação de Entrega de Gestão e Performance — o documento visual que será apresentado ao cliente na reunião de entrega da Política de Comissionamento e do Forecast Comercial. O output é um arquivo HTML autocontido, com CSS inline, pronto para abrir no browser, converter em PDF ou hospedar no Claude Artifacts / claude.ai.
---

# Skill: /ec-entrega-gestao
**Objetivo:** Gerar o HTML completo da Apresentação de Entrega de Gestão e Performance — o documento visual que será apresentado ao cliente na reunião de entrega da Política de Comissionamento e do Forecast Comercial. O output é um arquivo HTML autocontido, com CSS inline, pronto para abrir no browser, converter em PDF ou hospedar no Claude Artifacts / claude.ai.

---

## Inputs esperados

| Documento | O que contribui para a apresentação |
|---|---|
| **Política de Comissionamento** (output da `/ec-comissionamento`) | Conteúdo principal — estrutura de remuneração por cadeira, simulações de ganho, bonificações e regras gerais |
| **Forecast Comercial** (output da `/ec-forecast-comercial`) | Conteúdo principal — benchmark, premissas, funil mensal, cenários e plano OKR |

---

## Dados Prioritários e Benchmark Automático

> A skill gera o HTML de entrega de Gestão e Performance. Se Comissionamento ou Forecast estiverem incompletos ou baseados em benchmark, a apresentação deve refletir isso.

**Se algum dos entregáveis não estiver completo — pergunte:**
1. A Política de Comissionamento foi produzida (mesmo que com premissas de benchmark)?
2. O Forecast Comercial foi produzido (mesmo que com premissas de benchmark)?
3. Os dados da capa estão confirmados? (nome do cliente, cidade, segmento)

**Para seções sem conteúdo disponível, pesquise na internet:**
- Como comunicar premissas de benchmark de forma profissional em apresentações executivas
- Estrutura de apresentação de gestão e performance mais eficaz para o segmento do cliente

> ⚠️ Seções baseadas em benchmark devem ter nota visual na apresentação: **"Premissa a validar com o cliente".**

---

## Instruções para o modelo

Com os documentos em mãos, você deve:

1. **Extrair os pontos centrais de cada entregável** — não copiar o conteúdo integral, mas sintetizar o que o cliente precisa ver na reunião de entrega
2. **Gerar o HTML completo** — com CSS inline no `<style>`, sem dependências externas. O arquivo deve funcionar offline
3. **Seguir a identidade visual V4 Company** definida em `/ec-visual-style`: vermelho `#C0272D`, preto `#000000`, branco `#FFFFFF`
4. **Estruturar como apresentação de slides** — cada seção é uma "tela" que ocupa a largura total, com rolagem vertical
5. **Usar linguagem de entrega** — o tom é de apresentação ao cliente, não de documento interno. Direto, confiante, orientado a resultado

**Princípio central:** o cliente deve olhar para esta apresentação e entender em 30 minutos como sua operação vai remunerar o time e qual é o caminho financeiro para atingir a meta.

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
- "GESTÃO E PERFORMANCE" em branco bold, caixa alta, fonte grande
- "ESTRUTURAÇÃO COMERCIAL" em vermelho bold, caixa alta
- Nome do cliente em branco, tamanho médio
- Cidade — UF | Versão 1.0 | Ano em cinza
- Linha vermelha separadora
- "Elaborado em parceria com V4 Company" em vermelho pequeno no rodapé da capa

### 2. Agenda
- Fundo branco
- Título "O QUE VOCÊ VAI VER HOJE" em fundo preto, texto branco
- Lista numerada dos capítulos com número em vermelho:
  1. O que estamos entregando
  2. Política de Comissionamento
  3. Forecast Comercial
  4. Próximos Passos

### 3. Slide de contexto — "O que estamos entregando hoje"
- Dois blocos lado a lado (ou empilhados): um para Comissionamento, outro para Forecast
- Cada bloco com fundo colorido (preto / vermelho), ícone textual e 2 linhas descrevendo o que o entregável resolve para o cliente
- Destaque: "Com estes dois entregáveis, sua operação sabe para onde vai e como vai motivar o time para chegar lá."

### 4. Política de Comissionamento — Princípios
- Título de seção em fundo preto
- Lista de 3 a 5 princípios da política do cliente em cards individuais com borda vermelha à esquerda
- Subtítulo: "A base que governa toda a remuneração variável desta operação"

### 5. Política de Comissionamento — Estrutura por Cadeira
- Uma subseção por cadeira comercial definida no documento
- Para cada cadeira: card com os campos principais em tabela compacta (modelo, base de cálculo, floor, acelerador, ceiling, quando é pago)
- Tabela de simulação de ganho por cenário (70% / 100% / 120% / 150% da meta) com destaques visuais nas linhas de 100% e acima
- Bonificações especiais em badges coloridos abaixo das tabelas

### 6. Política de Comissionamento — Regras Gerais
- Tabela compacta com as regras gerais (transparência, previsibilidade, prazo de pagamento, contestação, desligamento)
- Destaque visual para a regra de previsibilidade: "O vendedor deve conseguir calcular sua comissão a qualquer momento do mês"

### 7. Forecast Comercial — Premissas
- Título de seção em fundo preto
- Tabela de premissas com 3 colunas: Variável | Valor utilizado | Fonte
- Agrupadas por bloco: Funil de Aquisição / Base Existente / Pipeline Represado / Custos Comerciais
- Nota de conservadorismo em destaque (badge ou caixa vermelha): o que foi conservado e por quê

### 8. Forecast Comercial — Funil Mensal (12 meses)
- Versão sintética da tabela de funil — mostrar apenas as linhas de maior impacto visual: MQLs, SQLs, Novos Clientes, Receita Canal Ativo, Base Existente e Receita Total
- Linha de % atingimento da meta com formatação condicional textual (ex: células abaixo de 80% identificadas com "[⚠]", acima de 100% com "[✓]")
- Nota abaixo da tabela: "Modelo completo disponível em planilha separada"

### 9. Forecast Comercial — Cenários e Trimestres
- Tabela comparativa dos 3 cenários (Conservador / Realista / Otimista) com as métricas principais
- Tabela trimestral do cenário Realista (T1 a T4 + Total Ano) com Faturamento, % da Meta e Novos Clientes
- Destaque visual para o cenário Realista como "meta de trabalho"

### 10. Forecast Comercial — Plano de Ação OKR
- Uma subseção por trimestre (T1 a T4)
- Cada trimestre: Objetivo em destaque (fundo vermelho, texto branco) + tabela de KRs com Meta, Trava e Ação Principal
- Foco comunicado: T1 = processo | T2 = tração | T3–T4 = resultado

### 11. Próximos Passos
- O que muda a partir de agora (lista de ações imediatas divididas entre gestão e vendedores)
- Checklist de implementação imediata: comunicar a política ao time, validar premissas do forecast, definir o ritual de acompanhamento mensal
- Data sugerida para a primeira revisão de resultado

### 12. Rodapé / Encerramento
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
  <title>Gestão e Performance — [Nome do Cliente]</title>
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
- Nenhuma seção deve ficar vazia — se um dado não estiver disponível nos documentos, indicar "[A definir com o cliente]"
- O conteúdo deve ser síntese — não copiar parágrafos inteiros dos documentos. Usar bullets, tabelas e destaques visuais
- As cores devem respeitar a hierarquia: preto para títulos de seção principal, vermelho para subseções e destaques, branco para texto sobre fundos escuros
- O documento deve ter aparência profissional ao ser impresso em A4 — testar mentalmente o layout antes de gerar
- A tabela do Funil Mensal deve ser a versão compacta — mostrar só as linhas essenciais para o cliente entender a trajetória financeira

---

## Como usar esta skill

1. Digite `/ec-entrega-gestao`
2. Compartilhe:
   - **Obrigatório:** Política de Comissionamento completa (output da `/ec-comissionamento`)
   - **Obrigatório:** Forecast Comercial completo (output da `/ec-forecast-comercial`)
3. O modelo gera o HTML completo — copie o output, salve como `.html` e abra no browser
4. Para converter em PDF: no browser, use Ctrl+P → Salvar como PDF (ou File → Print → Save as PDF)
5. Para hospedar: cole o HTML diretamente no Claude Artifacts ou em qualquer serviço de hosting estático
