# Skill: /ec-cadencia
**Objetivo:** Produzir os Fluxos de Cadência oficiais da operação comercial do cliente — uma régua de follow-up estruturada para cada situação do funil, com toque, dia, canal e mensagem definidos. As cadências são construídas com base no processo, nos canais e no perfil do cliente mapeados nos documentos anteriores.

---

## Inputs esperados

### Bloco 1 — Contexto da Operação (obrigatório)
| Documento | O que entrega para as cadências |
|---|---|
| **Transcrição do Kickoff** | Canais em uso, tempo médio de resposta dos leads, comportamento do cliente típico |
| **Transcrição da entrevista com o gestor** | Como o follow-up é feito hoje, o que funciona, o que não funciona, tom da comunicação |
| **Transcrição da entrevista com o top performer** | O que o melhor vendedor faz no follow-up — frequência, canal, abordagem que converte |
| **Transcrição da entrevista com o bottom performer** | Onde o follow-up falha — o que o vendedor de menor performance deixa de fazer |
| **Documento Geral de Análise** (output da `/ec-analise`) | Gargalos de cadência identificados — onde os leads somem, onde o processo trava |

### Bloco 2 — Processo e Ferramentas (para encaixar a cadência na operação)
| Documento | O que entrega para as cadências |
|---|---|
| **BPMN** (output da `/ec-bpmn`) | Em qual etapa do funil cada cadência é ativada e quem é o responsável |
| **Ferramentas Táticas** (output da `/ec-ferramentas`) | Quais canais estão disponíveis — WhatsApp, e-mail, ligação, automação |
| **KPIs e Rituais** (output da `/ec-kpis`) | SLAs definidos que determinam quando cada toque deve ocorrer |

### Bloco 3 — Contexto do Cliente Final (para personalizar o tom)
| Documento | O que entrega para as cadências |
|---|---|
| **Perfil do cliente ideal** (mencionado nas entrevistas ou no Plano de ROI) | Tom adequado — formal ou informal, técnico ou consultivo |
| **Exemplos de conversas reais com leads** (WhatsApp, e-mail) | Linguagem que já funciona com esse público — base para os templates |
| **Motivos de perda mais comuns** (do diagnóstico) | Qual objeção a cadência de fechamento precisa antecipar |

---

## Instruções para o modelo

Com os documentos em mãos, você deve:

1. **Identificar todas as situações de cadência** — os momentos do funil onde o lead pode parar de responder e um fluxo estruturado precisa ser ativado
2. **Construir uma régua específica para cada situação** — não uma cadência genérica para tudo
3. **Definir o canal correto por toque** — baseado nos canais que o cliente usa de verdade
4. **Escrever os templates de mensagem** — personalizados para o segmento, tom e perfil do cliente do cliente
5. **Definir o destino final de cada régua** — o que acontece quando a cadência se encerra sem resposta
6. **Adaptar o ritmo** ao ciclo de venda real do cliente — não impor ritmos genéricos

**Tom de escrita dos templates:** direto, humano e não invasivo. O cliente jurídico precisa de confiança. O cliente de varejo responde à urgência e ao benefício direto. O tom deve refletir o segmento do cliente.

**Princípio central:** cadência não é pressão — é presença estratégica no momento certo, no canal certo, com a mensagem certa.

---

## Estrutura obrigatória do documento

### Cabeçalho

```
# Fluxos de Cadência — [Nome do Cliente]

**Cliente:** [Nome do cliente]
**Data:** [Data]
**Responsável:** Denis Orosco | Consultor de Estratégia de Vendas Sênior
```

---

### Introdução — Mapa de Cadências

Antes das réguas, apresente uma visão geral de todas as cadências que serão documentadas e quando cada uma é ativada.

| Cadência | Quando é ativada | Responsável | Duração total |
|---|---|---|---|
| [Nome da cadência] | [Gatilho de ativação] | [Cargo] | [Total de dias] |

---

### Cadência [N] — [Nome da Situação]

*Repita esta estrutura para cada cadência identificada.*

**Quando ativar:** [Descrição precisa do gatilho — ex: "Lead qualificado que não respondeu após o primeiro contato"]
**Objetivo:** [O que essa cadência tenta alcançar]
**Responsável:** [Cargo ou papel]
**Destino final:** [O que acontece quando a régua termina sem conversão — ex: mover para Nutrição, registrar como Perdido]

| TOQUE | DIA | CANAL | MENSAGEM / AÇÃO |
|---|---|---|---|
| **[N]** | Dia [X] | [WhatsApp / Ligação / E-mail] | [Template da mensagem ou descrição da ação] |

> **Nota de urgência:** [Se aplicável — ex: "Para leads com risco de prazo ou prescrição, comprimir a régua para X horas entre cada toque"]

---

### Cadências mínimas obrigatórias

O documento deve cobrir ao menos as seguintes situações. Adapte os nomes, ritmos e canais ao processo real do cliente:

**1. Cadência de Qualificação — Novo Lead Sem Resposta**
Ativada quando o lead chega mas não responde ao primeiro contato.

**2. Cadência de Documentos — Lead Qualificado Sem Envio**
Ativada quando o lead passou pela qualificação mas não enviou os documentos ou informações solicitadas.

**3. Cadência de Fechamento — Proposta Enviada Sem Retorno**
Ativada quando a proposta ou contrato foi enviado mas não houve retorno ou assinatura.

**4. Cadência de Reativação — Lead Frio**
Ativada para leads que estagnaram há mais de [X] dias e estão em Nutrição. Reativação pontual e contextualizada.

**5. Cadência de Urgência — Lead com Prazo ou Risco Crítico**
Ativada quando o lead tem um prazo real (legal, comercial ou operacional) se aproximando. Ritmo comprimido.

Se o processo do cliente exigir outras situações de cadência além dessas, identifique-as a partir dos documentos e adicione réguas específicas.

---

### Regras Gerais da Cadência

Após todas as réguas, inclua as regras que governam o uso das cadências na operação.

| REGRA | DESCRIÇÃO |
|---|---|
| **Cadência mínima obrigatória** | [Ex: Proibido registrar perda por sem retorno sem executar ao menos N toques] |
| **Alternância de canais** | [Ex: Nunca fazer dois toques seguidos pelo mesmo canal] |
| **Horários permitidos** | [Ex: Ligações apenas entre Xh e Xh em dias úteis] |
| **Compressão por urgência** | [Ex: Prazo crítico comprime a régua para X horas entre toques] |
| **Registro obrigatório** | [Ex: Todo toque executado deve ser registrado no CRM com data, canal e resposta] |
| **Encerramento da régua** | [Ex: Ao final da régua sem resposta, mover para Nutrição — nunca para Perdido sem ao menos N tentativas] |

---

## Regras de qualidade do documento

- Os templates de mensagem devem ser escritos para serem usados diretamente — não rascunhos genéricos
- O tom dos templates deve refletir o segmento e o perfil do cliente do cliente — formal, informal, consultivo, direto
- O ritmo de cada cadência deve ser realista para o volume de leads do cliente — não propor 8 toques em 3 dias para uma operação com 100 leads simultâneos
- Cada cadência deve ter um destino final claro — onde o lead vai quando a régua termina
- As regras gerais devem cobrir os erros mais comuns identificados nas entrevistas — não regras genéricas
- O responsável por cada cadência deve ser o papel definido na estrutura organizacional real do cliente

---

## Como usar esta skill

1. Digite `/ec-cadencia`
2. Compartilhe os documentos na seguinte ordem:
   - **Obrigatórios:** transcrições das 3 entrevistas, Documento Geral de Análise
   - **Processo:** BPMN (`/ec-bpmn`), Ferramentas (`/ec-ferramentas`), KPIs (`/ec-kpis`)
   - **Tom e linguagem:** exemplos de conversas reais com leads, perfil do cliente ideal
3. Informe se há restrições de canal (ex: cliente não usa e-mail, prefere só WhatsApp)
4. Receba os Fluxos de Cadência completos com templates prontos para uso
