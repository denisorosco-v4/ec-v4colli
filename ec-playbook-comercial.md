# Skill: /ec-playbook-comercial
**Objetivo:** Consolidar os outputs das skills 6 a 13 em um único documento — o Playbook Comercial completo. Este é o documento-mãe da operação comercial do cliente: descreve como a operação deve funcionar, quem faz o quê, com quais ferramentas, em qual ritmo, com quais scripts e dentro de quais acordos. Qualquer pessoa que leia este Playbook deve ser capaz de executar o processo comercial com qualidade e padrão.

---

## Inputs esperados (obrigatórios — todos os 8 entregáveis anteriores)

| Skill | Entregável | O que contribui para o Playbook |
|---|---|---|
| `/ec-org-pessoas` | Estrutura Organizacional e Pessoas | Capítulo de organograma, fases de evolução e perfis de cadeira |
| `/ec-kpis` | Gestão, KPIs e Rituais | Capítulo de indicadores, metas e rituais de gestão |
| `/ec-ferramentas` | Ferramentas Táticas e Operação | Capítulo de stack digital, SOPs de ferramentas e rotina de prioridades |
| `/ec-bpmn` | BPMN — Processo Comercial | Capítulo do fluxo do processo comercial etapa a etapa |
| `/ec-cadencia` | Fluxos de Cadência | Capítulo das réguas de follow-up por situação |
| `/ec-cha` | Matriz CHA | Seção de perfil ideal por cadeira — integrada ao capítulo de pessoas |
| `/ec-script` | Scripts de Vendas e Follow-up | Capítulo de scripts por etapa do funil e por toque de cadência |
| `/ec-sla` | Acordo de Nível de Serviço | Capítulo de SLA — condições do lead, compromissos e prazos |

### Inputs de contexto (complementares)
| Documento | O que contribui |
|---|---|
| **Plano de ROI** | Dados para a capa, contexto do cliente e propósito do Playbook |
| **Documento Geral de Análise** (`/ec-analise`) | Base para a seção de Apresentação — o problema que o Playbook resolve |

---

## Instruções para o modelo

Com todos os entregáveis em mãos, você deve:

1. **Ler e absorver todos os documentos** — identificar inconsistências entre os entregáveis (nomes de cargos diferentes, SLAs conflitantes, ferramentas não alinhadas) e resolvê-las antes de escrever
2. **Organizar o conteúdo na estrutura do Playbook** — a ordem dos capítulos segue uma lógica narrativa: contexto → quem → como → com o quê → com quais métricas → com quais scripts → dentro de quais acordos
3. **Adicionar os textos de conexão** — introduções de capítulo, notas operacionais e transições que fazem o documento fluir como um guia, não como uma colagem de entregáveis
4. **Garantir consistência** — nomes de cargos, etapas do funil, ferramentas, metas e prazos devem ser idênticos em todos os capítulos
5. **Preservar o nível de detalhe** — o Playbook deve ser específico o suficiente para que qualquer contratação futura consiga executar a operação lendo apenas este documento
6. **Produzir o documento no formato especificado abaixo**

**Tom de escrita:** documento executivo e operacional ao mesmo tempo. A liderança lê para ter visão. O vendedor lê para saber o que fazer. Ambos devem encontrar o que precisam.

**Princípio central:** este documento substitui a dependência de pessoas. Se o gestor sair por 30 dias, a operação continua porque tudo está aqui.

---

## Estrutura obrigatória do documento

### Capa

```
PLAYBOOK DE VENDAS
ESTRUTURAÇÃO COMERCIAL

[Nome do Cliente]
[Cidade — UF]  |  Versão 1.0  |  [Ano]

Elaborado em parceria com V4 Company
```

---

### Sumário

Liste todos os capítulos numerados com título. Seguir a ordem abaixo.

---

### Capítulo 1 — Apresentação e Propósito do Playbook

**Fonte:** Plano de ROI + Documento Geral de Análise

Escreva 3 a 5 parágrafos respondendo:
- O que é este documento e para quem ele foi feito
- Qual era o problema que a operação comercial enfrentava antes da Estruturação Comercial (baseado no diagnóstico)
- O que este Playbook entrega — listar os capítulos e o que cada um resolve
- Como este documento deve ser usado no dia a dia e quem deve ter acesso a ele

---

### Capítulo 2 — Estrutura Organizacional e Pessoas

**Fonte:** output da `/ec-org-pessoas` + Matriz CHA (`/ec-cha`)

Inclua, nesta ordem:
1. Organograma Fase 1 (situação atual) com tabela de papéis e funções no funil
2. Organograma Fase 2 (estrutura de evolução) com gatilho de transição
3. Matriz CHA por cadeira — Conhecimentos, Habilidades e Atitudes exigidos
4. Análise de gaps de pessoas (resumida — o detalhamento está no entregável original)

---

### Capítulo 3 — Processo Comercial (BPMN Flow)

**Fonte:** output da `/ec-bpmn`

Inclua, nesta ordem:
1. Introdução do fluxo — quantas etapas, quem participa, onde começa e termina
2. Tabela do fluxo principal: ETAPA | RESPONSÁVEL | AÇÃO PRINCIPAL | GATILHO / AUTOMAÇÃO | DoD
3. Tabela de canais de entrada de leads
4. Tabela de motivos de saída do funil

---

### Capítulo 4 — Gestão, KPIs e Rituais

**Fonte:** output da `/ec-kpis`

Inclua, nesta ordem:
1. Diagnóstico de métricas atual (resumido)
2. KPIs oficiais por camada: Topo (volume/velocidade), Meio (processo/cadência), Fundo (conversão/resultado)
3. Metas e justificativa de cálculo
4. Rituais de gestão — Daily, Weekly, Monthly (frequência, pauta, participantes)
5. Dashboard sugerido

---

### Capítulo 5 — Ferramentas Táticas e Operação

**Fonte:** output da `/ec-ferramentas`

Inclua, nesta ordem:
1. Diagnóstico do arsenal atual (resumido)
2. Stack recomendada por categoria — CRM, comunicação, assinatura, automação, reuniões, gestão, inteligência
3. Rotina diária de prioridades (P1 a P5)
4. SOP de uso por ferramenta
5. Mapa de integração do fluxo
6. Custo total estimado da stack

---

### Capítulo 6 — Scripts e Fluxos de Cadência

**Fonte:** outputs da `/ec-script` + `/ec-cadencia`

Inclua, nesta ordem:
1. Mapa de cadências (visão geral — quando cada régua é ativada)
2. Scripts de etapa do funil: primeiro contato, qualificação, solicitação de documentos/informações, proposta e fechamento, onboarding pós-fechamento
3. Scripts integrados por cadência — para cada cadência, os scripts de cada toque
4. Scripts de quebra de objeção — por objeção real identificada
5. Regras gerais da cadência
6. Quadro comparativo: atendimento atual vs. padrão [Nome do Cliente]

---

### Capítulo 7 — Acordo de Nível de Serviço (SLA)

**Fonte:** output da `/ec-sla`

Inclua, nesta ordem:
1. Definição de MQL e SQL
2. Condições de chegada do lead (obrigatórias)
3. SLA de Marketing → Vendas (volume, prazo, qualidade)
4. SLA de Vendas → Marketing (resposta, cadência, feedback)
5. SLA de processo por etapa do funil
6. Protocolo de descumprimento por nível
7. Vigência e ciclo de revisão

---

### Capítulo 8 — Fases de Evolução do Departamento Comercial

**Fonte:** output da `/ec-org-pessoas` (seção de fases) + Plano de ROI

Consolide em um capítulo dedicado a evolução da operação:
- O que define Fase 1 e Fase 2
- O que precisa estar funcionando antes de ativar a Fase 2
- Checklist de prontidão para a Fase 2
- O que muda em cada dimensão ao avançar de fase: pessoas, ferramentas, KPIs, rituais, scripts

| | FASE 1 — FUNDAÇÃO | FASE 2 — ESCALA |
|---|---|---|
| **Quem** | | |
| **Processo** | | |
| **Ferramentas** | | |
| **KPIs** | | |
| **Rituais** | | |
| **Gatilho de transição** | — | |

---

### Rodapé do documento

```
Este é um documento vivo. Revisado a cada 90 dias com base nos dados reais do CRM.
Construído em parceria com V4 Company.
```

---

## Checklist de consistência antes de entregar

Antes de finalizar o documento, verificar:

- [ ] Os nomes de cargos são idênticos em todos os capítulos
- [ ] As etapas do funil no Capítulo 3 (BPMN) batem com as etapas citadas nos scripts (Capítulo 6) e no SLA (Capítulo 7)
- [ ] Os SLAs do Capítulo 7 são os mesmos que aparecem no BPMN e nos KPIs
- [ ] As ferramentas citadas nos SOPs (Capítulo 5) são as mesmas que aparecem nos gatilhos do BPMN (Capítulo 3)
- [ ] As metas de KPI (Capítulo 4) são coerentes com as metas do Plano de ROI
- [ ] O tom dos scripts (Capítulo 6) é consistente com o tom da marca definido na skill `/ec-script`
- [ ] A Fase 2 descrita no Capítulo 8 é coerente com o organograma do Capítulo 2

---

## Regras de qualidade do documento

- O Playbook deve ser autocontido — quem lê este documento não precisa consultar nenhum outro para executar a operação
- Introduções de capítulo são obrigatórias — cada capítulo começa com 2 a 4 linhas explicando o que será encontrado e por que importa
- Inconsistências entre entregáveis devem ser resolvidas pelo modelo, não repassadas para o documento — quando houver conflito, usar o dado mais recente e mais específico
- O nível de detalhe deve ser preservado — não resumir em excesso. O Playbook é um guia operacional, não um resumo executivo
- Seguir o padrão visual definido em `/ec-visual-style` para formatação de títulos, tabelas e destaques

---

## Como usar esta skill

1. Digite `/ec-playbook-comercial`
2. Compartilhe todos os entregáveis das skills 6 a 13, na ordem:
   - `/ec-org-pessoas` → Estrutura Organizacional e Pessoas
   - `/ec-kpis` → Gestão, KPIs e Rituais
   - `/ec-ferramentas` → Ferramentas Táticas e Operação
   - `/ec-bpmn` → Processo Comercial
   - `/ec-cadencia` → Fluxos de Cadência
   - `/ec-cha` → Matriz CHA
   - `/ec-script` → Scripts de Vendas e Follow-up
   - `/ec-sla` → Acordo de Nível de Serviço
3. Compartilhe também o Plano de ROI e o Documento Geral de Análise para o contexto de abertura
4. Receba o Playbook Comercial completo — o documento-mãe da operação comercial do cliente
