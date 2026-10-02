---
name: ec-poc
description: Orquestrar a execução completa de uma POC (Prova de Conceito) de Estruturação Comercial — da coleta de contexto até os 6 entregáveis operacionais. Esta skill conduz Claude passo a passo: identifica o cliente, consulta o NotebookLM, lê os arquivos da pasta de Inputs, e executa as skills `/ec-analise` → `/ec-playbook-comercial` → `/ec-bpmn` → `/ec-script` → `/ec-cadencia` → `/ec-cha`, salvando cada output na pasta de Output do cliente.
---

# Skill: /ec-poc

**Objetivo:** Orquestrar a execução completa de uma POC (Prova de Conceito) de Estruturação Comercial — da coleta de contexto até os 6 entregáveis operacionais. Esta skill conduz Claude passo a passo: identifica o cliente, consulta o NotebookLM, lê os arquivos da pasta de Inputs, e executa as skills `/ec-analise` → `/ec-playbook-comercial` → `/ec-bpmn` → `/ec-script` → `/ec-cadencia` → `/ec-cha`, salvando cada output na pasta de Output do cliente.

---

## Como usar esta skill

1. Digite `/ec-poc`
2. Responda com o nome do cliente quando solicitado
3. A partir daí, Claude executa todos os passos automaticamente — lendo, consultando e produzindo os entregáveis em sequência

---

## PASSO 1 — Identificação do Cliente

**Ação obrigatória antes de qualquer outra coisa:**

Perguntar ao usuário:

> "Qual cliente vamos rodar agora? Informe o nome exato como está na pasta `projetos/` — por exemplo: `Decorti`, `Freeway`, `Visoflex`."

Aguardar a resposta. A partir daqui, usar `[CLIENTE]` como variável substituída pelo nome informado.

**Caminhos de referência:**
- Inputs: `c:\Users\User\Desktop\Trabalho\projetos\[CLIENTE]\Inputs\`
- Output: `c:\Users\User\Desktop\Trabalho\projetos\[CLIENTE]\Output\`

---

## PASSO 2 — Consulta ao NotebookLM

Com o nome do cliente em mãos, usar as ferramentas MCP do NotebookLM para construir um briefing completo do contexto do cliente antes de tocar qualquer arquivo.

### 2.1 — Localizar o notebook do cliente

Usar `notebook_list` para listar todos os notebooks disponíveis. Identificar aquele cujo título contém o nome do cliente. Se houver mais de um, perguntar ao usuário qual usar.

### 2.2 — Descrever as fontes disponíveis

Usar `notebook_describe` para ver quais fontes estão carregadas no notebook do cliente. Registrar mentalmente quais documentos já existem.

### 2.3 — Executar as perguntas de contexto

Usar `notebook_query` para enviar as seguintes perguntas em sequência ao notebook do cliente. Registrar todas as respostas — elas formam o **Briefing de Contexto** que vai alimentar os próximos passos.

**Bloco A — Contexto do Negócio**
1. "Qual é o modelo de negócio do cliente? Como ele vende, para quem e por quê?"
2. "Qual é o faturamento atual ou estimado? Existe meta definida?"
3. "Quais são os principais produtos ou serviços? Qual o ticket médio?"
4. "Quais são os canais de aquisição de clientes hoje?"

**Bloco B — Estrutura Comercial Atual**
5. "Como é o time comercial hoje? Quem vende, quantas pessoas, quais os papéis?"
6. "Existe processo de vendas documentado? Como funciona na prática?"
7. "Qual CRM ou ferramenta de gestão de vendas é usada hoje?"
8. "Como é feito o follow-up com os leads atualmente?"

**Bloco C — Problemas e Oportunidades**
9. "Quais são os maiores problemas ou gargalos da operação comercial hoje?"
10. "O que o gestor mais quer resolver com a Estruturação Comercial?"
11. "Quais foram os principais achados das entrevistas com os vendedores?"
12. "Existe alguma restrição importante — cultural, orçamentária ou operacional — que deva orientar as soluções?"

**Bloco D — Demandas Específicas do Cliente**
13. "O cliente pediu algo específico durante as entrevistas ou no kickoff? Alguma solução que ele já tem em mente?"
14. "Quais são as metas de curto prazo (3-6 meses) que o cliente quer atingir?"
15. "Existe algum ponto de atenção que o consultor Denis Orosco levantou sobre este cliente?"

> 🛑 Se o notebook do cliente **não for encontrado** na lista do NotebookLM, **parar e perguntar ao usuário:**
>
> "Não encontrei um notebook para **[CLIENTE]** no NotebookLM. O que deseja fazer?
> 1. Informar o nome exato do notebook para eu buscar novamente
> 2. Pular a consulta ao NotebookLM e seguir direto com os arquivos da pasta Inputs
> 3. Criar um novo notebook agora antes de continuar"
>
> Aguardar a resposta do usuário antes de prosseguir. Não avançar para o Passo 3 sem esta confirmação.

Após coletar todas as respostas, consolidar em um **Briefing de Contexto** interno (não salvar em arquivo — usar como base de trabalho para os próximos passos).

---

## PASSO 3 — Leitura dos Arquivos de Input

Usar as ferramentas de arquivo para ler **todos os arquivos** disponíveis na pasta:

`c:\Users\User\Desktop\Trabalho\projetos\[CLIENTE]\Inputs\`

### 3.1 — Listar os arquivos disponíveis

Usar `Glob` com padrão `**/*` para listar todos os arquivos da pasta Inputs do cliente.

### 3.2 — Ler cada arquivo

Ler todos os arquivos encontrados — transcrições de entrevistas, plano de ROI, relatórios, planilhas, dados de faturamento, conversas com leads, qualquer documento disponível.

### 3.3 — Consolidar o contexto total

Após ler todos os arquivos, consolidar internamente:
- O que cada documento revela
- Contradições entre documentos (gestor vs. vendedor, planejado vs. real)
- Dados quantitativos disponíveis (faturamento, leads, conversão, ticket)
- Lacunas de informação (o que não foi coletado ainda)

> ⚠️ Se a pasta Inputs não existir ou estiver vazia, perguntar ao usuário se deseja continuar apenas com o contexto do NotebookLM ou se há arquivos para compartilhar antes de prosseguir.

---

## PASSO 4 — Produzir a `/ec-analise`

Com o Briefing de Contexto (NotebookLM) + todos os arquivos de Input absorvidos, executar a skill `/ec-analise` completa.

**Instruções de execução:**

Seguir rigorosamente a estrutura obrigatória da skill `/ec-analise`:
- Cabeçalho com nome do cliente, data e responsável (Denis Orosco)
- Seção 1 — Metodologia Aplicada
- Seção 2 — Matriz de Maturidade Comercial (4 frentes, nota 1-5, status, justificativa)
- Seção 3 — Análise Crítica por Pilar (Processos, Pessoas, Ferramentas)
- Seção 4 — Gap de Benchmarking
- Análise de Impacto Estratégico
- Seção 5 — Conclusão e Próximos Passos

**Premissas:**
- Toda constatação deve ser baseada em evidência dos inputs ou do NotebookLM
- O que não foi confirmado deve ser sinalizado com ⚠️ "Premissa de mercado — validar com o cliente"
- Cruzar o que o gestor disse com o que os vendedores disseram — divergências são gargalos

**Salvar o output como:**
`c:\Users\User\Desktop\Trabalho\projetos\[CLIENTE]\Output\analise_[CLIENTE].md`

---

## PASSO 5 — Produzir a `/ec-playbook-comercial`

Com o output da `/ec-analise` + todos os inputs disponíveis, executar a skill `/ec-playbook-comercial` completa.

**Instruções de execução:**

Seguir a estrutura obrigatória da skill `/ec-playbook-comercial`:
- Capa com nome do cliente, versão e parceria V4 Company
- Sumário completo
- Capítulo 1 — Apresentação e Propósito do Playbook (baseado no diagnóstico)
- Capítulo 2 — Estrutura Organizacional e Pessoas
- Capítulo 3 — Processo Comercial (BPMN Flow)
- Capítulo 4 — Gestão, KPIs e Rituais
- Capítulo 5 — Ferramentas Táticas e Operação
- Capítulo 6 — Scripts e Fluxos de Cadência
- Capítulo 7 — Acordo de Nível de Serviço (SLA)
- Capítulo 8 — Fases de Evolução do Departamento Comercial

**Premissas:**
- Este documento deve resolver os gargalos identificados na `/ec-analise`
- Cada decisão de estrutura deve ser justificada pelo diagnóstico
- Onde faltar output de skill intermediária (ex: `/ec-org-pessoas`, `/ec-kpis`), construir diretamente a partir dos inputs disponíveis com benchmark
- Sinalizar seções construídas com benchmark: ⚠️ "Premissa de mercado — validar com o cliente"

**Salvar o output como:**
`c:\Users\User\Desktop\Trabalho\projetos\[CLIENTE]\Output\playbook_comercial_[CLIENTE].md`

---

## PASSO 6 — Produzir o `/ec-bpmn`

Com o Playbook Comercial + Análise + inputs disponíveis, executar a skill `/ec-bpmn` completa.

**Instruções de execução:**

Seguir a estrutura obrigatória da skill `/ec-bpmn`:
- Cabeçalho com nome do cliente, data e responsável
- Seção 1 — Fluxo do Processo Comercial (tabela ETAPA | RESPONSÁVEL | AÇÃO PRINCIPAL | GATILHO/AUTOMAÇÃO | DoD)
- Seção 2 — Canais de Entrada de Leads
- Seção 3 — Motivos de Saída do Funil

**Premissas:**
- O processo deve refletir o que foi definido no Playbook Comercial — não recriar do zero
- As etapas devem cobrir desde o recebimento do lead até o onboarding
- Os responsáveis devem refletir a estrutura de Fase 1 e Fase 2 definida
- Automações apenas para ferramentas que o cliente vai de fato implementar

**Salvar o output como:**
`c:\Users\User\Desktop\Trabalho\projetos\[CLIENTE]\Output\bpmn_[CLIENTE].md`

---

## PASSO 7 — Produzir o `/ec-script`

Com o BPMN + Playbook Comercial + inputs disponíveis, executar a skill `/ec-script` completa.

**Instruções de execução:**

Seguir a estrutura obrigatória da skill `/ec-script`:
- Scripts por etapa do funil (primeiro contato, qualificação, proposta, fechamento, onboarding)
- Scripts de follow-up integrados às cadências
- Scripts de quebra de objeção baseados nas objeções reais identificadas nas entrevistas
- Tom adequado ao segmento e perfil do cliente final

**Premissas:**
- Usar as objeções reais coletadas nas entrevistas
- O tom dos scripts deve refletir como o cliente realmente se comunica com seus leads
- Scripts devem ser prontos para uso — não rascunhos genéricos

**Salvar o output como:**
`c:\Users\User\Desktop\Trabalho\projetos\[CLIENTE]\Output\scripts_[CLIENTE].md`

---

## PASSO 8 — Produzir o `/ec-cadencia`

Com o BPMN + Scripts + Playbook Comercial + inputs disponíveis, executar a skill `/ec-cadencia` completa.

**Instruções de execução:**

Seguir a estrutura obrigatória da skill `/ec-cadencia`:
- Mapa de Cadências (visão geral com gatilhos)
- Cadências obrigatórias: Qualificação, Documentos, Fechamento, Reativação, Urgência
- Cadências adicionais identificadas no processo do cliente
- Regras Gerais da Cadência

**Premissas:**
- O ritmo de cada cadência deve ser realista para o volume de leads do cliente
- Cada cadência deve ter gatilho claro, responsável e destino final
- Os templates de mensagem devem usar os scripts produzidos no Passo 7

**Salvar o output como:**
`c:\Users\User\Desktop\Trabalho\projetos\[CLIENTE]\Output\cadencias_[CLIENTE].md`

---

## PASSO 9 — Produzir o `/ec-cha`

Com o Playbook Comercial + Análise + inputs disponíveis, executar a skill `/ec-cha` completa.

**Instruções de execução:**

Produzir a Matriz CHA (Conhecimentos, Habilidades, Atitudes) para cada cadeira da operação comercial:
- CHA por cargo definido na estrutura organizacional (Fase 1 e Fase 2)
- Nível de exigência por competência (Básico / Intermediário / Avançado)
- Identificação dos gaps do time atual vs. perfil ideal
- Critérios de seleção para novas contratações

**Premissas:**
- O que o top performer faz e o bottom não faz é insumo direto para a Matriz CHA
- O perfil ideal deve refletir o que a operação descrita no Playbook demanda
- Gaps devem ser conectados a ações de desenvolvimento ou contratação

**Salvar o output como:**
`c:\Users\User\Desktop\Trabalho\projetos\[CLIENTE]\Output\cha_[CLIENTE].md`

---

## PASSO 10 — Confirmação Final

Após completar todos os 6 entregáveis, apresentar ao usuário:

```
✅ POC de Estruturação Comercial — [CLIENTE] concluída

Entregáveis produzidos em projetos/[CLIENTE]/Output/:

1. analise_[CLIENTE].md         → Diagnóstico Situacional de Vendas
2. playbook_comercial_[CLIENTE].md → Playbook Comercial Completo
3. bpmn_[CLIENTE].md            → Processo Comercial (BPMN Flow)
4. scripts_[CLIENTE].md         → Scripts de Vendas e Follow-up
5. cadencias_[CLIENTE].md       → Fluxos de Cadência
6. cha_[CLIENTE].md             → Matriz CHA por Cadeira

Próximos passos sugeridos:
- Revisar o Diagnóstico com o cliente antes de validar o Playbook
- Apresentar o BPMN ao time de vendas para alinhar o novo processo
- Usar os Scripts e Cadências no onboarding do CRM (/ec-crm)
- Executar /ec-entrega-processos para gerar a apresentação HTML do Playbook
```

---

## Regras gerais de execução

1. **Nunca inventar informação** — qualquer dado não confirmado deve ser sinalizado com ⚠️
2. **Cada entregável deve ser salvo imediatamente** após ser produzido — não acumular tudo para salvar no final
3. **A sequência é obrigatória** — cada entregável alimenta o próximo. Não pular passos
4. **Inconsistências entre fontes** (NotebookLM vs. arquivos) devem ser resolvidas usando o dado mais específico e recente — nunca repassadas para o documento
5. **Se um passo travar por falta de dado**, usar benchmark de mercado com o sinal ⚠️ e seguir em frente — não interromper a execução
6. **Todos os documentos usam o padrão visual** definido em `/ec-visual-style`
7. Sempre responder em português brasileiro
