---
name: ec-script
description: produzir os scripts oficiais de vendas, follow-up, handoff e encerramento da operação comercial, conectados a cada etapa do BPMN e a cada toque das cadências definidas em `/ec-cadencia`.
---

# Skill: /ec-script

**Objetivo:** produzir os scripts oficiais de vendas, follow-up, handoff e encerramento da operação comercial, conectados a cada etapa do BPMN e a cada toque das cadências definidas em `/ec-cadencia`.

Esta skill é **BPMN-first e Cadência-aware**: primeiro entende o processo etapa a etapa, depois conecta scripts aos momentos reais de comunicação. Nenhum script deve ficar solto, sem etapa, gatilho, responsável e objetivo.

---

## Inputs esperados

### Bloco 1 — Processo e Cadências

| Documento | Uso obrigatório |
|---|---|
| **BPMN** (`/ec-bpmn`) | Input central para mapear todas as etapas, responsáveis, gatilhos, DoD e motivos de saída |
| **Fluxos de Cadência** (`/ec-cadencia`) | Input central para scripts de follow-up. Cada toque deve receber um script correspondente |
| **Playbook Comercial** (`/ec-playbook-comercial`) | Validar tom, regras de linguagem, papéis, etapas e rotinas |
| **SLA** (`/ec-sla`) | Garantir que os scripts respeitem prazos e protocolos de avanço/encerramento |

### Bloco 2 — Voz da Marca e Contexto Comercial

| Documento | Uso |
|---|---|
| **Plano de ROI** | Modelo de negócio, proposta de valor, ticket, ICP e argumento econômico |
| **Entrevista com gestor** | Vocabulário real, diferenciais, objeções, pontos de atenção |
| **Entrevista com top performer** | Linguagem que converte e abordagem prática |
| **Entrevista com bottom performer** | Falhas de comunicação a corrigir |
| **Exemplos de conversas reais** | Ritmo, canal e palavras que o lead já reconhece |

---

## Regra central: cobertura etapa a etapa

Antes de escrever scripts, crie uma **Matriz de Scripts por Etapa do BPMN**.

| Etapa BPMN | Responsável | Comunicação necessária? | Tipo de script | Script obrigatório? | Motivo |
|---|---|---|---|---|---|
| 1. [Etapa] | [Cargo] | Sim/Não | Abertura / Qualificação / Follow-up / Handoff / Encerramento | Sim/Não | [Justificativa] |

Regras:

- Toda etapa do BPMN deve aparecer.
- Se a etapa for interna e não exigir comunicação com lead, crie pelo menos um **script de handoff interno** quando houver troca de responsável.
- Se a etapa tiver contato com lead, reunião, envio de documento, proposta, contrato, no-show, silêncio ou encerramento, o script é obrigatório.
- Toda divergência do BPMN deve ter script: avanço, sem diagnóstico, lead perdido, documentação pendente, proposta recusada, contrato sem assinatura, onboarding.
- Todo toque da `/ec-cadencia` deve ter um script correspondente com o mesmo ID.

---

## Síntese obrigatória antes dos scripts

Antes de escrever qualquer script, apresente:

### Modelo de negócio

Resuma:

- o que a empresa vende;
- para quem vende;
- como a venda acontece;
- qual é a tese de valor;
- qual métrica econômica sustenta a decisão;
- quais objeções mais prováveis existem.

### Tom da marca

Defina:

- formalidade;
- nível técnico;
- ritmo da mensagem;
- palavras que devem aparecer;
- palavras proibidas ou a evitar;
- como adaptar entre WhatsApp, ligação, e-mail e reunião.

### Regras de linguagem

| Usar | Evitar | Por quê |
|---|---|---|
| [termo] | [termo] | [racional] |

---

## Tipos de script que a skill deve gerar

A partir do BPMN, avalie e gere scripts para:

1. **Abertura / primeiro contato** — lead novo, indicação, evento, parceria, marketing, carteira.
2. **Tentativa de conexão** — quando há registro/backlog mas ainda não houve resposta.
3. **Conexão estabelecida** — resposta positiva, resposta negativa e “não é o momento”.
4. **Agendamento de qualificação** — convite, confirmação e reagendamento.
5. **Reunião de qualificação** — abertura, investigação, critérios, diagnóstico sim/não, fechamento da reunião.
6. **Solicitação de documentação** — pedido inicial, explicação do porquê, NDA, checklist.
7. **Follow-up de documentação** — toque curto, toque de valor, ligação, última tentativa e reativação.
8. **Documentação pendente** — quando o time técnico pede complemento.
9. **Status de diagnóstico** — quando o diagnóstico está em elaboração e o lead precisa ser mantido aquecido.
10. **Agendamento de apresentação do diagnóstico** — convite, confirmação e lembrete.
11. **Apresentação do diagnóstico** — abertura, transição para valor financeiro, proposta de serviços.
12. **Envio de proposta** — mensagem de envio, resumo de valor e CTA.
13. **Follow-up de proposta** — +7, +15, +30, +60 dias ou conforme cadência.
14. **Objeções** — preço, já tenho contador, vou falar com sócio/diretor, momento, desconfiança documental, comparação com concorrente.
15. **Aceite e contrato** — coleta de dados, envio, lembrete de assinatura.
16. **Proposta recusada / lead perdido** — encerramento elegante e registro de motivo.
17. **Onboarding pós-fechamento** — boas-vindas, handoff e próximos passos.
18. **Farmer / carteira** — abordagem de oportunidade, expansão, indicação e BWA Cash quando aplicável.

---

## Estrutura obrigatória do documento

### Cabeçalho

```markdown
# Scripts de Vendas e Follow-up — [Nome do Cliente]

**Cliente:** [Nome do cliente]
**Data:** [Data]
**Responsável:** Denis Orosco | Consultor de Estratégia de Vendas Sênior
**Fonte principal:** BPMN + Fluxos de Cadência
```

---

### Seção 1 — Modelo de Negócio e Tom da Marca

Inclua:

- modelo de negócio;
- tese de valor;
- perfil do lead;
- ciclo de venda;
- regras de linguagem;
- vocabulário obrigatório e proibido.

---

### Seção 2 — Matriz de Scripts por Etapa do BPMN

| Etapa BPMN | Pipeline | Responsável | Momento de comunicação | Script gerado | ID do script |
|---|---|---|---|---|---|

IDs sugeridos:

- `S01`, `S02`, `S03` para scripts de etapa;
- `C01-T01`, `C01-T02` para scripts vinculados a cadências;
- `OBJ-01` para objeções;
- `HI-01` para handoffs internos.

---

### Seção 3 — Scripts de Etapa do Funil

Repita para cada script de etapa.

```markdown
## [ID] — [Nome do Script]

**Etapa BPMN:** [número e nome]
**Responsável:** [cargo]
**Canal:** [WhatsApp / ligação / e-mail / reunião / CRM interno]
**Quando usar:** [gatilho exato]
**Objetivo:** [resultado esperado]
**Critério de sucesso:** [o que precisa acontecer depois]

### Script

```text
[script pronto para uso]
```

**Instrução de uso:** [como adaptar sem descaracterizar]
```

---

### Seção 4 — Scripts Integrados às Cadências

Para cada toque da `/ec-cadencia`, gere o script correspondente.

| Cadência | Toque | Etapa BPMN | Canal | Objetivo | ID do script |
|---|---|---|---|---|---|

Depois detalhe cada script.

---

### Seção 5 — Roteiros de Reunião

Inclua, quando houver no BPMN:

- reunião de qualificação;
- apresentação de diagnóstico/análise;
- negociação/proposta;
- handoff para onboarding.

Cada roteiro deve ter:

1. abertura;
2. contexto;
3. perguntas;
4. transição;
5. fechamento;
6. próximos passos;
7. campos que devem ser atualizados no CRM.

---

### Seção 6 — Scripts de Objeção

| Objeção | Por que o lead diz isso | Resposta recomendada | Próximo passo |
|---|---|---|---|

Cada objeção deve ter um script curto para WhatsApp e uma versão para ligação/reunião.

---

### Seção 7 — Scripts de Handoff Interno

Obrigatório sempre que o BPMN trocar o dono do card.

| Handoff | De | Para | Quando acontece | Script/Checklist interno |
|---|---|---|---|---|

Exemplos de handoff:

- SDR -> Time Técnico;
- Time Técnico -> Apoio Comercial;
- Apoio Comercial -> Closer;
- Closer -> Time de Apoio;
- Closer/Time de Apoio -> Relacionamento;
- Farmer -> Apoio/Relacionamento, quando aplicável.

---

### Seção 8 — Quadro Comparativo

| Situação | Atendimento atual | Padrão recomendado |
|---|---|---|
| Primeiro contato | [se houver dado] | [novo padrão] |
| Qualificação | [se houver dado] | [novo padrão] |
| Documentação | [se houver dado] | [novo padrão] |
| Proposta | [se houver dado] | [novo padrão] |
| Objeção | [se houver dado] | [novo padrão] |
| Pós-fechamento | [se houver dado] | [novo padrão] |

---

## Regras de qualidade

- Nenhum script deve ser genérico se o BPMN oferece contexto específico.
- Todo script deve ter etapa, responsável, canal, gatilho e objetivo.
- Todo toque da `/ec-cadencia` deve ter script correspondente.
- Scripts de WhatsApp devem ser curtos, humanos e com uma única chamada para ação.
- Scripts de e-mail podem ser mais estruturados, mas não devem parecer automação fria.
- Scripts de ligação/reunião devem ter roteiro, não texto engessado.
- Scripts internos devem funcionar como checklist de handoff.
- Se uma informação for premissa de mercado, sinalize: **Premissa de mercado — validar com o cliente.**
- O vocabulário deve respeitar o Playbook e as regras comerciais do cliente.

---

## Como usar esta skill

1. Digite `/ec-script`.
2. Anexe o BPMN.
3. Anexe os Fluxos de Cadência gerados por `/ec-cadencia`.
4. Anexe, se houver, Playbook, entrevistas, exemplos de conversa e objeções.
5. O modelo deve primeiro montar a matriz de scripts por etapa.
6. Só depois deve escrever scripts de etapa, scripts de cadência, objeções e handoffs.
