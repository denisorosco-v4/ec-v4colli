---
name: ec-cadencia
description: produzir os Fluxos de Cadência oficiais da operação comercial do cliente a partir do BPMN. A skill deve transformar cada etapa do processo em uma decisão operacional: se aquela etapa exige uma régua de follow-up, qual é o gatilho, quem executa, em quais canais, em que ritmo, com quais mensagens e qual destino final no CRM.
---

# Skill: /ec-cadencia

**Objetivo:** produzir os Fluxos de Cadência oficiais da operação comercial do cliente a partir do BPMN. A skill deve transformar cada etapa do processo em uma decisão operacional: se aquela etapa exige uma régua de follow-up, qual é o gatilho, quem executa, em quais canais, em que ritmo, com quais mensagens e qual destino final no CRM.

Esta skill é **BPMN-first**: nenhuma cadência deve ser criada antes de ler e decompor o BPMN etapa por etapa.

---

## Inputs esperados

### Bloco 1 — Processo Comercial

| Documento | Uso obrigatório |
|---|---|
| **BPMN** (`/ec-bpmn`) | Input central. Extrair todas as etapas, responsáveis, gatilhos, DoD, divergências, motivos de saída e canais de entrada |
| **Ferramentas Táticas** (`/ec-ferramentas`) | Confirmar canais disponíveis: WhatsApp, ligação, e-mail, CRM, automação, agenda, assinatura digital |
| **KPIs e SLA** (`/ec-kpis` e `/ec-sla`) | Definir prazo máximo entre toques e tempo aceitável de permanência por etapa |
| **Playbook Comercial** (`/ec-playbook-comercial`) | Validar linguagem, papéis, rotinas e regras de CRM já consolidadas |

### Bloco 2 — Contexto Comercial

| Documento | Uso |
|---|---|
| **Entrevista com gestor** | Como o follow-up acontece hoje, onde o processo trava e quais prazos são realistas |
| **Entrevista com top performer** | O que o melhor vendedor faz em cadência, canal e abordagem |
| **Entrevista com bottom performer** | Onde leads esfriam, onde há abandono e quais toques deixam de acontecer |
| **Exemplos de conversas reais** | Linguagem real do cliente e nível de formalidade |

---

## Regra central: cobertura etapa a etapa

Antes de escrever as cadências, crie uma **Matriz de Cobertura do BPMN** com todas as etapas do processo.

| Etapa BPMN | Responsável | Gatilho | DoD | Exige cadência? | Cadência vinculada | Motivo |
|---|---|---|---|---|---|---|
| 1. [Etapa] | [Cargo] | [Gatilho] | [DoD] | Sim/Não | [Nome da cadência] | [Por que existe ou por que não precisa] |

Regras:

- Toda etapa do BPMN deve aparecer na matriz.
- Uma etapa pode não exigir cadência, mas isso precisa ser justificado.
- Se a etapa tiver risco de silêncio, atraso, no-show, documentação pendente, proposta sem resposta, contrato sem assinatura ou handoff, ela deve ter uma cadência ou ser vinculada a uma cadência existente.
- Divergências do BPMN viram destinos claros: avançar, retornar, suspender, reativar ou encerrar.
- Motivos de saída do funil devem ter cadência ou protocolo de encerramento associado.

---

## Situações mínimas que a skill deve procurar no BPMN

Além de outras situações específicas do cliente, a skill deve avaliar se o processo exige cadências para:

1. **Novo lead sem resposta** — lead registrado/backlog sem conexão.
2. **Conexão estabelecida sem avanço** — lead respondeu, mas ainda não agendou.
3. **Reunião de qualificação agendada** — confirmação, lembrete e reagendamento/no-show.
4. **Aguardando documentação** — lead aceitou diagnóstico ou análise, mas não enviou documentos.
5. **Documentação pendente** — time técnico apontou falta, divergência ou insuficiência documental.
6. **Diagnóstico em elaboração** — comunicação de status quando o ciclo técnico é longo.
7. **Diagnóstico concluído sem agenda** — material pronto, mas apresentação ainda não marcada.
8. **Diagnóstico agendado** — confirmação, lembrete e no-show da apresentação.
9. **Proposta enviada sem retorno** — follow-up de decisão comercial.
10. **Proposta +30 dias** — intensificação e revisão de abordagem.
11. **Proposta +60 dias** — última tentativa, renegociação ou encerramento.
12. **Aguardando documentação de contrato** — aceite verbal/escrito sem dados completos.
13. **Contrato enviado sem assinatura** — lembrete e remoção de barreiras.
14. **Onboarding pós-fechamento** — boas-vindas, próximos passos e handoff.
15. **Lead perdido/sem interesse/não é o momento** — encerramento elegante e reativação futura.
16. **Farmer/carteira** — oportunidade identificada na base sem resposta ou sem decisão.

---

## Instruções para o modelo

Com os documentos em mãos, execute nesta ordem:

1. **Extrair o BPMN em etapas normalizadas**  
   Identifique número da etapa, nome, pipeline, responsável, gatilho, DoD e próxima etapa.

2. **Mapear pontos de atrito**  
   Para cada etapa, pergunte: “o que pode fazer esse card parar aqui?”.

3. **Agrupar etapas em cadências operáveis**  
   Não crie uma régua isolada para cada etapa se duas ou mais etapas compartilham o mesmo comportamento de follow-up. O objetivo é cobrir todas as etapas com o menor conjunto de cadências prático.

4. **Definir gatilho e destino final**  
   Cada cadência precisa dizer exatamente quando começa e o que acontece se terminar sem resposta.

5. **Escrever mensagens de uso direto**  
   Cada toque deve ter canal, dia, objetivo e mensagem pronta. Não entregue apenas “fazer follow-up”.

6. **Criar regras gerais de uso**  
   Inclua regras de alternância de canais, horários, registro no CRM, compressão por urgência e encerramento.

---

## Estrutura obrigatória do documento

### Cabeçalho

```markdown
# Fluxos de Cadência — [Nome do Cliente]

**Cliente:** [Nome do cliente]
**Data:** [Data]
**Responsável:** Denis Orosco | Consultor de Estratégia de Vendas Sênior
**Fonte principal:** BPMN — Processo Comercial
```

---

### Seção 1 — Premissas da Operação

Resuma em 5 a 8 linhas:

- tipo de venda;
- ciclo comercial;
- canal principal;
- quem executa follow-up em cada fase;
- principal risco de perda por inação;
- ferramenta de registro oficial.

---

### Seção 2 — Matriz de Cobertura do BPMN

Inclua todas as etapas do BPMN.

| Etapa BPMN | Pipeline | Responsável | Gatilho | DoD | Exige cadência? | Cadência vinculada |
|---|---|---|---|---|---|---|

---

### Seção 3 — Mapa de Cadências

| Cadência | Etapas BPMN cobertas | Quando é ativada | Responsável | Duração total | Destino final |
|---|---|---|---|---|---|

---

### Seção 4 — Réguas de Cadência

Repita para cada cadência.

```markdown
## Cadência [N] — [Nome]

**Etapas BPMN cobertas:** [lista de etapas]
**Quando ativar:** [gatilho preciso]
**Objetivo:** [resultado esperado]
**Responsável:** [cargo]
**Canais:** [WhatsApp, ligação, e-mail, CRM, automação]
**Destino final:** [ação no CRM se não houver avanço]

| Toque | Dia/Prazo | Canal | Objetivo | Mensagem/Ação |
|---|---|---|---|---|
| T1 | Dia 0 | WhatsApp | [objetivo] | "[mensagem pronta]" |
```

> **Nota operacional:** explique como adaptar a régua para lead estratégico, lead de indicação, carteira/farmer, urgência ou prazo crítico.

---

### Seção 5 — Protocolos Especiais

Inclua quando aplicável:

- no-show em reunião;
- conexão negativa;
- documentação insuficiente;
- proposta recusada;
- silêncio após proposta;
- silêncio após contrato;
- reativação futura;
- handoff para onboarding.

---

### Seção 6 — Regras Gerais da Cadência

| Regra | Padrão |
|---|---|
| Cadência mínima obrigatória | [N toques antes de suspender/encerrar] |
| Alternância de canais | [regra] |
| Registro no CRM | [campos obrigatórios] |
| Encerramento | [tag/motivo] |
| Reativação | [prazo e condição] |
| Lead estratégico | [compressão ou prioridade] |

---

## Regras de qualidade

- Toda etapa do BPMN deve estar coberta pela matriz.
- Toda cadência deve ter gatilho, responsável, duração e destino final.
- As mensagens precisam estar prontas para uso direto.
- O ritmo deve respeitar o ciclo real do cliente; se for premissa de mercado, sinalize.
- Não criar cadência para etapa puramente interna sem explicar o motivo.
- Não permitir encerramento como “sem retorno” sem cadência mínima executada.
- O documento deve ser compatível com `/ec-script`: cada toque de cadência precisa ter ID claro para que o script correspondente seja gerado.

---

## Como usar esta skill

1. Digite `/ec-cadencia`.
2. Anexe primeiro o BPMN.
3. Anexe, se houver, Ferramentas, KPIs/SLA, Playbook e exemplos de conversas.
4. O modelo deve primeiro montar a Matriz de Cobertura do BPMN.
5. Só depois deve escrever as cadências.
