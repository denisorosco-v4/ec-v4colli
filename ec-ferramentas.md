---
name: ec-ferramentas
description: Mapear o arsenal de ferramentas atual do cliente, identificar os gaps operacionais e definir a stack digital completa da nova operação comercial — com recomendação por categoria, prioridade de implementação, SOP de uso e mapa de integração entre as ferramentas.
---

# Skill: /ec-ferramentas
**Objetivo:** Mapear o arsenal de ferramentas atual do cliente, identificar os gaps operacionais e definir a stack digital completa da nova operação comercial — com recomendação por categoria, prioridade de implementação, SOP de uso e mapa de integração entre as ferramentas.

---

## Inputs esperados

### Bloco 1 — Contexto da Operação (obrigatório)
| Documento | O que entrega para a análise de ferramentas |
|---|---|
| **Plano de ROI** | Porte da operação, volume esperado, orçamento disponível para tecnologia (se mencionado) |
| **Transcrição do Kickoff** | Ferramentas citadas pelo gestor, dores com tecnologia, resistências ao CRM |
| **Transcrição da entrevista com o gestor** | Visão do gestor sobre ferramentas, o que já tentou e não funcionou, preferências |
| **Transcrição das entrevistas com vendedores** | O que o time usa no dia a dia, o que atrapalha, ferramentas que funcionam na prática |
| **Documento Geral de Análise** (output da `/ec-analise`) | Gargalos identificados que dependem de tecnologia para resolver |

### Bloco 2 — Dados da Stack Atual
| Documento | O que entrega para a análise de ferramentas |
|---|---|
| **Lista de ferramentas atuais** (planilha, print de apps, relato do gestor) | Ponto de partida — o que já existe e não precisa ser contratado |
| **Print ou export do CRM atual** (se existir) | Como está configurado, o que está sendo usado, o que está abandonado |
| **Exemplos de comunicação com leads** (WhatsApp, e-mail) | Canal principal, padrão de uso, possibilidade de automação |
| **Contratos atuais** (modelo em uso) | Processo de assinatura hoje — papel, PDF, ferramenta de assinatura digital |
| **Ferramentas de gestão interna** (Notion, Trello, Planilhas, etc.) | O que já existe para gestão de tarefas e processos |

### Bloco 3 — Estrutura e Processo (para conectar ferramentas ao fluxo)
| Documento | O que entrega para a análise de ferramentas |
|---|---|
| **Estrutura Organizacional e Pessoas** (output da `/ec-org-pessoas`) | Quem vai usar qual ferramenta — define necessidade de licenças e perfis de acesso |
| **KPIs e Rituais** (output da `/ec-kpis`) | Quais dados precisam ser capturados pelas ferramentas para alimentar os KPIs definidos |
| **BPMN** (output da `/ec-bpmn`, se disponível) | Cada etapa do processo precisa de uma ferramenta de suporte — mapear o encaixe |

---

## Dados Prioritários e Benchmark Automático

> A skill verifica o que já está sendo usado antes de recomendar. Se não houver mapeamento da stack atual, execute o protocolo abaixo.

**Se o mapeamento de ferramentas atuais não estiver disponível — pergunte:**
1. Quais ferramentas a equipe usa hoje — mesmo que sejam WhatsApp, planilha ou papel?
2. A empresa tem ou já teve CRM? Se sim, qual? Por que parou de usar (se parou)?
3. Como são enviadas as propostas hoje?
4. Como são assinados os contratos — papel, PDF, ferramenta digital?
5. Qual é o budget mensal disponível para ferramentas?
6. O time tem resistência a adotar tecnologia nova?

**Para o que não for respondido, pesquise na internet:**
- Stack mínima viável para o segmento e nível de maturidade da operação
- Ferramentas mais adotadas por operações de mesmo porte no Brasil
- Custo médio de stack comercial para o estágio inicial no segmento

> ⚠️ Toda informação construída via benchmark deve ser sinalizada no documento com: **Premissa de mercado — validar com o cliente.**

---

## O que fazer quando algum dado não está disponível

Se a lista de ferramentas atuais não foi compartilhada formalmente:
- Use o que o gestor e os vendedores mencionaram nas entrevistas
- Identifique como "ferramenta mencionada nas entrevistas — confirmar com o cliente"
- Nunca assuma que uma ferramenta não existe — pergunte antes de recomendar substituição

---

## Instruções para o modelo

Com os documentos em mãos, você deve:

1. **Mapear o arsenal atual** — listar todas as ferramentas que o cliente já usa, categorizá-las e avaliar se estão sendo usadas adequadamente
2. **Identificar os gaps** — o que está faltando na stack atual para suportar o processo comercial definido
3. **Recomendar a stack ideal** — por categoria, com opção principal e alternativa quando aplicável
4. **Priorizar a implementação** — o que ativar imediatamente (Fase 1) vs. o que pode esperar (Fase 2)
5. **Definir o SOP de uso** — como cada ferramenta entra na rotina operacional do vendedor e do gestor
6. **Mapear as integrações** — como as ferramentas se conectam entre si no fluxo comercial
7. **Estimar o custo** — referência de investimento mensal da stack completa

**Tom de escrita:** Consultor Sênior de Estratégia de Vendas. As recomendações devem ser práticas e adaptadas ao porte e maturidade do cliente — não recomendar complexidade desnecessária.

**Critério de recomendação:** a ferramenta certa é a mais simples que resolve o problema. Evitar over-engineering. Se o cliente não tem CRM hoje, começar com a ferramenta de entrada, não com a mais sofisticada do mercado.

---

## Estrutura obrigatória do documento

### Cabeçalho

```
# Ferramentas Táticas e Operação — [Nome do Cliente]

**Cliente:** [Nome do cliente]
**Data:** [Data]
**Responsável:** Denis Orosco | Consultor de Estratégia de Vendas Sênior
```

---

### Seção 1 — Arsenal Atual: Diagnóstico

Mapeie tudo que o cliente já usa. Para cada ferramenta, avalie o status de uso.

| Categoria | Ferramenta em uso | Status de uso | Gap identificado |
|---|---|---|---|
| CRM | [Nome ou "Nenhum"] | [Ativo / Subutilizado / Abandonado / Inexistente] | [O que está faltando] |
| Comunicação com leads | [WhatsApp / E-mail / etc.] | [Ativo / Subutilizado / etc.] | [Gap] |
| Assinatura de contratos | [Ferramenta ou "Papel/PDF"] | [Status] | [Gap] |
| Reuniões e videochamadas | [Ferramenta] | [Status] | [Gap] |
| Automação e cadência | [Ferramenta ou "Manual"] | [Status] | [Gap] |
| Gestão interna | [Ferramenta] | [Status] | [Gap] |
| Inteligência e dados | [Ferramenta ou "Sem dados"] | [Status] | [Gap] |

Após a tabela, inclua um **diagnóstico consolidado** (3 a 5 linhas): o que o arsenal atual permite fazer bem, o que ele impede e qual o impacto operacional dos gaps mais críticos.

---

### Seção 2 — Stack Recomendada por Categoria

Para cada categoria, defina a ferramenta recomendada para o cliente. Justifique a escolha com base no diagnóstico — porte da operação, nível de maturidade, integração com o que já existe e custo-benefício.

#### 2.1 CRM — Gestão do Pipeline

| Campo | Definição |
|---|---|
| **Ferramenta recomendada** | [Nome] |
| **Alternativa** | [Nome — quando usar essa alternativa] |
| **Por que essa escolha** | [Justificativa baseada no cliente: porte, volume, maturidade, integrações necessárias] |
| **O que ela resolve** | [Gap específico identificado na Seção 1] |
| **Configuração mínima necessária** | [Estágios do pipeline, campos obrigatórios, tags de origem de lead] |
| **Custo estimado** | [R$/mês ou gratuito] |

#### 2.2 Comunicação com Leads

| Campo | Definição |
|---|---|
| **Canal principal** | [WhatsApp Business / E-mail / Ligação / outro] |
| **Ferramenta de suporte** | [Ex: WhatsApp Business API, RD Station Conversas, ManyChat] |
| **Por que essa escolha** | [Justificativa] |
| **O que ela resolve** | [Gap da Seção 1] |
| **SLA suportado** | [Como essa ferramenta viabiliza o SLA de resposta definido nos KPIs] |
| **Custo estimado** | [R$/mês ou gratuito] |

#### 2.3 Assinatura Digital de Contratos

| Campo | Definição |
|---|---|
| **Ferramenta recomendada** | [Nome — ex: ClickSign, D4Sign, DocuSign] |
| **Alternativa** | [Nome] |
| **Por que essa escolha** | [Justificativa: volume de contratos/mês, validade jurídica, custo] |
| **O que ela resolve** | [Gap da Seção 1] |
| **Custo estimado** | [R$/mês] |

#### 2.4 Reuniões e Videochamadas

| Campo | Definição |
|---|---|
| **Ferramenta recomendada** | [Google Meet / Zoom / Microsoft Teams] |
| **Ferramenta de agendamento** | [Calendly / Google Agenda / outro] |
| **Por que essa escolha** | [Justificativa] |
| **Custo estimado** | [R$/mês ou gratuito] |

#### 2.5 Automação e Cadência

| Campo | Definição |
|---|---|
| **Ferramenta recomendada** | [Nome — ex: RD Station, ActiveCampaign, automação nativa do CRM] |
| **Alternativa** | [Nome — e quando usar] |
| **O que automatizar** | [Lista dos fluxos prioritários: follow-up, onboarding, reativação de leads frios] |
| **Por que essa escolha** | [Justificativa baseada no volume e maturidade do cliente] |
| **Custo estimado** | [R$/mês] |

#### 2.6 Gestão Interna e Documentação

| Campo | Definição |
|---|---|
| **Ferramenta recomendada** | [Notion / Google Workspace / outro] |
| **Uso principal** | [Playbook, scripts, onboarding de novos vendedores, rituais de gestão] |
| **Por que essa escolha** | [Justificativa] |
| **Custo estimado** | [R$/mês ou gratuito] |

#### 2.7 Inteligência e Dados

| Campo | Definição |
|---|---|
| **Ferramenta recomendada** | [Google Looker Studio / dashboard nativo do CRM / planilha estruturada] |
| **O que monitorar** | [KPIs definidos na `/ec-kpis`: funil, conversão, SLA, motivos de perda] |
| **Por que essa escolha** | [Justificativa: maturidade atual, dados disponíveis, custo] |
| **Custo estimado** | [Gratuito / R$/mês] |

---

### Seção 3 — Matriz de Prioridade de Implementação

Defina o que ativar imediatamente (impacto alto, esforço baixo) vs. o que pode ser implementado depois.

| Ferramenta | Impacto | Esforço de Implementação | Prioridade | Fase |
|---|---|---|---|---|
| [Nome] | [Alto / Médio / Baixo] | [Alto / Médio / Baixo] | [P1 / P2 / P3] | [Fase 1 / Fase 2] |

**Critério de priorização:**
- **P1 — Imediato:** impacto direto no pipeline atual. Sem essa ferramenta, o processo novo não funciona
- **P2 — 30 dias:** melhora significativa, mas a operação roda sem ela por um período curto
- **P3 — 60-90 dias:** otimização e escala — ativar quando o processo básico estiver estabilizado

---

### Seção 4 — SOP Operacional por Ferramenta

Para cada ferramenta P1 e P2, defina como ela entra na rotina do vendedor e do gestor.

#### [Nome da Ferramenta]

| Quem usa | [Vendedor / SDR / Gestor / Todos] |
|---|---|
| **Quando usa** | [Em qual etapa do processo comercial] |
| **O que faz nela** | [Ação específica: registrar lead, mover etapa, enviar proposta, etc.] |
| **Regra de ouro** | [O que nunca pode ser esquecido — ex: "Todo lead recebido entra no CRM em até 5 minutos"] |
| **Erro mais comum** | [O que o time provavelmente vai fazer errado no início] |
| **Como evitar** | [Instrução preventiva] |

---

### Seção 5 — Mapa de Integração

Mostre como as ferramentas se conectam no fluxo comercial. Use o formato de texto estruturado abaixo (o consultor pode transformar em diagrama visual no Docs):

```
LEAD ENTRA
    ↓
[Canal de origem: WhatsApp / Instagram / Indicação / Formulário]
    ↓
[Ferramenta de comunicação: WhatsApp Business]
    ↓
[CRM: registro do lead + qualificação NATA + movimentação de etapa]
    ↓
[Automação: follow-up automático se sem resposta em Xh]
    ↓
[Reunião: agendamento via Calendly + Google Meet]
    ↓
[Contrato: gerado e enviado via [ferramenta de assinatura]]
    ↓
[CRM: lead movido para Cliente Ativo + trigger de onboarding]
    ↓
[Automação: mensagem de boas-vindas automática]
    ↓
[Gestão interna: card de execução criado para o time de operação]
    ↓
[Inteligência: KPIs atualizados no dashboard]
```

Adapte o mapa ao fluxo real identificado no diagnóstico do cliente.

---

### Seção 6 — Custo Total Estimado da Stack

| Ferramenta | Plano recomendado | Custo mensal estimado |
|---|---|---|
| [CRM] | [Plano X] | R$ [valor] |
| [Comunicação] | [Plano X] | R$ [valor] |
| [Assinatura digital] | [Plano X] | R$ [valor] |
| [Automação] | [Plano X] | R$ [valor] |
| [Reuniões/Agenda] | [Gratuito / Plano X] | R$ [valor] |
| [Gestão interna] | [Gratuito / Plano X] | R$ [valor] |
| [Inteligência/Dados] | [Gratuito / Plano X] | R$ [valor] |
| **Total estimado** | | **R$ [soma]** |

Inclua uma **nota de contexto** abaixo da tabela: o que está incluído no custo do projeto V4 Company (se aplicável) e o que o cliente contrata diretamente.

---

## Regras de qualidade do documento

- Nunca recomendar uma ferramenta sem justificativa baseada no diagnóstico do cliente
- Sempre oferecer alternativa nas categorias críticas (CRM, automação) — o cliente pode já ter preferência ou contrato ativo
- O SOP deve ser escrito para quem vai usar — linguagem simples, ação específica, sem ambiguidade
- Custo estimado deve ter base real (planos públicos das ferramentas) — não inventar valores
- Se o cliente já usa uma ferramenta adequada em alguma categoria, mantê-la — não recomendar troca sem motivo técnico claro
- O mapa de integração deve refletir o fluxo real do cliente — não um modelo genérico

---

## Como usar esta skill

1. Digite `/ec-ferramentas`
2. Compartilhe os documentos na seguinte ordem de prioridade:
   - **Obrigatórios:** Plano de ROI, transcrições das entrevistas, Documento Geral de Análise
   - **Contexto da stack atual:** lista de ferramentas em uso, print do CRM, modelo de contrato atual
   - **Conexão com o processo:** Estrutura Organizacional (`/ec-org-pessoas`), KPIs (`/ec-kpis`), BPMN (`/ec-bpmn`) se disponíveis
3. Informe restrições de orçamento ou preferências de ferramentas do cliente, se conhecidas
4. Receba o entregável de Ferramentas Táticas e Operação completo e formatado
