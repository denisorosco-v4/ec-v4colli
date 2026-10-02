---
name: ec-sla
description: Produzir o Acordo de Nível de Serviço (SLA) da operação comercial — o documento formal que define as responsabilidades, prazos e critérios de qualidade acordados entre marketing e vendas (e entre as etapas do processo comercial), garantindo que nenhum lead seja perdido por falta de alinhamento entre as áreas.
---

# Skill: /ec-sla
**Objetivo:** Produzir o Acordo de Nível de Serviço (SLA) da operação comercial — o documento formal que define as responsabilidades, prazos e critérios de qualidade acordados entre marketing e vendas (e entre as etapas do processo comercial), garantindo que nenhum lead seja perdido por falta de alinhamento entre as áreas.

---

## O que é o SLA neste contexto

O SLA comercial tem três camadas:

1. **SLA de Marketing → Vendas:** o que marketing se compromete a entregar (volume, qualidade e critérios do lead)
2. **SLA de Vendas → Marketing:** o que vendas se compromete a fazer com os leads recebidos (velocidade, cadência, feedback)
3. **SLA de Processo:** os prazos máximos de cada etapa do funil — do primeiro contato ao fechamento

---

## Inputs esperados

### Bloco 1 — Diagnóstico e Processo (obrigatório)
| Documento | O que entrega para o SLA |
|---|---|
| **Documento Geral de Análise** (output da `/ec-analise`) | Gargalos entre marketing e vendas — onde leads se perdem por falta de alinhamento |
| **BPMN** (output da `/ec-bpmn`) | Etapas do processo e os SLAs por etapa já definidos |
| **KPIs e Rituais** (output da `/ec-kpis`) | SLAs de performance já definidos — base para formalizar no SLA |
| **Transcrição do Kickoff** | Como marketing e vendas se relacionam hoje, conflitos existentes, o que cada área acha da outra |
| **Transcrição da entrevista com o gestor** | Visão da liderança sobre o relacionamento marketing-vendas, o que precisa mudar |

### Bloco 2 — Canais e Ferramentas
| Documento | O que entrega para o SLA |
|---|---|
| **Ferramentas Táticas** (output da `/ec-ferramentas`) | Quais ferramentas suportam o rastreamento do SLA — CRM, automação, notificações |
| **Fluxos de Cadência** (output da `/ec-cadencia`) | Compromissos de follow-up que entram como SLA de vendas |

### Bloco 3 — Contexto de Marketing
| Documento | O que entrega para o SLA |
|---|---|
| **Plano de ROI** | Canais de aquisição, volume de leads esperado, custo por lead, meta de receita |
| **Dados de origem de leads** (se disponíveis) | Quais canais geram leads mais qualificados — define critérios de qualidade do SLA de marketing |

---

## Dados Prioritários e Benchmark Automático

> A skill define prazos e condições que precisam ser realistas para a operação. Se os dados de processo e marketing não estiverem disponíveis, execute o protocolo abaixo.

**Se SLAs de processo e condições de chegada de lead não estiverem definidos — pergunte:**
1. Qual é o tempo máximo aceitável para responder a um lead novo?
2. Existe operação de marketing estruturada? Quem gera os leads — marketing interno, agência ou o próprio vendedor prospecta?
3. O que é um "lead qualificado" para esta operação? Qual critério mínimo?
4. O que acontece com leads que chegam fora do horário comercial?
5. Qual é o protocolo quando um lead pede mais tempo para decidir?

**Para o que não for respondido, pesquise na internet:**
- SLAs de resposta padrão por canal e segmento (benchmarks de tempo de primeiro contato por indústria)
- Definição padrão de MQL e SQL para o modelo de negócio e tipo de venda
- Condições mínimas de chegada de lead adotadas por operações bem estruturadas no segmento

> ⚠️ Toda informação construída via benchmark deve ser sinalizada no documento com: **Premissa de mercado — validar com o cliente.**

---

## Instruções para o modelo

Com os documentos em mãos, você deve:

1. **Mapear o relacionamento atual** entre marketing e vendas — onde existe fricção, onde leads somem, onde há falta de critério definido
2. **Definir o MQL** (Marketing Qualified Lead) — os critérios que um lead precisa atender para ser repassado a vendas
3. **Definir o SQL** (Sales Qualified Lead) — os critérios que vendas usa para considerar um lead qualificado e avançá-lo no funil
4. **Estabelecer os SLAs de marketing** — volume, qualidade e prazo de entrega de leads
5. **Estabelecer os SLAs de vendas** — velocidade de resposta, cadência mínima e feedback à área de marketing
6. **Consolidar os SLAs de processo** — prazos máximos de cada etapa do BPMN
7. **Definir o protocolo de descumprimento** — o que acontece quando um SLA é violado
8. **Produzir o documento no formato especificado abaixo**

**Tom de escrita:** formal e objetivo. O SLA é um acordo — cada cláusula deve ser verificável. Sem ambiguidade.

**Princípio central:** o SLA existe para que nenhuma área culpe a outra. Quando um lead se perde, o SLA identifica em qual etapa e de qual responsabilidade.

---

## Estrutura obrigatória do documento

### Cabeçalho

```
# Acordo de Nível de Serviço (SLA) — [Nome do Cliente]

**Cliente:** [Nome do cliente]
**Data:** [Data]
**Versão:** 1.0
**Responsável:** Denis Orosco | Consultor de Estratégia de Vendas Sênior
**Vigência:** [Data de início] — revisão a cada 90 dias
```

---

### Seção 1 — Objetivo e Escopo

Descreva em 3 a 5 linhas o objetivo do SLA, quais áreas ele cobre e qual problema ele resolve. Mencione o contexto específico do cliente — se é uma operação com área de marketing separada, se o gestor acumula marketing e vendas, se a geração de leads é 100% inbound ou tem componente outbound.

---

### Seção 2 — Definição de Lead Qualificado

#### 2.1 — MQL (Marketing Qualified Lead)

Defina os critérios que um lead precisa atender para ser considerado qualificado pelo marketing e repassado a vendas.

| CRITÉRIO | DESCRIÇÃO | COMO VERIFICAR |
|---|---|---|
| [Perfil demográfico] | [Ex: cargo, segmento, porte da empresa] | [Campo no formulário / CRM] |
| [Comportamento] | [Ex: preencheu formulário, respondeu ao anúncio, foi indicado] | [Origem registrada no CRM] |
| [Intenção] | [Ex: solicitou contato, demonstrou interesse ativo] | [Ação registrada no CRM] |
| [Fora do escopo] | [O que desqualifica automaticamente o lead] | [Critério eliminatório] |

#### 2.2 — SQL (Sales Qualified Lead)

Defina os critérios que vendas aplica após receber o lead — os critérios de qualificação do método definido no BPMN (ex: NATA, SPIN, BANT).

| CRITÉRIO | DESCRIÇÃO | PESO |
|---|---|---|
| [Critério 1 do método] | [Descrição] | [Eliminatório / Relevante] |
| [Critério 2] | | |
| [Critério 3] | | |
| [Critério 4] | | |

---

### Seção 3 — SLA de Marketing → Vendas

O que a área de marketing (ou quem gera os leads) se compromete a entregar. O SLA de marketing não cobre apenas volume e prazo — cobre as **condições em que o lead chega**: nível de aquecimento, informações preenchidas, canal de origem identificado e critério mínimo de intenção. Um lead que chega sem essas condições não é um MQL — é ruído para o time de vendas.

#### 3.1 — Condições de Chegada do Lead (obrigatórias)

Para que um lead seja repassado a vendas, ele deve chegar com as seguintes condições atendidas:

| CONDIÇÃO | DESCRIÇÃO | COMO VERIFICAR | O QUE FAZER SE NÃO ATENDER |
|---|---|---|---|
| **Identificação mínima** | Nome e canal de contato (WhatsApp, e-mail, telefone) disponíveis | Campo preenchido no CRM / formulário | Não repassar — tentar completar antes |
| **Origem identificada** | Canal de origem registrado (ex: Instagram, indicação, Google, outbound) | Tag de origem no CRM | Registrar como "origem desconhecida" e investigar na weekly |
| **Intenção declarada** | O lead demonstrou interesse ativo — clicou, preencheu, pediu contato ou foi indicado com contexto | Ação registrada no CRM | Lead em nutrição, não em pipeline ativo |
| **Nível de aquecimento** | Classificar como Frio (primeiro contato), Morno (demonstrou interesse) ou Quente (solicitou proposta/reunião) | Tag de temperatura no CRM | Definir abordagem e cadência adequada ao nível |
| **Fora do escopo identificado** | Verificação prévia de que o lead não é claramente fora do perfil ideal | Checagem dos critérios eliminatórios do MQL | Descartar antes de repassar — não ocupar pipeline de vendas |
| **Informações complementares** | Qualquer dado relevante sobre o contexto do lead coletado antes do repasse (segmento, cargo, dor declarada) | Campo de observações no CRM | Repassar com flag "informações incompletas" |

#### 3.2 — Compromissos de Volume e Prazo

| COMPROMISSO | MÉTRICA | META | CONSEQUÊNCIA DO DESCUMPRIMENTO |
|---|---|---|---|
| **Volume de leads por mês** | Total de MQLs entregues a vendas | [Meta definida no Plano de ROI] | Revisão de canal e estratégia na reunião mensal |
| **Qualidade dos leads** | % de MQLs que se tornam SQLs | [Meta — ex: acima de 40%] | Revisão dos critérios de segmentação da campanha |
| **Prazo de repasse** | Tempo entre lead gerado e lead registrado no CRM | [Ex: até 30 min após conversão] | Flag de atraso + revisão de automação |
| **Distribuição por canal** | % de leads por canal (WhatsApp, Instagram, indicação, etc.) | [Meta por canal se houver] | Realocação de verba ou esforço por canal |

---

### Seção 4 — SLA de Vendas → Marketing

O que a área de vendas se compromete a fazer com os leads recebidos.

| COMPROMISSO | MÉTRICA | META | CONSEQUÊNCIA DO DESCUMPRIMENTO |
|---|---|---|---|
| **Velocidade de primeiro contato** | Tempo entre lead registrado no CRM e primeiro contato | [Ex: até 15 min em horário comercial] | [Alerta automático no CRM. Registro de atraso para análise semanal] |
| **Execução da cadência completa** | % de leads que recebem todos os toques da régua | [Meta — ex: 100% dos leads qualificados] | [Lead não pode ser registrado como Perdido sem cadência completa] |
| **Registro de motivo de perda** | % de leads fechados com motivo preenchido no CRM | [Meta: 100%] | [KPI de motivos de perda invalido sem esse dado] |
| **Feedback de qualidade** | Frequência de repasse de informações sobre qualidade dos leads a marketing | [Ex: semanal na Weekly Comercial] | [Marketing perde capacidade de ajustar segmentação] |
| **Atualização do CRM** | % de leads com status atualizado em até 24h após cada interação | [Meta: 100%] | [Pipeline perde confiabilidade — KPIs ficam distorcidos] |

---

### Seção 5 — SLA de Processo (por Etapa do Funil)

Consolide os prazos máximos de cada etapa do BPMN em uma tabela única de referência rápida.

| ETAPA | GATILHO DE INÍCIO | PRAZO MÁXIMO | RESPONSÁVEL | O QUE ACONTECE SE O PRAZO FOR DESCUMPRIDO |
|---|---|---|---|---|
| [Etapa 1 do BPMN] | [O que inicia essa etapa] | [Prazo] | [Cargo] | [Protocolo] |
| [Etapa 2] | | | | |
| [Etapa 3] | | | | |
| *(continuar para todas as etapas do BPMN)* | | | | |

---

### Seção 6 — Protocolo de Descumprimento

Defina o que acontece quando qualquer SLA é violado — quem aciona quem, em qual prazo e com qual ação corretiva.

| NÍVEL | CRITÉRIO | AÇÃO | RESPONSÁVEL |
|---|---|---|---|
| **Nível 1 — Alerta** | SLA descumprido uma vez na semana | Registro automático no CRM + revisão na Weekly Comercial | [Gestor] |
| **Nível 2 — Atenção** | SLA descumprido 3 ou mais vezes na semana | Reunião de alinhamento entre marketing e vendas | [Gestor + responsável pela área] |
| **Nível 3 — Crítico** | SLA de primeiro contato descumprido repetidamente ou lead perdido por ausência de cadência | Revisão do processo + plano de ação com prazo definido | [Gestor sênior / Denis Orosco] |

---

### Seção 7 — Revisão e Vigência

| Campo | Definição |
|---|---|
| **Vigência inicial** | [Data de entrada em vigor] |
| **Ciclo de revisão** | A cada 90 dias ou quando houver mudança significativa no volume de leads ou estrutura da equipe |
| **Responsável pela revisão** | [Cargo] |
| **Critério de revisão antecipada** | Descumprimento recorrente de qualquer SLA por 2 semanas consecutivas |

---

## Regras de qualidade do documento

- Todo SLA deve ter uma métrica verificável — sem métrica, não é um acordo, é uma intenção
- Toda meta deve ser baseada nos dados do cliente ou nos KPIs definidos na `/ec-kpis` — não em benchmarks genéricos
- Todo descumprimento deve ter consequência definida — SLA sem consequência não é cumprido
- A definição de MQL e SQL deve ser específica o suficiente para eliminar a discussão "esse lead era qualificado ou não"
- Se o cliente não tem área de marketing separada (gestor acumula as duas funções), adaptar as seções 3 e 4 para SLA interno de processo — o gestor compromete-se com ele mesmo com metas e revisões periódicas

---

## Como usar esta skill

1. Digite `/ec-sla`
2. Compartilhe os documentos na seguinte ordem:
   - **Obrigatórios:** Análise Geral, BPMN, KPIs, transcrição do Kickoff e do gestor
   - **Complementares:** Ferramentas (`/ec-ferramentas`), Cadências (`/ec-cadencia`), Plano de ROI
3. Informe se o cliente tem área de marketing separada ou se o gestor acumula as duas funções
4. Receba o SLA completo — MQL/SQL definidos, compromissos de marketing e vendas, SLAs de processo e protocolo de descumprimento
