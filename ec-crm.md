# Skill: /ec-crm
**Objetivo:** Traduzir o Playbook Comercial, o BPMN e os Fluxos de Cadência em configuração concreta do CRM — pipeline, campos personalizados, automações (gatilho → condição → ação), sequências de cadência, alertas de SLA, relatórios e regras de governança. O output é um guia de implementação que uma pessoa consegue seguir com o CRM aberto na tela, sem consultar nenhum outro documento.

---

## Inputs esperados

| Documento | O que entrega para a configuração do CRM |
|---|---|
| **BPMN** (`/ec-bpmn`) | Estágios do pipeline, responsáveis, DoDs — a espinha dorsal da configuração |
| **Fluxos de Cadência** (`/ec-cadencia`) | Sequências a configurar no CRM: toques, dias, canais e templates |
| **KPIs e Rituais** (`/ec-kpis`) | Métricas que precisam ser rastreadas — define quais campos e relatórios são obrigatórios |
| **SLA** (`/ec-sla`) | Prazos de resposta e processo — base para os alertas automáticos |
| **Script de Vendas** (`/ec-script`) | Templates de mensagem a usar nas sequências de automação |
| **Estrutura Organizacional** (`/ec-org-pessoas`) | Perfis de usuário, licenças e permissões de acesso |
| **Estudo de CRM** (`/ec-stack`) | Qual CRM foi escolhido — permite adaptar nomenclatura e lógica de automação ao sistema real |
| **Playbook Comercial** (`/ec-playbook-comercial`) | Contexto geral — resolve dúvidas de interpretação entre os entregáveis |

---

## Instruções para o modelo

Com os documentos em mãos, você deve:

1. **Extrair do BPMN os estágios do pipeline** — nome, critério de entrada e DoD de cada etapa
2. **Mapear todos os campos necessários** — o que precisa ser registrado para rastrear KPIs e qualificação
3. **Projetar cada automação** no formato GATILHO → CONDIÇÃO → AÇÃO — cobrindo movimentação de estágio, follow-up, alertas de SLA e notificações
4. **Converter as cadências** da `/ec-cadencia` em sequências configuráveis: toque, dia, canal e template
5. **Definir os relatórios** que o gestor vai acompanhar nos rituais de gestão definidos na `/ec-kpis`
6. **Estabelecer as regras de governança** — o que é obrigatório registrar, quem pode fazer o quê, como lidar com leads parados

**Princípio central:** tudo que está documentado no Playbook deve ter um correspondente configurado no CRM. O que não está no CRM não será executado de forma consistente.

**Critério de qualidade das automações:**
- Toda automação tem nome descritivo no formato `[Gatilho] → [Ação]`
- Toda automação tem um responsável humano identificado (quem deve agir quando a automação dispara uma tarefa)
- Toda automação resolve um problema real identificado no BPMN ou nas entrevistas — sem automação decorativa

---

## Estrutura obrigatória do documento

### Cabeçalho

```
# Configuração de CRM — [Nome do Cliente]

**Cliente:** [Nome do cliente]
**CRM:** [Nome do CRM escolhido via /ec-stack]
**Data:** [Data]
**Versão:** 1.0
**Responsável:** Denis Orosco | Consultor de Estratégia de Vendas Sênior
```

---

### Seção 1 — Configuração do Pipeline

Monte o pipeline com os estágios exatos do BPMN. Para cada estágio, defina:

| # | Nome do Estágio | Critério de Entrada | DoD — Critério de Conclusão | Responsável | Probabilidade de Fechamento |
|---|---|---|---|---|---|
| 1 | [Nome exato do BPMN] | [O que precisa ser verdade para o lead entrar aqui] | [O que precisa estar feito para avançar] | [Cargo] | [%] |
| 2 | | | | | |
| *(continuar para todos os estágios do BPMN)* | | | | | |

**Estágios especiais obrigatórios:**

| Estágio | Finalidade |
|---|---|
| **Entrada / Novo Lead** | Lead recém chegado — não triado ainda |
| **Perdido** | Lead que saiu do funil — manter para análise de motivo de perda |
| **Nutrição** | Lead frio com potencial futuro — não descartar, acompanhar |
| **Cliente** | Convertido — dispara processo de onboarding |

---

### Seção 2 — Campos Personalizados

Liste todos os campos que precisam ser criados no CRM. Organize por finalidade.

#### 2.1 Campos de Qualificação

| Campo | Tipo | Opções (se lista) | Obrigatório para avançar para |
|---|---|---|---|
| [Critério de qualificação 1 — ex: Perfil ICP] | [Lista / Texto / Número / Data] | [Opções se lista] | [Estágio X] |
| [Critério de qualificação 2] | | | |
| [Origem do Lead] | Lista | [WhatsApp / Indicação / Instagram / Formulário / Outbound / Outro] | [Entrada] |
| [Canal de preferência] | Lista | [WhatsApp / E-mail / Telefone] | |
| [Motivo de perda] | Lista | [Fora do escopo / Sem budget / Concorrente / Sem resposta / Timing / Outro] | [Perdido] |

#### 2.2 Campos de Acompanhamento de KPI

| Campo | Tipo | KPI que alimenta |
|---|---|---|
| [Data do primeiro contato] | Data | [Tempo de resposta ao lead / SLA] |
| [Data de envio da proposta] | Data | [Ciclo de venda] |
| [Data de fechamento] | Data | [Ciclo de venda, taxa de conversão] |
| [Valor do contrato] | Moeda | [Ticket médio, receita total] |
| [Número de toques até conversão] | Número | [Eficiência de cadência] |
| *(adicionar campos para cada KPI definido na `/ec-kpis` que não seja calculável automaticamente)* | | |

#### 2.3 Campos de Contexto

| Campo | Tipo | Finalidade |
|---|---|---|
| [Segmento / Setor do lead] | Lista / Texto | [Segmentação de relatórios] |
| [Nome do responsável comercial] | Usuário | [Atribuição e relatórios por vendedor] |
| [Observações do lead] | Texto longo | [Contexto qualitativo — não rastreável em campo estruturado] |

---

### Seção 3 — Automações

#### Regras de formato

Cada automação segue o padrão:

```
AUTOMAÇÃO [N] — [Nome no formato "Gatilho → Ação"]
Gatilho:   [O evento que dispara — movimento de estágio, tempo sem atividade, campo preenchido, data]
Condição:  [Filtro adicional — se houver. Exemplo: "apenas se canal = WhatsApp"]
Ação:      [O que o CRM executa automaticamente]
Responsável humano: [Quem precisa agir após a automação — se aplicável]
```

---

#### 3.1 Automações de Entrada e Triagem

```
AUTOMAÇÃO 1 — Lead Entra → Criar Tarefa de Primeiro Contato
Gatilho:   Lead criado no estágio "Entrada / Novo Lead"
Condição:  Nenhuma
Ação:      Criar tarefa "Fazer primeiro contato" para o responsável comercial, com prazo = [SLA de resposta definido na /ec-sla]
Responsável humano: [SDR ou vendedor responsável]
```

```
AUTOMAÇÃO 2 — Lead Sem Contato em [X horas] → Alerta de SLA
Gatilho:   Lead em "Entrada / Novo Lead" há mais de [X horas] sem atividade registrada
Condição:  Nenhuma
Ação:      Enviar notificação ao responsável e ao gestor: "Lead [Nome] está há [X horas] sem contato. SLA em risco."
Responsável humano: Responsável comercial age imediatamente
```

```
AUTOMAÇÃO 3 — Lead Qualificado → Mover para Próxima Etapa + Criar Tarefa
Gatilho:   Campo "Perfil ICP" marcado como "Qualificado"
Condição:  Nenhuma
Ação:      Mover lead para estágio [próximo estágio do BPMN] + Criar tarefa "[Ação da próxima etapa]" com prazo [X dias]
Responsável humano: [Responsável da próxima etapa]
```

---

#### 3.2 Automações de Movimentação de Estágio

*(Para cada transição de estágio do BPMN, criar uma automação correspondente)*

```
AUTOMAÇÃO [N] — [Estágio A] → [Estágio B]: Criar Tarefa de [Ação Principal do Estágio B]
Gatilho:   Lead movido para o estágio "[Estágio B]"
Condição:  Nenhuma
Ação:      Criar tarefa "[Ação principal do estágio B conforme BPMN]" para [responsável], prazo [SLA da etapa]
Responsável humano: [Responsável do estágio B]
```

*(Repetir para cada transição identificada no BPMN — mínimo uma automação por estágio)*

---

#### 3.3 Automações de Inatividade e Follow-up

```
AUTOMAÇÃO [N] — Sem Atividade em [X dias] → Iniciar Cadência de [Situação]
Gatilho:   Lead em [estágio X] sem atividade por [X dias]
Condição:  Cadência não iniciada ainda (campo "Cadência ativa" = vazio)
Ação:      Criar tarefa "Iniciar Cadência de [nome da cadência]" para o responsável + marcar campo "Cadência ativa" = "[nome da cadência]"
Responsável humano: [Responsável da cadência]
```

*(Criar uma automação por cadência definida na `/ec-cadencia`, mapeando o gatilho de inatividade de cada situação)*

---

#### 3.4 Automações de Alerta de SLA

*(Para cada prazo de SLA definido na `/ec-sla`, criar um alerta de vencimento)*

```
AUTOMAÇÃO [N] — SLA de [Etapa] Prestes a Vencer → Alerta ao Responsável
Gatilho:   Lead em [estágio X] há [X horas/dias — SLA da etapa conforme /ec-sla] sem o DoD ser cumprido
Condição:  Nenhuma
Ação:      Notificar [responsável da etapa]: "SLA da etapa [X] está vencendo. Lead: [Nome]. Ação necessária: [DoD da etapa]."
Responsável humano: Age imediatamente para cumprir o DoD antes do vencimento
```

```
AUTOMAÇÃO [N] — SLA de [Etapa] Vencido → Alerta ao Gestor
Gatilho:   Lead em [estágio X] há [X+1 horas/dias] sem atividade (SLA já vencido)
Condição:  Nenhuma
Ação:      Notificar o gestor: "SLA violado. Lead [Nome] está em [Estágio X] há [X] horas/dias sem ação. Responsável: [Nome]."
Responsável humano: Gestor intervém e cobra o responsável
```

---

#### 3.5 Automações de Fechamento e Onboarding

```
AUTOMAÇÃO [N] — Lead Movido para "Cliente" → Iniciar Onboarding
Gatilho:   Lead movido para o estágio "Cliente"
Condição:  Campo "Valor do contrato" preenchido
Ação:      Criar tarefa "Executar protocolo de onboarding" para [responsável pelo onboarding] com prazo [X dias] + registrar data de fechamento + enviar mensagem automática de boas-vindas via [canal principal]
Responsável humano: [Responsável pelo onboarding]
```

```
AUTOMAÇÃO [N] — Lead Movido para "Perdido" → Registrar Motivo de Perda
Gatilho:   Lead movido para o estágio "Perdido"
Condição:  Campo "Motivo de perda" vazio
Ação:      Bloquear movimentação e exigir preenchimento do campo "Motivo de perda" antes de confirmar
Responsável humano: Vendedor que perdeu o lead preenche o motivo obrigatoriamente
```

---

### Seção 4 — Sequências de Cadência no CRM

Converta cada cadência da `/ec-cadencia` em uma sequência configurável. Para cada cadência:

---

#### Cadência [N] — [Nome da Cadência]

**Gatilho de ativação:** [Reproduzir exatamente o gatilho da cadência correspondente na `/ec-cadencia`]
**Estágio do pipeline:** [Em qual estágio o lead está quando essa cadência é ativada]
**Responsável:** [Cargo que executa os toques]
**Destino ao encerrar sem resposta:** [Estágio ou ação — ex: mover para Nutrição]

| Passo | Dia | Canal | Ação no CRM | Template / Mensagem |
|---|---|---|---|---|
| 1 | Dia [X] | [WhatsApp / E-mail / Ligação] | [Tarefa automática criada / Mensagem enviada pelo CRM] | [Template da `/ec-cadencia` ou referência ao `/ec-script`] |
| 2 | Dia [X] | [Canal] | [Ação] | [Template] |
| *(continuar para todos os toques da cadência)* | | | | |

**Regra de encerramento:** [O que acontece quando a sequência termina — automação que move o lead ou cria tarefa final]

*(Repetir para cada cadência definida na `/ec-cadencia`)*

---

### Seção 5 — Relatórios e Dashboard

#### 5.1 Relatórios obrigatórios

Configure um relatório para cada KPI definido na `/ec-kpis`. Para cada relatório:

| Relatório | KPI que monitora | Tipo | Filtros | Atualização | Quem usa |
|---|---|---|---|---|---|
| [Nome do relatório] | [KPI da `/ec-kpis`] | [Funil / Pizza / Barra / Número] | [Período, responsável, estágio] | [Diária / Semanal / Mensal] | [Gestor / Vendedor / Ambos] |
| **Funil de Conversão** | Taxa MQL→SQL, SQL→Fechamento | Funil | Período atual vs. mês anterior | Semanal | Gestor |
| **Volume de Leads por Canal** | Origem dos leads | Pizza / Barra | Período | Mensal | Gestor |
| **Ciclo Médio de Venda** | Tempo médio por estágio | Número + histórico | Período, vendedor | Mensal | Gestor |
| **Motivos de Perda** | Distribuição das perdas | Pizza / Barra | Período | Mensal | Gestor |
| **Performance por Vendedor** | Volume, conversão, ticket | Tabela | Período | Semanal + Mensal | Gestor |
| **SLA de Resposta** | % de leads respondidos dentro do SLA | Número + histórico | Período | Diária | Gestor |
| *(adicionar relatório para cada KPI definido na `/ec-kpis` que não esteja coberto acima)* | | | | | |

#### 5.2 Dashboard principal (visão do gestor)

Monte o dashboard de gestão com os seguintes painéis:

| Painel | Posição | O que mostra |
|---|---|---|
| **Funil atual** | Topo | Volume de leads em cada estágio hoje |
| **Leads sem atividade** | Destaque | Leads com SLA em risco ou vencido |
| **Meta do mês** | Destaque | % atingido da meta de receita ou contratos |
| **Performance da semana** | Centro | Novos leads, qualificados, fechados — vs. semana anterior |
| **Motivos de perda do mês** | Base | Top 3 motivos de saída do funil |

---

### Seção 6 — Perfis de Usuário e Permissões

| Perfil | Quem é | O que pode fazer | O que não pode fazer |
|---|---|---|---|
| **Gestor** | [Nome/cargo do gestor] | Ver todos os leads, editar qualquer campo, acessar todos os relatórios, reabrir leads perdidos | |
| **Vendedor / Closer** | [Cargos de linha] | Ver e editar os próprios leads, registrar atividades, mover estágios com DoD cumprido | Ver leads de outros vendedores, deletar leads, alterar configurações do CRM |
| **SDR** (se existir) | [Cargo] | Criar leads, qualificar, mover até o estágio de passagem | Não acessa estágios de fechamento |
| **Visualizador** | [Se aplicável] | Apenas visualizar — sem edição | Nenhuma edição |

---

### Seção 7 — Regras de Governança

| REGRA | DESCRIÇÃO |
|---|---|
| **Todo lead entra pelo CRM** | Nenhum lead é atendido fora do CRM. Lead sem registro não é lead da operação |
| **Campos obrigatórios por estágio** | Não é possível avançar de estágio sem preencher os campos definidos na Seção 2 |
| **Registro de atividade obrigatório** | Todo contato com o lead (ligação, mensagem, reunião) é registrado no CRM em até [X horas] |
| **Motivo de perda obrigatório** | Nenhum lead vai para "Perdido" sem motivo registrado — o CRM bloqueia a ação |
| **Cadência antes de perda** | Lead só vai para "Perdido por sem retorno" após executar ao menos [N toques] da cadência correspondente |
| **Responsável único por lead** | Cada lead tem um único responsável — não há leads "soltos" sem dono |
| **Limpeza semanal do pipeline** | No ritual de gestão semanal, o gestor revisa leads parados há mais de [X dias] e decide: avançar, acionar cadência ou mover para Nutrição |
| **Leads de Nutrição** | Revisados 1x por mês no ritual mensal — nunca deletados sem avaliação do gestor |

---

## Regras de qualidade do documento

- Toda automação deve ter um caso de uso real identificado no BPMN, nas cadências ou no SLA — sem automações genéricas
- As sequências de cadência devem replicar fielmente as réguas da `/ec-cadencia` — mesmos dias, canais e templates. Não simplificar por conveniência de configuração
- Os campos personalizados devem cobrir todos os KPIs da `/ec-kpis` — se um KPI não tiver um campo correspondente no CRM, ele não será monitorado
- As permissões de usuário devem refletir a estrutura organizacional real — não usar permissões genéricas de "admin" para todos
- O documento deve mencionar o CRM escolhido na `/ec-stack` e adaptar a nomenclatura conforme o sistema real (ex: no HubSpot são "Workflows", no RD CRM são "Automações", no Pipedrive são "Automações")
- Se uma automação ou funcionalidade não estiver disponível no CRM escolhido, sinalizá-la explicitamente e indicar o workaround manual

---

## Como usar esta skill

1. Digite `/ec-crm`
2. Compartilhe os documentos na seguinte ordem:
   - **Processo:** BPMN (`/ec-bpmn`), Cadências (`/ec-cadencia`), SLA (`/ec-sla`)
   - **Métricas:** KPIs (`/ec-kpis`)
   - **Templates:** Scripts de Vendas (`/ec-script`)
   - **Estrutura:** Estrutura Organizacional (`/ec-org-pessoas`), Estudo de CRM (`/ec-stack`)
   - **Contexto geral:** Playbook Comercial (`/ec-playbook-comercial`) se disponível
3. Informe qual CRM foi escolhido (ou confirmar o da `/ec-stack`) para adaptar a nomenclatura
4. Receba o guia completo de configuração: pipeline → campos → automações → sequências → relatórios → governança
