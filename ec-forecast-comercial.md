---
name: ec-forecast-comercial
description: Construir o Forecast Comercial completo da operação — Benchmark de mercado pesquisado, Premissas, Funil Mensal (12 meses a partir do mês seguinte), Cenários & Trimestres e Plano de Ação OKR, replicando exatamente a estrutura de referência (5 abas). Nenhum dado pode ser inventado — toda origem é rastreada. Gera automaticamente o arquivo .xlsx final com o design system V4, pronto para o Google Sheets.
---

# Skill: /ec-forecast-comercial
**Objetivo:** Construir o Forecast Comercial completo da operação — um modelo financeiro com 5 componentes integrados: Benchmark de mercado, Premissas, Funil Mensal (12 meses), Cenários & Trimestres e Plano de Ação OKR. O output final é um arquivo **`.xlsx` real, com o design system V4 Company aplicado**, pronto para abrir direto no Google Sheets (upload/drag-and-drop preserva 100% da formatação).

Esta skill segue rigidamente a estrutura de referência validada no projeto Testfy (`Testfy_Projecao_B2B_2026_v2`) — mesmas 5 abas, mesmos campos, mesma lógica de construção. Nenhuma aba pode ser simplificada ou ter campos omitidos.

---

## Regra Inegociável — Proibido Inventar Dado

> **Você não pode errar, mentir ou inventar dado.** Esta é a regra mais importante desta skill e sobrepõe qualquer atalho de conveniência.

Todo número que aparece no modelo tem que ter uma origem rastreável, e essa origem é registrada na própria planilha (coluna "Fonte / Observação" ou comentário de célula). Só existem 3 origens válidas:

1. **Dado real do cliente** — veio de um documento, entrevista ou planilha fornecida pelo cliente. Cite o documento (ex.: "Planilha de faturamento 2025", "Entrevista gestor — 14/07/2026").
2. **Benchmark pesquisado** — veio de pesquisa real feita nesta sessão (WebSearch/WebFetch) para o segmento e mercado específico do cliente. Cite a fonte real (instituição, ano, link se houver). **Nunca reaproveite os números do exemplo Testfy (genômica/healthtech B2B) para outro segmento** — cada cliente exige pesquisa nova.
3. **Cálculo explícito** — resultado de uma fórmula visível a partir de premissas já sourced (ex.: "2 pedidos × ticket médio real = ticket de entrada").

**Se nenhuma das 3 origens está disponível** e um valor precisa ser estipulado para o modelo fechar:
- Marque a célula/linha com **"⚠️ Ponto de Atenção"** na coluna de fonte/observação
- Registre ao lado a hipótese assumida e o que precisa ser validado com o cliente antes de o número virar meta oficial
- Nunca disfarce uma estimativa como se fosse dado real ou benchmark citado

**Proibido:**
- Inventar estatística de mercado ou citar fonte que não foi de fato consultada nesta sessão
- Arredondar, inflar ou "ajustar" um número só para o modelo bater a meta bonito
- Copiar/colar indicadores de outro cliente ou do exemplo de referência sem adaptar à realidade pesquisada deste cliente

---

## O que este modelo entrega

| Componente | O que é | Para que serve |
|---|---|---|
| **1. Benchmark** | Mercado endereçável + benchmark de funil (mínimo/médio/otimizado) + canais priorizados — 100% pesquisado para o segmento do cliente | Ancora as premissas em dados reais — não em achismos |
| **2. Premissas** | Realidade atual do cliente + premissas do funil + mix de receita da meta | Define o ponto de partida e torna o modelo auditável |
| **3. Funil Mensal** | Projeção mês a mês por 12 meses, começando no mês seguinte ao da criação da planilha | Mostra quando e como a meta será atingida |
| **4. Cenários & Trimestres** | Simulação em 3 cenários (Conservador, Base/Adotado, Otimista) + distribuição trimestral | Permite decisão por faixa de resultado, não por número único |
| **5. Plano de Ação OKR** | 4 fases de execução (Setup, 30/60/90 dias) conectando cada meta financeira a uma ação concreta | Conecta o número do forecast à execução comercial |

---

## Inputs esperados

### Bloco 1 — Financeiro (obrigatório)
| Documento | O que entrega para o modelo |
|---|---|
| **Plano de ROI** | Meta de faturamento anual, ticket médio, CAC alvo, margem estimada |
| **Faturamento histórico** | Receita real dos últimos 6–12 meses, split por vendedor/responsável se houver |
| **Base de clientes ativa** | Nº de clientes ativos, receita média por cliente, concentração (top 10, top produto), churn atual |
| **Pipeline atual** (se disponível) | Propostas em aberto com valor estimado |
| **Investimento em marketing atual** | Quanto já é investido em mídia paga — base para o CPL real |

### Bloco 2 — Processo e KPIs
| Documento | O que entrega para o modelo |
|---|---|
| **KPIs e Rituais** (output da `/ec-kpis`) | Taxas de conversão definidas (MQL→SQL, SQL→Fechamento) |
| **Documento Geral de Análise** (output da `/ec-analise`) | Diagnóstico das travas atuais — onde o funil quebra hoje |
| **BPMN** (output da `/ec-bpmn`) | Etapas do processo — cada etapa é uma trava no modelo |
| **Transcrição do Kickoff + gestor** | Expectativas financeiras da liderança, sazonalidade, ticket médio real |

Salve todo documento recebido em `projetos/Projetos E.C/[Cliente]/Inputs/` antes de processar.

---

## Se dados não estiverem disponíveis

**Pergunte ao cliente:**
1. Qual é a meta de faturamento para os próximos 12 meses?
2. Qual é o faturamento atual — mesmo que estimativa?
3. Qual é o investimento atual ou previsto em mídia paga e marketing por mês?
4. Há sazonalidade no negócio? Quais meses são mais fortes e mais fracos?
5. Tem base de clientes ativa? Quantos aproximadamente? Qual a concentração (top clientes/produtos)?
6. Existe pipeline de propostas em aberto? Qual valor estimado?
7. Existe churn/base inativa reativável? Aproximadamente quantos?

**Para o que não for respondido, pesquise de verdade (WebSearch/WebFetch)** — nunca preencha de memória. Ver protocolo completo de fontes na Fase 1 — o Benchmark é o alicerce de todo o modelo, então a pesquisa não pode ser superficial nem genérica.

---

## Instruções para o modelo

### Fase 1 — Aba 1: 🔍 Benchmark [Segmento do Cliente]

> **O Benchmark é a fundação de todo o modelo.** Se ele for raso ou genérico, o Forecast inteiro fica inválido — todas as premissas, cenários e OKRs das abas seguintes herdam o erro. Trate esta fase com o mesmo rigor de um due diligence, não como um preenchimento de tabela.

**Protocolo de pesquisa — só fontes de máxima confiabilidade:**

Use WebSearch/WebFetch de verdade, nesta ordem de prioridade:

1. **Órgãos oficiais e dados governamentais** — IBGE, Banco Central, ministérios, conselhos profissionais/de classe do setor (equivalentes a CFM/CFN conforme o segmento), sindicatos patronais oficiais
2. **Institutos globais de pesquisa de mercado** — Gartner, McKinsey, BCG, Bain, Mordor Intelligence, Fortune Business Insights, Statista, IBISWorld, Euromonitor, Forrester
3. **Big Four / consultorias com relatórios públicos** — Deloitte, PwC, EY, KPMG
4. **Benchmarks de vendas/marketing reconhecidos** — RD Station (State of Sales/Marketing), HubSpot State of Marketing, Salesforce State of Sales, Outreach, Gartner Sales
5. **Imprensa de negócios de credibilidade** — Bloomberg, Valor Econômico, Exame, Forbes, Reuters
6. **Associações e federações setoriais reconhecidas** do segmento específico do cliente (ex.: FIESP, ABRAS, sindicatos patronais do setor)

**Proibido usar como fonte:** blogs sem citação de dado primário, conteúdo de agência de marketing sem estudo original por trás, resultado de busca sem instituição identificável, "segundo especialistas" sem nome/instituição/ano.

**Verificação cruzada:** para os indicadores mais sensíveis do modelo (tamanho de mercado, CAC, LTV, taxas de conversão), busque confirmação em pelo menos 2 fontes independentes quando possível. Se os números divergirem, reporte a faixa encontrada — nunca invente uma média para "resolver" a divergência.

**Recência:** priorize dados dos últimos 24 meses. Se o dado mais recente disponível for mais antigo que isso, sinalize isso explicitamente na coluna Fonte (ex.: "CFN 2022 — dado mais recente disponível").

**Registro de fontes na aba:** logo abaixo do título da Aba 1, inclua uma linha consolidada — mesclada, itálico, cor cinza `#555555` — listando todas as instituições/fontes efetivamente consultadas nesta pesquisa, no formato: `Fontes: [Instituição 1] [ano], [Instituição 2] [ano], ... | [mês/ano da pesquisa]`. Cada linha da tabela mantém também sua própria fonte individual na coluna "Fonte / Observação" — a linha consolidada não substitui isso, ela resume o conjunto.

Pesquise na internet — para o segmento e mercado específicos do cliente — os 3 blocos abaixo, replicando exatamente esta estrutura de colunas:

**Bloco A — 📊 Mercado Endereçável**
Colunas: `Indicador | Dado de Mercado | Universo de Clientes Potenciais | [Cliente] Hoje | Fonte / Observação`
Indicadores obrigatórios (adaptar nomes ao segmento):
- Tamanho do mercado nacional do setor (R$, CAGR se disponível)
- Tamanho do mercado global ou tendência macro relevante ao segmento
- Sub-mercado ou movimento de mercado em aceleração (ex.: uma categoria de produto/serviço em alta no setor)
- Volume de clientes/compradores potenciais ativos no segmento (nº, fonte oficial)
- Sub-segmentação do público potencial (por perfil/porte/região) com nota de prioridade (ICP)
- Total de contas potenciais mapeadas internamente vs. clientes ativos hoje → % de penetração atual do cliente nesse universo

**Bloco B — 🎯 Benchmark de Funil | Trava Central: [nome da trava identificada na `/ec-analise`]**
Colunas: `Etapa do Funil | Bench Mínimo | Bench Médio | Bench Otimizado | [Cliente] Hoje | Gap | Meta Cons. (usado) | Racional`
Linhas obrigatórias:
- MQLs/mês por canal ativo
- CPL médio do segmento
- Taxa MQL → SQL
- Taxa SQL → Fechamento
- Novos clientes/mês (canal ativo)
- Ticket de entrada
- Receita mensal por cliente ativo
- Taxa de recompra/retenção em período relevante
- LTV anual por cliente novo
- CAC total (mídia + comercial)

Cada linha marca o "Gap" com 🔴 Crítico / 🟡 Médio / 🟢 Consistente conforme a distância entre "Hoje" e o bench mínimo, e a coluna "Meta Cons. (usado)" traz o valor efetivamente adotado no modelo (com racional da escolha).

**Bloco C — 📣 Canais Priorizados | Foco [trava central]**
Colunas: `Canal | CPL Mercado | MQL Potencial | Investimento | Prioridade | Racional`
Liste todos os canais de aquisição/reativação relevantes ao segmento do cliente (mínimo 5), cada um com prioridade 🔴 Urgente / 🟡 Alta / 🟢 Complementar e o racional de por que esse canal serve esse cliente especificamente.

---

### Fase 2 — Aba 2: ⚙️ Premissas

Use **exatamente** estes 3 blocos e campos — não renomear, não omitir:

**Seção A — Realidade Atual**
- Faturamento Total do último ano fechado (R$, % origem orgânica vs. paga)
- Clientes únicos ativos (nº, % de penetração de mercado sobre o universo potencial da Aba 1)
- Ticket médio (R$)
- Receita mensal por cliente ativo (R$)
- Faturamento por responsável/vendedor — uma linha por pessoa (R$, % da receita total)
- Concentração — top 10 clientes (% da receita)
- Clientes em churn (nº, período de referência)
- Concentração por produto/categoria principal (% da receita)
- Canal de aquisição atual (existente, parcial ou zero)

**Seção B — Premissas do Funil**
- MQL mês 1 (nº adotado vs. bench médio)
- MQL pico mês 12 (nº adotado vs. bench médio)
- Conversão MQL → SQL (%)
- Conversão SQL → Fechamento (%)
- Ticket de entrada (R$)
- Receita mensal por cliente ativo (R$)
- Investimento em mídia: mês 1 → mês 12 (rampa, R$)
- Custo do time comercial/SDR por mês (R$)
- Reativações no pico (nº/mês)

**Seção C — Mix de Receita do Ano-Alvo**
- Meta de faturamento anual (R$)
- % da meta por linha de receita (ex.: canal ativo, base existente, reativação, upsell, produto/linha nova) — a soma deve fechar 100%

Cada campo leva sua fonte (dado real / benchmark / cálculo) conforme a Regra Inegociável.

---

### Fase 3 — Aba 3: 📊 Funil Mensal

**Determine o mês de início dinamicamente:** o funil começa no **mês civil seguinte** à data atual da sessão e cobre 12 meses corridos a partir daí (ex.: se hoje é 28/07/2026, as colunas vão de Agosto/2026 a Julho/2027 — nunca hardcode "Jan–Dez").

Colunas: `Etapa / KPI | [Mês 1] | [Mês 2] | ... | [Mês 12] | TOTAL/ANO`

Blocos obrigatórios, nesta ordem:

| Bloco | Linhas |
|---|---|
| **🔵 Trava Exposição** | Investimento mídia paga/mês, custo comercial/SDR por mês, MQLs gerados, CPL real (investimento ÷ MQLs) |
| **🟠 Trava Qualificação** | Taxa MQL→SQL, SQLs gerados, Taxa SQL→Fechamento, novos clientes fechados/mês |
| **💰 Receita Canal Ativo** | Ticket de entrada, receita mensal por cliente ativo, clientes novos acumulados (carteira), receita canal ativo (entrada + recorrência acumulada) |
| **🟡 Base Existente** | Receita da base existente (crescimento %/mês), inativos reativados/mês, ticket médio do reativado, receita de reativação |
| **Upsell/Expansão** (se aplicável ao segmento) | Upgrades/mês, incremento por upgrade, receita de upsell |
| **Linha(s) de produto/serviço novo** (se aplicável) | Receita da nova linha — zero até o mês de lançamento, cresce nos meses seguintes |
| **🏆 Receita Total Consolidada** | Faturamento total do mês (soma de todos os blocos acima), meta mensal (meta anual ÷ 12), % de atingimento da meta (mensal e acumulado) |

**Regras de construção:**
- Investimento em mídia cresce em rampa — nunca parte do máximo no mês 1
- Taxas de conversão ficam fixas no cenário conservador adotado nas Premissas
- Volume cresce junto com o investimento
- Base existente cresce organicamente com a taxa definida nas Premissas
- Pipeline represado (se houver) é distribuído nos primeiros meses com conversão decrescente
- Sempre incluir % de atingimento da meta mensal e acumulado
- Sempre incluir nota de conservadorismo ao final da aba: o que foi conservado nas taxas vs. realista no volume

---

### Fase 4 — Aba 4: 📈 Cenários & Trimestres

**Bloco 1 — Funil de Aquisição, Premissas Comparadas**
Colunas: `Indicador | 🔴 Conservador | 🟡 Base (Adotado) | 🟢 Otimista | Benchmark | Racional`
Linhas: MQL/mês pico, CPL médio pico, Taxa MQL→SQL, Taxa SQL→Fechamento, novos clientes no ano, ticket de entrada, receita mensal por cliente ativo

**Bloco 2 — Receita Anual por Fonte, 3 Cenários**
Colunas: `Fonte de Receita | Conservador | Base (Meta) | Otimista | % Base s/Meta | Racional`
Linhas: uma por fonte de receita definida no mix da Aba 2 (canal ativo, base existente, reativação, upsell, produto novo) + linha **🏆 Faturamento Total Anual**

**Bloco 3 — Distribuição Trimestral, Cenário Base**
Colunas: `Trimestre | Fonte Principal | Receita Est. | % da Meta | OKR do Trimestre | Status`
Linhas: Q1 a Q4 (usando os meses reais determinados na Fase 3) + linha TOTAL ANO. Status usa: ✅ referência/realizado, 🎯 em execução, 📋 próxima etapa/consolidação.

**Nota sobre conservadorismo aplicado** — parágrafo obrigatório explicando: onde está o conservadorismo (nas taxas ou no volume), qual é a trava central identificada, e por que o cenário base é factível mesmo sendo conservador.

---

### Fase 5 — Aba 5: 🎯 Plano de Ação OKR

Header: `PLANO DE AÇÃO OKR — [Cliente] | [Período] | FOCO: [travas priorizadas]`
Resumo executivo: nº de iniciativas em 4 fases, priorizadas pelas travas identificadas na `/ec-analise`, e a meta do primeiro trimestre de execução.

Colunas: `# | Iniciativa | Ação Concreta | Prazo | Responsável | KPI | Trava`

Fases obrigatórias:
- **FASE 0 — Setup (Semana 1–2):** formalização de ICP, implementação/organização de CRM, classificação da base existente
- **FASE 1 — 30 dias:** contratação/ativação de canal (SDR, mídia paga), ativação de KAM nos maiores clientes, lançamento de landing pages/campanhas, régua de reativação da base inativa
- **FASE 2 — 31–60 dias:** escala de investimento em mídia, playbook de objeções, dashboard semanal de funil, upsell na base ativa
- **FASE 3 — 61–90 dias:** programa de fidelização/certificação, forecast por vendedor, lançamento de produto/serviço novo (se aplicável), review estratégico e recalibração para o trimestre seguinte

Cada KR do OKR deve ser um KPI já definido na `/ec-kpis` — nunca criar indicador novo aqui. Fechar a aba com um aviso final quantificando quanto vem da base existente vs. canal novo no primeiro ano — a mesma leitura estratégica que orienta a priorização.

---

## Fase 6 — Geração automática do arquivo .xlsx (Design System V4)

> Esta fase é **automática e obrigatória** ao final do modelo — não pergunte se o usuário quer o arquivo, gere direto e entregue o caminho.

### Por que .xlsx e não Google Sheets API direta
Não há credenciais de Google Cloud nem MCP de escrita no Google Sheets configurados neste ambiente (validado nesta sessão — só existe um conector de leitura do Google Drive). O caminho validado é gerar um `.xlsx` com fidelidade total de formatação — Google Sheets preserva 100% dela ao importar (upload ou arrastar para o Drive). Se no futuro um Service Account for configurado (ver `/ec-ferramentas`), esta fase pode ser adaptada para publicar direto via API.

### Pré-requisitos
```powershell
node --version          # Node.js instalado
npm list -g exceljs      # pacote exceljs instalado globalmente
```
Se `exceljs` não estiver instalado: `npm install -g exceljs`

### Fluxo de execução
1. Montar o objeto de dados das 5 abas já validado (nenhum valor sem fonte, conforme a Regra Inegociável)
2. Escrever `_gerar_forecast_sheets.js` usando `exceljs` com as especificações abaixo
3. Executar `node _gerar_forecast_sheets.js`
4. Reabrir o arquivo gerado com `exceljs` para validar: 5 sheets presentes, sem erro de leitura, contagem de linhas condizente
5. Deletar o script temporário
6. Salvar em `projetos/Projetos E.C/[Cliente]/Output/Forecast Comercial/[Cliente] - Forecast Comercial [Ano].xlsx`
7. Reportar ao usuário o caminho do arquivo e a instrução: "Abra este arquivo e arraste para o Google Drive, ou faça upload direto no Google Sheets — a formatação chega pronta."

### Especificações técnicas — aplicar rigorosamente

**Paleta (mesma do padrão E.C — ver `/ec-visual-style` e `/ec-exportar-docx`):**
| Elemento | Hex |
|---|---|
| Vermelho primário (headers, banners de seção, tab color) | `#C0272D` |
| Texto sobre vermelho | `#FFFFFF` |
| Linha de dados ímpar | `#FFFFFF` |
| Linha de dados par | `#F2F2F2` |
| Texto da 1ª coluna (labels) | `#C0272D`, bold |
| Borda | `#CCCCCC`, thin |
| Texto corpo | `#000000`, Arial 10 |

**Estrutura por worksheet:**
- Nome das 5 abas, **nesta ordem exata**: `🔍 Benchmark [Segmento]`, `⚙️ Premissas`, `📊 Funil Mensal`, `📈 Cenários & Trimestres`, `🎯 Plano de Ação OKR`
- `worksheet.properties.tabColor = { argb: 'FFC0272D' }` em todas
- Linha 1: título do documento em negrito, mesclado por todas as colunas usadas
- Linha 2: metadados (Cliente | Período | Meta | Data | Responsável: Denis Orosco), mesclada, cor cinza `#555555`
- **Na Aba 1 (Benchmark) especificamente:** Linha 3 é dedicada a `Fontes: [instituições consultadas], [ano] | [mês/ano da pesquisa]` — mesclada, itálico, cor cinza `#555555`, conforme o protocolo de pesquisa da Fase 1. Nas demais abas a Linha 3 já inicia o primeiro banner de seção.
- Cada bloco/seção começa com uma linha-banner mesclada: fundo `#C0272D`, fonte branca bold, tamanho 12
- Linha de cabeçalho de tabela (logo após o banner): fundo `#C0272D`, fonte branca bold, `alignment.vertical='middle'`, `wrapText=true`
- Linhas de dados: alternância `#FFFFFF` / `#F2F2F2` (`fill.type='pattern', pattern:'solid'`), fonte Arial 10 preto, bordas `thin` `#CCCCCC`
- Primeira coluna (labels): fonte `#C0272D` bold
- Células marcadas com **⚠️ Ponto de Atenção**: usar `cell.note` (comentário) com a hipótese assumida, e destacar a célula com fundo `#FFF3CD` (amarelo claro de alerta) para saltar aos olhos
- `worksheet.views = [{ state: 'frozen', xSplit: 1, ySplit: <linha do header> }]` — congela a coluna de labels e o cabeçalho
- Larguras de coluna: 1ª coluna (labels) ~42 caracteres; colunas de meses/dados ~14; coluna TOTAL/ANO ~16, bold
- Valores numéricos (moeda, %, contagem) devem ser **números reais** com `numFmt`, não texto pré-formatado — sempre que uma coluna TOTAL/ANO for soma de meses, usar fórmula nativa `SUM(...)`, nunca valor calculado à mão e colado como texto
- `numFmt` moeda: `'"R$" #,##0'` (ou `'"R$" #,##0.00'` quando houver centavos relevantes) | `numFmt` percentual: `'0.0%'`

**Template base do script (adaptar dados, manter a estrutura de estilo):**
```javascript
const ExcelJS = require('exceljs');

const RED = 'FFC0272D';
const WHITE = 'FFFFFFFF';
const GRAY_ROW = 'FFF2F2F2';
const ALERT = 'FFFFF3CD';
const BORDER = { style: 'thin', color: { argb: 'FFCCCCCC' } };

async function build() {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'V4 Company';

  const sheetNames = [
    '🔍 Benchmark [Segmento]',
    '⚙️ Premissas',
    '📊 Funil Mensal',
    '📈 Cenários & Trimestres',
    '🎯 Plano de Ação OKR',
  ];

  for (const name of sheetNames) {
    const ws = wb.addWorksheet(name, { properties: { tabColor: { argb: RED } } });
    ws.views = [{ state: 'frozen', xSplit: 1, ySplit: 2 }];
    // preencher título, metadados, banners de seção, headers de tabela e linhas
    // de dados seguindo as specs de cor/fonte/borda acima, célula a célula.
  }

  await wb.xlsx.writeFile('[Cliente] - Forecast Comercial [Ano].xlsx');
}

build();
```

### Validação
Após gerar, reabrir com `exceljs` (`workbook.xlsx.readFile(...)`) e conferir: 5 worksheets presentes com os nomes esperados, cada uma com linhas > 0, sem exceção de leitura. Se falhar, corrigir o script e regerar — nunca entregar um arquivo não validado.

### Relatório final
```
✓ Forecast Comercial gerado com sucesso:
  - [Cliente] - Forecast Comercial [Ano].xlsx
  Destino: projetos/Projetos E.C/[Cliente]/Output/Forecast Comercial/
  Abas: Benchmark | Premissas | Funil Mensal | Cenários & Trimestres | Plano OKR
  Pontos de Atenção sinalizados: [nº] (ver comentários nas células ⚠️)
  Validação: PASSOU

→ Para publicar no Google Sheets: abra o arquivo e arraste para o Google Drive,
  ou use "Arquivo > Importar" dentro de uma planilha do Google Sheets.
  A formatação (cores, cabeçalhos, congelamento de painel) é preservada.
```

---

## Regras de qualidade do modelo

- Todo número tem rastro: dado real, benchmark pesquisado nesta sessão, ou cálculo explícito (ver Regra Inegociável) — sem exceção
- Todo benchmark vem de fonte de máxima confiabilidade (ver protocolo de pesquisa da Fase 1) — nunca de blog sem dado primário ou fonte não identificável
- A Aba 1 sempre traz a linha consolidada de fontes consultadas, logo abaixo do título
- O cenário conservador é o pior resultado aceitável — nunca uma meta impossível disfarçada de pessimismo
- As taxas de conversão ficam conservadoras; o volume de exposição pode ser realista
- O modelo deve fechar: a soma das fontes de receita no cenário base deve alcançar ou superar a meta — se não fechar, identifique explicitamente qual trava precisa ser ajustada e quanto
- Os OKRs da Fase 0/1 focam em processo (implementar o funil); os da Fase 3 focam em resultado (fechar contratos)
- Sempre incluir a nota de conservadorismo (o que foi conservado e por quê)
- O arquivo `.xlsx` final é sempre gerado automaticamente na Fase 6 — não é uma entrega opcional

---

## Como usar esta skill

1. Digite `/ec-forecast-comercial`
2. Compartilhe os documentos na seguinte ordem:
   - **Obrigatórios:** Plano de ROI, KPIs (`/ec-kpis`), Análise Geral (`/ec-analise`)
   - **Financeiros:** faturamento histórico, base de clientes ativa, pipeline atual, investimento em marketing atual
   - **Complementares:** BPMN, transcrições do Kickoff e do gestor
3. Informe a meta de faturamento anual e o ano do forecast
4. A skill pesquisa o benchmark real do segmento, monta as 5 abas seguindo exatamente esta estrutura, sinaliza todo ponto de atenção, e **gera automaticamente** o arquivo `.xlsx` com o design V4, pronto para importar no Google Sheets
