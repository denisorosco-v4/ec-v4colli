---
name: ec-bpmn
description: Mapear e documentar o processo comercial completo do cliente no formato BPMN — do primeiro contato ao onboarding do cliente. O documento define cada etapa, quem executa, a ação principal, o gatilho de automação e o critério de conclusão (DoD), além dos canais de entrada de leads.
---

# Skill: /ec-bpmn
**Objetivo:** Mapear e documentar o processo comercial completo do cliente no formato BPMN — do primeiro contato ao onboarding do cliente. O documento define cada etapa, quem executa, a ação principal, o gatilho de automação e o critério de conclusão (DoD), além dos canais de entrada de leads.

---

## Inputs esperados

### Bloco 1 — Contexto do Processo (obrigatório)
| Documento | O que entrega para o mapeamento |
|---|---|
| **Transcrição do Kickoff** | Descrição inicial do processo comercial atual na visão do gestor |
| **Transcrição da entrevista com o gestor** | Como o processo é conduzido, onde trava, quais etapas existem |
| **Transcrição da entrevista com o top performer** | Como o processo funciona na prática — o que o melhor vendedor faz em cada etapa |
| **Transcrição da entrevista com o bottom performer** | Onde o processo quebra na prática |
| **Documento Geral de Análise** (output da `/ec-analise`) | Gargalos identificados — o que o novo processo precisa resolver |

### Bloco 2 — Estrutura e Ferramentas (para encaixar o processo na operação)
| Documento | O que entrega para o mapeamento |
|---|---|
| **Estrutura Organizacional e Pessoas** (output da `/ec-org-pessoas`) | Quem é o responsável por cada etapa — Fase 1 e Fase 2 |
| **KPIs e Rituais** (output da `/ec-kpis`) | SLAs de cada etapa e critérios de performance |
| **Ferramentas Táticas** (output da `/ec-ferramentas`) | Qual ferramenta suporta cada etapa do processo |

### Bloco 3 — Processo Atual (se existir)
| Documento | O que entrega para o mapeamento |
|---|---|
| **Processo atual documentado** (fluxograma, anotações) | Ponto de partida — o que existe e o que precisa ser redesenhado |
| **Exemplos de conversas reais com leads** | Valida o que o gestor descreveu — o que acontece de verdade |

---

## Dados Prioritários e Benchmark Automático

> A skill precisa entender como a venda acontece hoje antes de desenhar o novo processo. Se não houver entrevistas ou processo documentado, execute o protocolo abaixo.

**Se não houver entrevistas ou processo atual documentado — pergunte:**
1. Como uma venda acontece hoje, do início ao fim — mesmo que de forma informal?
2. Quem recebe o lead primeiro?
3. O que acontece nos primeiros minutos/horas após o lead chegar?
4. Como o lead é qualificado? Existe algum critério, mesmo que informal?
5. Como é apresentado o produto, serviço ou proposta?
6. Como é feito o fechamento? Existe contrato formal?
7. O que acontece depois que o cliente fecha? Quem cuida do onboarding?

**Para o que não for respondido, pesquise na internet:**
- BPMN e fluxo de processo padrão de mercado para o segmento e modelo de venda do cliente
- Etapas mais comuns e melhores práticas de processo para o tipo de venda (consultiva, transacional, recorrente)

> ⚠️ Toda informação construída via benchmark deve ser sinalizada no documento com: **Premissa de mercado — validar com o cliente.**

---

## Instruções para o modelo

Com os documentos em mãos, você deve:

1. **Reconstruir o processo real** — o que acontece hoje de fato, não o que o gestor acha que acontece
2. **Identificar as etapas do novo processo** — do primeiro contato ao onboarding, sem lacunas de responsabilidade
3. **Definir responsáveis por fase** — Fase 1 (estrutura atual) e Fase 2 (estrutura escalada), quando aplicável
4. **Identificar automações reais** — apenas o que as ferramentas definidas na `/ec-ferramentas` permitem executar
5. **Documentar os canais de entrada** com o papel de cada um na operação
6. **Produzir o documento no formato especificado abaixo**

**Tom de escrita:** Técnico e direto. Cada campo deve ser claro o suficiente para que qualquer pessoa da operação execute sem ambiguidade.

**Princípio central:** O processo deve funcionar mesmo quando o vendedor mais experiente estiver ausente.

---

## Estrutura obrigatória do documento

### Cabeçalho

```
# Processo Comercial — BPMN Flow — [Nome do Cliente]

**Cliente:** [Nome do cliente]
**Data:** [Data]
**Responsável:** Denis Orosco | Consultor de Estratégia de Vendas Sênior
```

---

### Seção 1 — Fluxo do Processo Comercial

Documente cada etapa do processo em ordem sequencial. Para cada etapa, preencha todas as colunas. O responsável deve indicar quem executa na Fase 1 e, quando diferente, na Fase 2.

| ETAPA | RESPONSÁVEL | AÇÃO PRINCIPAL | GATILHO / AUTOMAÇÃO | DoD — CRITÉRIO DE CONCLUSÃO |
|---|---|---|---|---|
| **1. [Nome da etapa]** | [Nome/cargo] (F1) [Nome/cargo] (F2) | [O que deve ser feito — específico e executável] | [O que inicia esta etapa ou o que dispara automaticamente] | [O que precisa ser verdade para a etapa ser considerada concluída e o processo avançar] |
| **2. [Nome da etapa]** | | | | |
| **3. [Nome da etapa]** | | | | |
| *(continuar para todas as etapas do processo)* | | | | |

**Etapas mínimas que o fluxo deve cobrir:**
1. Recebimento e registro do lead
2. Qualificação do lead
3. Coleta de informações ou documentos
4. Apresentação de proposta ou consulta técnica
5. Fechamento e contrato
6. Onboarding do cliente

Adicione, remova ou renomeie etapas conforme o processo real do cliente.

---

### Seção 2 — Canais de Entrada de Leads

Documente todos os canais pelos quais leads chegam à operação, o papel de cada canal e o padrão de resposta esperado.

| Canal | Papel na operação | Padrão de resposta | Prioridade |
|---|---|---|---|
| [Canal principal — ex: WhatsApp] | [Como os leads chegam por esse canal] | [Tempo máximo de resposta] | [Principal / Secundário / Complementar] |
| [Canal 2] | | | |
| [Canal 3] | | | |
| *(continuar para todos os canais identificados)* | | | |

---

### Seção 3 — Motivos de Saída do Funil

Documente os motivos pelos quais um lead pode sair do processo sem se tornar cliente. Cada motivo deve ter um protocolo de encerramento e registro no CRM.

| Motivo de saída | Em qual etapa ocorre | Protocolo de encerramento | Registro no CRM |
|---|---|---|---|
| [Fora do escopo] | [Etapa de qualificação] | [O que fazer e o que comunicar ao lead] | [Tag / motivo de perda] |
| [Sem retorno após cadência completa] | [Qualquer etapa] | [Protocolo] | [Tag] |
| [Desistência voluntária] | [Qualquer etapa] | [Protocolo] | [Tag] |
| *(adicionar todos os motivos identificados no diagnóstico)* | | | |

---

## Regras de qualidade do documento

- O DoD de cada etapa deve ser verificável — ou está concluída ou não está. Nunca subjetivo
- Cada etapa deve ter um responsável definido — sem dono, a etapa não existe na prática
- Os gatilhos automáticos só devem ser incluídos para ferramentas que o cliente vai de fato implementar
- O responsável deve refletir a estrutura real — Fase 1 com o time atual, Fase 2 com a estrutura projetada
- Os canais devem ser os canais reais do cliente — não incluir canais que ele não usa
- O documento será entregue ao cliente e usado como guia operacional — clareza acima de tudo

---

## Como usar esta skill

1. Digite `/ec-bpmn`
2. Compartilhe os documentos na seguinte ordem:
   - **Obrigatórios:** transcrições das 3 entrevistas, Documento Geral de Análise
   - **Estrutura:** Organograma e Pessoas (`/ec-org-pessoas`), KPIs (`/ec-kpis`), Ferramentas (`/ec-ferramentas`)
   - **Processo atual:** documentação existente, exemplos de conversas reais com leads
3. Receba o documento BPMN completo no formato do Playbook Comercial
