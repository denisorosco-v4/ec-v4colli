---
name: ec-dre
description: Construir o Modelo de Breakeven e Forecast Comercial completo da operação — um modelo financeiro com 5 componentes integrados: Benchmark de mercado, Premissas, Funil Mensal (12 meses), Cenários por Trimestre e Plano de Ação OKR. O output é um conjunto de tabelas estruturadas, prontas para importar em Google Sheets ou Excel.
---

# Skill: /ec-dre
**Objetivo:** Construir o Modelo de Breakeven e Forecast Comercial completo da operação — um modelo financeiro com 5 componentes integrados: Benchmark de mercado, Premissas, Funil Mensal (12 meses), Cenários por Trimestre e Plano de Ação OKR. O output é um conjunto de tabelas estruturadas, prontas para importar em Google Sheets ou Excel.

---

## O que este modelo entrega

| Componente | O que é | Para que serve |
|---|---|---|
| **1. Benchmark** | Taxas e métricas reais do mercado para o segmento do cliente | Ancora as premissas em dados reais — não em achismos |
| **2. Premissas** | Todas as variáveis que vão alimentar o modelo | Define o ponto de partida e torna o modelo auditável |
| **3. Funil Mensal** | Projeção mês a mês por 12 meses — de investimento em exposição até faturamento total | Mostra quando e como a meta será atingida |
| **4. Cenários & Trimestres** | Simulação em 3 cenários (Conservador, Realista, Otimista) consolidados por trimestre | Permite tomar decisões baseadas em faixas de resultado, não em um número único |
| **5. Plano de Ação OKR** | Objetivos e resultados-chave derivados das metas financeiras | Conecta o número do forecast às ações concretas que o time precisa executar |

---

## Inputs esperados

### Bloco 1 — Financeiro (obrigatório)
| Documento | O que entrega para o modelo |
|---|---|
| **Plano de ROI** | Meta de faturamento anual, ticket médio, CAC alvo, margem estimada — base do modelo |
| **Faturamento histórico** (se disponível) | Receita real dos últimos 6 a 12 meses — calibra as premissas de crescimento |
| **Base de clientes ativa** | Número de clientes ativos, receita média por cliente, churn atual — base existente |
| **Pipeline atual** (se disponível) | Propostas em aberto com valor estimado — pipeline represado a ser destravado |
| **Investimento em marketing atual** | Quanto já é investido em mídia paga — base para o CPL real |

### Bloco 2 — Processo e KPIs
| Documento | O que entrega para o modelo |
|---|---|
| **KPIs e Rituais** (output da `/ec-kpis`) | Taxas de conversão definidas (MQL→SQL, SQL→Fechamento) — premissas do funil |
| **Documento Geral de Análise** (output da `/ec-analise`) | Diagnóstico das travas atuais — onde o funil quebra hoje |
| **BPMN** (output da `/ec-bpmn`) | Etapas do processo — cada etapa é uma trava no modelo |
| **Transcrição do Kickoff + gestor** | Expectativas financeiras da liderança, sazonalidade declarada, ticket médio real |

---

## Instruções para o modelo

### Fase 1 — Benchmark

Pesquise na internet os benchmarks de mercado para o segmento do cliente:
- Taxa de conversão MQL → SQL (média e top quartil do segmento)
- Taxa de conversão SQL → Fechamento (média e top quartil)
- CPL médio por canal (mídia paga, indicação, outbound) para o segmento
- Churn médio mensal para o modelo de negócio
- Ticket médio de mercado para comparação
- CAC médio e LTV médio do segmento

Apresente os benchmarks com fonte identificada (LinkedIn, RD Station State of Sales, Outreach, SalesHacker, Gartner, etc.)

---

### Fase 2 — Premissas

Defina todas as variáveis do modelo. Cada premissa deve ter:
- O valor utilizado no modelo
- A fonte (dado real do cliente, benchmark de mercado ou estimativa justificada)
- Sensibilidade: o que muda no resultado se essa premissa variar ±20%

**Premissas obrigatórias:**

**Funil de Aquisição:**
- Meta de faturamento anual (R$)
- Investimento em mídia paga por mês (rampa mensal)
- CPL estimado por canal
- Taxa MQL → SQL (conservadora / realista / otimista)
- Taxa SQL → Fechamento (conservadora / realista / otimista)
- Ticket médio por linha de produto/serviço

**Base Existente:**
- Número de clientes ativos
- Receita média mensal por cliente
- Crescimento orgânico da base (% ao mês)
- Churn mensal esperado (%)
- Potencial de upsell (R$ por cliente / % da base elegível)

**Pipeline Represado:**
- Valor total de propostas em aberto (R$)
- Taxa de conversão esperada do pipeline represado (%)
- Distribuição mensal da conversão (em quantos meses o pipeline será destravado)

**Custos Comerciais:**
- Custo de mídia paga mensal (rampa)
- Comissão comercial (% sobre receita nova)
- Custo fixo da operação comercial (salários, ferramentas)

---

### Fase 3 — Funil Mensal (12 meses)

Monte a tabela do funil mês a mês com as seguintes travas (adapte os nomes ao modelo de negócio do cliente):

**Estrutura das Travas:**

| Trava | O que mede |
|---|---|
| **TRAVA EXPOSIÇÃO** | Investimento em canal ativo → MQLs gerados → CPL real |
| **TRAVA QUALIFICAÇÃO** | MQL → SQL (taxa + volume) → SQL → Fechamento (taxa + volume) |
| **RECEITA CANAL ATIVO** | Novos clientes × ticket médio = receita de aquisição |
| **BASE EXISTENTE** | Pipeline represado + retenção da base + upsell |
| **RECEITA TOTAL** | Soma de todas as fontes + % atingimento da meta mensal e acumulado |

**Formato da tabela principal:**

| Etapa / KPI | Jan | Fev | Mar | Abr | Mai | Jun | Jul | Ago | Set | Out | Nov | Dez | TOTAL/ANO | META ANUAL |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| *[Linhas de cada trava, calculadas mês a mês]* | | | | | | | | | | | | | | |

**Regras de construção do funil mensal:**
- O investimento em mídia paga deve crescer em rampa — não partir do máximo no mês 1
- As taxas de conversão ficam fixas no cenário conservador (usar benchmark mínimo do mercado para o segmento)
- O volume cresce junto com o investimento — mais exposição, mais leads
- A base existente cresce organicamente mês a mês com a taxa definida nas premissas
- O pipeline represado é distribuído nos primeiros meses com conversão decrescente
- Incluir linha de % atingimento da meta (mensal e acumulado)
- Incluir nota de conservadorismo: o que foi conservado nas taxas vs. o que foi realista no volume

---

### Fase 4 — Cenários & Trimestres

Monte 3 cenários, cada um com suas premissas de taxa de conversão, e consolide por trimestre.

**Cenários:**
- **Conservador:** taxas no benchmark mínimo do mercado — o pior caso aceitável
- **Realista:** taxas no benchmark médio — o resultado esperado se o processo for executado
- **Otimista:** taxas no top quartil do mercado — possível com processo maduro e time treinado

**Formato por cenário (consolidado trimestral):**

| Indicador | T1 (Jan-Mar) | T2 (Abr-Jun) | T3 (Jul-Set) | T4 (Out-Dez) | TOTAL ANO |
|---|---|---|---|---|---|
| MQLs gerados | | | | | |
| SQLs gerados | | | | | |
| Novos clientes fechados | | | | | |
| Receita canal ativo | | | | | |
| Receita base existente | | | | | |
| **Faturamento total** | | | | | |
| **% da meta** | | | | | |

**Tabela comparativa dos 3 cenários:**

| Indicador | Conservador | Realista | Otimista |
|---|---|---|---|
| Taxa MQL→SQL | | | |
| Taxa SQL→Fechamento | | | |
| Novos clientes/ano | | | |
| Faturamento total/ano | | | |
| % da meta atingida | | | |
| Investimento total em mídia | | | |
| CAC médio | | | |
| ROI do investimento comercial | | | |

---

### Fase 5 — Plano de Ação OKR

Traduza as metas do cenário Realista em OKRs trimestrais. Cada OKR deve conectar diretamente um número do funil a uma ação concreta.

**Estrutura por trimestre:**

#### T[N] — [Período]

**Objetivo:** [O que precisa ser alcançado neste trimestre em linguagem motivacional]

| KR | Resultado-Chave | Meta | Trava que resolve | Ação principal |
|---|---|---|---|---|
| KR1 | [Indicador mensurável] | [Número] | [Qual trava do funil] | [O que o time precisa fazer] |
| KR2 | | | | |
| KR3 | | | | |

**Nota:** os KRs devem ser os KPIs definidos na `/ec-kpis` — não criar novos indicadores. O OKR conecta o número financeiro à execução comercial.

---

## Estrutura obrigatória do documento de output

```
# Breakeven e Forecast Comercial — [Nome do Cliente]

**Cliente:** [Nome do cliente]
**Período:** [Ano]
**Meta:** R$ [valor]
**Data:** [Data]
**Responsável:** Denis Orosco | Consultor de Estratégia de Vendas Sênior
```

Seguido das 5 seções na ordem: Benchmark → Premissas → Funil Mensal → Cenários & Trimestres → Plano OKR.

---

## Regras de qualidade do modelo

- Todo número do modelo deve ter rastro: veio de dado real do cliente, de benchmark pesquisado ou de cálculo explícito
- O cenário conservador deve ser o pior resultado aceitável — não uma meta impossível disfarçada de pessimismo
- As taxas de conversão devem ser mantidas conservadoras; o volume de exposição pode ser realista — conforme a lógica do modelo de referência
- O modelo deve fechar: a soma das fontes de receita no cenário realista deve alcançar ou superar a meta
- Se o modelo não fechar, identificar explicitamente qual trava precisa ser ajustada e quanto
- Os OKRs do T1 devem ser focados em processo (implementar o funil) — os de T3 e T4 em resultado (fechar contratos)
- Incluir sempre a nota de conservadorismo: o que foi conservado e por quê

---

## Como usar esta skill

1. Digite `/ec-dre`
2. Compartilhe os documentos na seguinte ordem:
   - **Obrigatórios:** Plano de ROI, KPIs (`/ec-kpis`), Análise Geral
   - **Financeiros:** faturamento histórico, base de clientes ativa, pipeline atual, investimento em marketing atual
   - **Complementares:** BPMN, transcrições do Kickoff e gestor
3. Informe a meta de faturamento anual e o ano do forecast
4. Receba o modelo completo: Benchmark → Premissas → Funil Mensal (12 meses) → Cenários & Trimestres → Plano OKR
