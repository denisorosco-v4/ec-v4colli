# Skill: /ec-kpis
**Objetivo:** Analisar os dados históricos e qualitativos da operação comercial do cliente para definir os KPIs oficiais do novo fluxo comercial e os rituais de gestão — com metas baseadas em evidências reais, não em benchmarks genéricos.

---

## Documentos necessários para uma análise concreta

Antes de propor qualquer KPI, o modelo deve verificar quais dos documentos abaixo foram compartilhados. Documentos marcados com **(obrigatório)** são indispensáveis. Os demais enriquecem a precisão das metas propostas.

### Bloco 1 — Contexto Estratégico (obrigatório)
| Documento | O que entrega para a análise de KPIs |
|---|---|
| **Plano de ROI** | Meta de faturamento, ticket médio esperado, volume de leads projetado, CAC alvo |
| **Documento Geral de Análise** (output da `/ec-analise`) | Gargalos identificados, maturidade atual, o que já foi diagnosticado |
| **Transcrição do Kickoff** | O que o gestor declarou como meta, o que ele acompanha hoje, visão de resultado |
| **Transcrição da entrevista com o gestor** | Como o gestor avalia performance, quais métricas ele usa informalmente, o que ele considera sucesso |

### Bloco 2 — Dados Históricos de Resultado (quanto mais, melhor)
| Documento | O que entrega para a análise de KPIs |
|---|---|
| **Faturamento mensal dos últimos 12 meses** | Sazonalidade, crescimento médio, meses de pico e baixa, base real para projeção de metas |
| **Volume de leads recebidos por mês** | Topo do funil real — base para taxa de qualificação e meta de volume |
| **Taxa de conversão atual** (planilha, CRM export ou estimativa do gestor) | Ponto de partida para definir meta de conversão — comparar fase atual vs. meta |
| **Ticket médio por produto / serviço / tipo de cliente** | Base para calcular quantos contratos precisam fechar para atingir a meta de receita |
| **Ciclo de venda médio** (tempo entre 1º contato e fechamento) | Define a meta de velocidade e identifica onde o pipeline trava |
| **Motivos de perda registrados** (CRM ou relato) | Define quais KPIs de qualidade são prioritários — não dá para melhorar o que não se mede |
| **Volume de novas vendas por mês (últimos 6 meses)** | Meta de novos contratos/mês — ancora o crescimento esperado na realidade |

### Bloco 3 — Dados de Processo e Operação
| Documento | O que entrega para a análise de KPIs |
|---|---|
| **Export ou print do CRM atual** (se existir) | O que já é rastreado, qualidade dos dados, campos preenchidos vs. vazios |
| **SLA de resposta atual** (tempo médio de 1ª resposta ao lead) | Ponto de partida para a meta de velocidade de resposta |
| **Volume de follow-ups por lead** | Cadência real praticada — base para definir meta de tentativas mínimas |
| **Canais de origem dos leads** (WhatsApp, indicação, Instagram, etc.) | Define quais canais merecem KPI próprio e qual tem maior conversão |
| **Relatório de atividades do time de vendas** (se existir) | Produtividade individual — base para metas por vendedor |

### Bloco 4 — Dados de Equipe e Gestão
| Documento | O que entrega para a análise de KPIs |
|---|---|
| **Transcrição da entrevista com o top performer** | O que ele faz diferente — o que pode virar meta de comportamento para o time |
| **Transcrição da entrevista com o bottom performer** | Onde o desempenho cai — o que precisa de KPI de acompanhamento e apoio |
| **Estrutura Organizacional e Pessoas** (output da `/ec-org-pessoas`) | Quem será responsável por qual KPI — sem dono, KPI não funciona |
| **Política de comissionamento atual** (se existir) | Alinha metas com incentivo — KPI sem comissionamento alinhado não é seguido |

---

## O que fazer quando algum documento não está disponível

Se um dado crítico (faturamento histórico, taxa de conversão, volume de leads) não foi compartilhado:
1. **Informe explicitamente** qual dado está faltando e qual o impacto na precisão do KPI
2. **Use o que o gestor declarou nas entrevistas** como estimativa — identifique como "dado estimado pelo gestor"
3. **Marque a meta com ⚠️** para indicar que deve ser revisada quando o dado real estiver disponível
4. Nunca invente números — use apenas o que foi declarado ou calculado a partir dos documentos

---

## Instruções para o modelo

Com os documentos em mãos, você deve:

1. **Mapear o estado atual** — o que já é medido, como, com que frequência e por quem
2. **Identificar os gargalos que os KPIs precisam monitorar** — cruzar com o Documento de Análise
3. **Calcular metas realistas** a partir dos dados históricos — não impor benchmarks genéricos sem ancora nos dados do cliente
4. **Organizar os KPIs em camadas do funil** — Topo (volume), Meio (velocidade/qualidade) e Fundo (conversão/resultado)
5. **Definir um dono para cada KPI** — baseado na estrutura de pessoas mapeada na `/ec-org-pessoas`
6. **Propor rituais de gestão** — frequência, participantes e pauta mínima de cada ritual
7. **Produzir o documento no formato especificado abaixo**

**Tom de escrita:** Consultor Sênior de Estratégia de Vendas. Cada meta proposta deve ter uma justificativa baseada nos dados fornecidos — nunca uma sugestão no vácuo.

---

## Estrutura obrigatória do documento

### Cabeçalho

```
# Gestão, KPIs e Rituais — [Nome do Cliente]

**Cliente:** [Nome do cliente]
**Data:** [Data]
**Responsável:** Denis Orosco | Consultor de Estratégia de Vendas Sênior
```

---

### Seção 1 — Diagnóstico de Métricas Atual

Antes de propor os KPIs novos, registre o que o cliente já acompanha — ou não acompanha.

| O que é medido hoje | Como é medido | Frequência | Confiabilidade |
|---|---|---|---|
| [Métrica] | [Planilha / CRM / Intuição / Não medido] | [Diário / Semanal / Mensal / Nunca] | [Alta / Média / Baixa / Inexistente] |

Ao final da tabela, inclua um bloco de **constatação diagnóstica** (2 a 4 linhas): o que esse cenário revela sobre a maturidade de gestão atual e quais os riscos de operar sem dados.

---

### Seção 2 — KPIs Oficiais do Novo Fluxo Comercial

#### A. Topo do Funil — Volume e Velocidade

KPIs que medem o que entra e a agilidade do primeiro contato.

| KPI | O que mede | Fórmula / Como calcular | Meta | Dono | Frequência de acompanhamento |
|---|---|---|---|---|---|
| **Volume de Leads Recebidos** | Quantidade de novos leads chegando por canal | Contagem no CRM por período | [Meta baseada no histórico] | [Nome / Cargo] | Semanal |
| **SLA de 1ª Resposta** | Tempo entre chegada do lead e primeiro contato | Timestamp CRM: lead criado → 1ª atividade | [Meta em minutos] | [Nome / Cargo] | Diário |
| **Taxa de Qualificação** | % de leads que passam pelo filtro e avançam no funil | Leads qualificados ÷ total de leads × 100 | [Meta em %] | [Nome / Cargo] | Semanal |
| **Leads por Canal** | Volume de leads originados por cada canal | Segmentação por tag de origem no CRM | [Meta por canal prioritário] | [Nome / Cargo] | Mensal |

#### B. Meio do Funil — Processo e Cadência

KPIs que medem a qualidade da condução do lead dentro do funil.

| KPI | O que mede | Fórmula / Como calcular | Meta | Dono | Frequência de acompanhamento |
|---|---|---|---|---|---|
| **Ciclo de Venda** | Tempo médio entre 1º contato e fechamento | Data do fechamento − data do 1º contato (média) | [Meta em dias] | [Nome / Cargo] | Semanal |
| **Taxa de Follow-up Executado** | % de leads que receberam a cadência completa | Leads com ≥ N toques ÷ total de leads ativos × 100 | [Meta em %] | [Nome / Cargo] | Semanal |
| **Leads Estagnados** | Leads parados há mais de X dias sem atividade | Contagem no CRM: sem movimentação > [prazo] | Zero leads > [prazo] dias sem toque | [Nome / Cargo] | Diário |

#### C. Fundo do Funil — Conversão e Resultado

KPIs que medem o que fecha e o que gera receita.

| KPI | O que mede | Fórmula / Como calcular | Meta | Dono | Frequência de acompanhamento |
|---|---|---|---|---|---|
| **Taxa de Conversão Geral** | % de leads que entram e viram clientes | Contratos fechados ÷ leads recebidos × 100 | [Meta em %] | [Nome / Cargo] | Mensal |
| **Taxa de Conversão (Qualificado → Contrato)** | % de leads qualificados que fecham | Contratos fechados ÷ leads qualificados × 100 | [Meta em %] | [Nome / Cargo] | Semanal |
| **Novos Contratos por Mês** | Volume de novos clientes incorporados | Contagem de contratos assinados no período | [Meta absoluta] | [Nome / Cargo] | Mensal |
| **Ticket Médio** | Valor médio por contrato fechado | Receita total ÷ número de contratos | [Meta em R$] | [Nome / Cargo] | Mensal |
| **Receita Gerada (Novos Clientes)** | Faturamento originado de novos fechamentos | Soma dos contratos fechados no período | [Meta em R$] | [Nome / Cargo] | Mensal |
| **Motivos de Perda** | Razão pela qual leads saíram sem fechar | Categorização obrigatória no CRM ao mover para Perdido | Análise qualitativa semanal | [Nome / Cargo] | Semanal |

---

### Seção 3 — Metas: Cálculo e Justificativa

Para cada meta proposta acima, apresente a lógica de cálculo — de onde o número veio.

**Formato:**

> **[Nome do KPI]:** Meta de [valor]. Baseada em [dado histórico / declaração do gestor / projeção do Plano de ROI]. Para atingir a meta de [receita/objetivo], com ticket médio de [R$X] e taxa de conversão atual de [Y%], são necessários [Z] leads qualificados por mês. Isso implica [W] leads totais, considerando a taxa de qualificação atual de [%].

Use esse raciocínio em cadeia para ancorar cada meta no dado real. Metas marcadas com ⚠️ são estimativas a revisar quando o dado real estiver disponível.

---

### Seção 4 — Rituais de Gestão

Defina os rituais oficiais da operação comercial. Para cada ritual, especifique:

#### [Nome do Ritual] — [Frequência]

| Campo | Definição |
|---|---|
| **Frequência** | [Diário / Semanal / Mensal] |
| **Horário sugerido** | [Horário] |
| **Duração** | [Minutos] |
| **Participantes** | [Nome / Cargo] |
| **Pauta fixa** | [Lista das perguntas ou tópicos obrigatórios] |
| **KPIs revisados neste ritual** | [Lista dos KPIs acompanhados nessa reunião] |
| **Output esperado** | [O que deve sair da reunião: decisão, lista de ações, atualização de forecast] |

**Rituais mínimos obrigatórios:**
- **Daily Comercial** (15 min) — revisão do pipeline do dia
- **Weekly Comercial** (45 min) — revisão de KPIs, leads perdidos, forecast
- **Monthly Review** (60 min) — resultado do mês vs. meta, ajuste de estratégia

Adapte frequência e participantes à estrutura de pessoas mapeada. Se a operação for solo (Fase 1), simplifique os rituais sem eliminar a disciplina de revisão.

---

### Seção 5 — Dashboard Sugerido

Indique quais KPIs devem estar visíveis no painel principal do CRM ou em um relatório semanal simples.

| Visão | KPIs incluídos | Frequência de atualização | Quem acessa |
|---|---|---|---|
| **Painel Diário** | SLA de resposta, leads estagnados, contratos aguardando assinatura | Diária | [Dono operacional] |
| **Painel Semanal** | Volume de leads, taxa de qualificação, taxa de follow-up, ciclo de venda | Semanal | [Gestor + time] |
| **Painel Mensal** | Conversão geral, novos contratos, ticket médio, receita, motivos de perda | Mensal | [Gestão / Diretoria] |

---

## Regras de qualidade do documento

- Toda meta deve ter uma justificativa calculada — nunca um número solto
- Dados estimados pelo gestor devem ser identificados como estimativa com ⚠️
- Cada KPI deve ter um dono definido — sem dono, o KPI não será acompanhado
- Os rituais devem ser realistas para o momento atual do cliente — não projetar estrutura de time que ainda não existe
- Se o cliente não tem CRM hoje, o dashboard deve ser proposto em planilha simples até a implementação
- O documento será entregue ao cliente e usado como guia real de gestão — clareza e praticidade acima de sofisticação

---

## Como usar esta skill

1. Digite `/ec-kpis`
2. Compartilhe os documentos na seguinte ordem de prioridade:
   - **Obrigatórios:** Plano de ROI, Documento Geral de Análise, transcrições das entrevistas
   - **Quantitativos:** faturamento histórico, volume de leads, taxas de conversão, ticket médio, ciclo de venda
   - **Operacionais:** export de CRM, relatório de atividades, motivos de perda registrados
   - **Complementares:** Estrutura Organizacional e Pessoas (output da `/ec-org-pessoas`)
3. Informe quais dados não estão disponíveis para que o modelo possa sinalizar as metas que precisam ser revisadas
4. Receba o entregável de Gestão, KPIs e Rituais completo e formatado
