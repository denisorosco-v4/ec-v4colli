# Skill: /ec-stack
**Objetivo:** Produzir um estudo comparativo de seleção de CRM para a operação comercial do cliente — cobrindo CRM Sales e, quando houver operação de marketing estruturada, CRM Marketing. Para cada categoria, apresentar 3 opções avaliadas com base no perfil real do negócio, benchmarks de mercado pesquisados e critérios ponderados. O output orienta a decisão de compra com clareza: qual escolher, por quê, e o que esperar de cada uma.

---

## Inputs esperados

| Documento | O que contribui para o estudo |
|---|---|
| **Plano de ROI** | Porte da operação, segmento, volume esperado de leads, ticket médio, meta de faturamento, budget disponível para tecnologia |
| **Transcrição do Kickoff** | CRMs já tentados, resistências do time, canais de comunicação usados (WhatsApp, e-mail, etc.), preferências do gestor |
| **Transcrição da entrevista com o gestor** | Visão sobre CRM, o que funcionou e o que não funcionou, integrações que considera essenciais |
| **Documento Geral de Análise** (`/ec-analise`) | Gargalos identificados que um CRM deve resolver, nível de maturidade da operação |
| **BPMN** (`/ec-bpmn`) | Etapas do processo comercial — define quais funcionalidades do CRM são indispensáveis |
| **KPIs e Rituais** (`/ec-kpis`) | Indicadores que precisam ser rastreados no CRM — define quais relatórios são obrigatórios |
| **Estrutura Organizacional** (`/ec-org-pessoas`) | Quantas licenças, quais perfis de acesso, se há SDR e Closer separados |
| **Ferramentas Táticas** (`/ec-ferramentas`, se disponível) | O que já foi recomendado — evitar contradição com a stack existente |

---

## Instruções para o modelo

### Fase 1 — Construção do Perfil de Requisitos

Antes de pesquisar qualquer ferramenta, monte o perfil do cliente para seleção de CRM com base nos documentos fornecidos:

**Dimensões obrigatórias do perfil:**

| Dimensão | Descrição |
|---|---|
| **Segmento e modelo de venda** | B2B / B2C / Misto — venda consultiva, transacional ou recorrente |
| **Volume de leads por mês** | Quantos leads entram na operação — define se o CRM precisa de automação pesada |
| **Ciclo médio de venda** | Curto (< 15 dias) / Médio (15–60 dias) / Longo (> 60 dias) — define complexidade do pipeline |
| **Ticket médio** | Baixo / Médio / Alto — influencia ROI da ferramenta e disposição de investimento |
| **Número de usuários** | Quantas licenças precisam ser contratadas imediatamente (Fase 1) e no futuro (Fase 2) |
| **Perfis de usuário** | SDR, Closer, Gestor — cada perfil tem necessidades diferentes no CRM |
| **Canais de comunicação** | WhatsApp, e-mail, telefone, Instagram — integração nativa é critério eliminatório |
| **Maturidade digital** | Time com baixa resistência a tecnologia ou que precisará de ferramenta simples |
| **Budget mensal disponível** | Faixa de investimento tolerável em tecnologia — extraída do Plano de ROI |
| **Há operação de marketing estruturada?** | Sim / Não — define se o CRM Marketing é necessário ou se o Sales já cobre |
| **Integrações obrigatórias** | Ferramentas que já existem e precisam se conectar ao novo CRM |
| **Histórico de CRM** | Já tentou algum? O que não funcionou e por quê? |

---

### Fase 2 — Pesquisa de Mercado

Com o perfil construído, pesquise na internet:

- Principais CRMs Sales disponíveis para o porte e segmento do cliente no mercado brasileiro
- Principais CRMs Marketing disponíveis (se aplicável)
- Avaliações recentes em G2, Capterra, GetApp e fóruns de profissionais de vendas brasileiros
- Preços atualizados dos planos mais adequados ao perfil do cliente
- Integrações nativas com WhatsApp Business API, RD Station, Google Workspace, e ferramentas da stack brasileira
- Casos de uso de empresas com perfil semelhante ao cliente

**Critério de seleção das 3 opções:**
- Cobrir 3 posicionamentos distintos: entrada acessível / intermediário maduro / avançado robusto
- Pelo menos 1 opção deve ser forte no mercado brasileiro (suporte em português, parceiros locais)
- Eliminar CRMs que não atendam critérios eliminatórios do perfil do cliente (ex: sem integração WhatsApp se for canal principal)

---

### Fase 3 — Avaliação das 3 Opções

Para cada CRM avaliado (Sales e Marketing), produza uma ficha completa seguindo a estrutura abaixo.

**Critérios de avaliação com peso:**

| Critério | Peso | O que avalia |
|---|---|---|
| **Aderência ao processo** | 30% | O CRM suporta o BPMN e os KPIs definidos sem customização excessiva |
| **Facilidade de adoção** | 20% | Curva de aprendizado para o perfil do time do cliente |
| **Custo-benefício** | 20% | Relação entre o que entrega e o que custa no plano adequado |
| **Integrações nativas** | 15% | Conecta-se com os canais e ferramentas críticas do cliente |
| **Suporte e ecossistema local** | 10% | Suporte em português, parceiros no Brasil, comunidade ativa |
| **Escalabilidade** | 5% | Acompanha o crescimento para a Fase 2 sem migração forçada |

Pontue cada critério de 1 a 5 e calcule a nota ponderada final.

---

## Estrutura obrigatória do documento

### Cabeçalho

```
# Estudo de Seleção de CRM — [Nome do Cliente]

**Cliente:** [Nome do cliente]
**Data:** [Data]
**Versão:** 1.0
**Responsável:** Denis Orosco | Consultor de Estratégia de Vendas Sênior
```

---

### Seção 1 — Perfil de Requisitos

Apresente o perfil construído na Fase 1 em formato de tabela compacta.

Em seguida, liste os **critérios eliminatórios** — funcionalidades sem as quais nenhum CRM será considerado para este cliente. Exemplos:
- Integração nativa com WhatsApp Business (se for o canal principal)
- Suporte em português
- Plano disponível dentro do budget definido
- Mobile app funcional (se o time vende em campo)

E os **critérios preferenciais** — funcionalidades que pesam na decisão mas não eliminam.

---

### Seção 2 — CRM Sales: 3 Opções Avaliadas

#### Opção [1/2/3] — [Nome do CRM]

| Campo | Detalhe |
|---|---|
| **Posicionamento** | [Como o mercado posiciona essa ferramenta — para quem ela foi feita] |
| **Perfil ideal de empresa** | [Porte, segmento, modelo de venda para o qual é mais indicado] |
| **Plano recomendado para este cliente** | [Nome do plano + o que inclui] |
| **Custo mensal estimado** | [R$ X por usuário/mês × N usuários = R$ X total/mês] |

**Funcionalidades relevantes para este cliente:**
- [Funcionalidade 1] — [Como resolve um problema específico do BPMN ou dos KPIs do cliente]
- [Funcionalidade 2] — [idem]
- [Funcionalidade 3] — [idem]

**Limitações relevantes para este cliente:**
- [Limitação 1] — [Impacto real na operação do cliente]
- [Limitação 2] — [idem]

**Integrações nativas disponíveis:**
- [WhatsApp: Sim / Não / Via API / Via Zapier]
- [E-mail: Sim / Não / qual provider]
- [Google Workspace: Sim / Não]
- [Outras relevantes para o cliente]

**Avaliação por critério:**

| Critério | Peso | Nota (1-5) | Nota ponderada |
|---|---|---|---|
| Aderência ao processo | 30% | [X] | [X×0,30] |
| Facilidade de adoção | 20% | [X] | [X×0,20] |
| Custo-benefício | 20% | [X] | [X×0,20] |
| Integrações nativas | 15% | [X] | [X×0,15] |
| Suporte e ecossistema local | 10% | [X] | [X×0,10] |
| Escalabilidade | 5% | [X] | [X×0,05] |
| **TOTAL** | 100% | | **[Soma]** |

**Síntese:** [2 a 3 linhas — para quem é ideal, por que está ou não na recomendação final]

---

*(Repetir a estrutura para as Opções 2 e 3)*

---

### Seção 3 — Tabela Comparativa — CRM Sales

| Critério | [CRM 1] | [CRM 2] | [CRM 3] |
|---|---|---|---|
| **Posicionamento** | | | |
| **Plano recomendado** | | | |
| **Custo/mês (N usuários)** | | | |
| **Pipeline visual** | ✓ / ✗ / Parcial | | |
| **Integração WhatsApp** | ✓ / ✗ / Via API | | |
| **Integração e-mail** | ✓ / ✗ | | |
| **Automação de tarefas** | ✓ / ✗ / Parcial | | |
| **Relatórios de funil** | ✓ / ✗ / Parcial | | |
| **App mobile** | ✓ / ✗ | | |
| **Suporte em português** | ✓ / ✗ | | |
| **Curva de aprendizado** | Baixa / Média / Alta | | |
| **Nota ponderada final** | **[X,X]** | **[X,X]** | **[X,X]** |

---

### Seção 4 — CRM Marketing: 3 Opções Avaliadas *(incluir apenas se o cliente tiver operação de marketing estruturada)*

> **Nota de avaliação:** Esta seção só é produzida quando o cliente possui operação de marketing com geração de leads própria — equipe dedicada, investimento em mídia paga, nutrição de leads automatizada ou base de contatos ativa para campanhas. Se o marketing for terceirizado ou inexistente, indicar aqui o motivo da omissão e recomendar quando contratar um CRM Marketing.

#### Opção [1/2/3] — [Nome do CRM Marketing]

*(Mesma estrutura da Seção 2, com critérios adaptados para marketing)*

**Funcionalidades relevantes avaliadas:**
- Criação de landing pages e formulários
- Automação de e-mail marketing (fluxos, segmentação, lead scoring)
- Nutrição de leads (drip campaigns)
- Integração com mídias pagas (Meta Ads, Google Ads)
- Relatórios de campanha e atribuição de receita
- Integração nativa com o CRM Sales recomendado

**Avaliação por critério:**

| Critério | Peso | Nota (1-5) | Nota ponderada |
|---|---|---|---|
| Aderência ao processo | 30% | [X] | [X×0,30] |
| Facilidade de adoção | 20% | [X] | [X×0,20] |
| Custo-benefício | 20% | [X] | [X×0,20] |
| Integração com CRM Sales | 15% | [X] | [X×0,15] |
| Suporte e ecossistema local | 10% | [X] | [X×0,10] |
| Escalabilidade | 5% | [X] | [X×0,05] |
| **TOTAL** | 100% | | **[Soma]** |

---

### Seção 5 — Tabela Comparativa — CRM Marketing *(se aplicável)*

*(Mesmo formato da Seção 3, com colunas relevantes para marketing)*

---

### Seção 6 — Recomendação Final

#### CRM Sales recomendado: [Nome]

**Por que esta é a escolha certa para [Nome do Cliente] agora:**
[3 a 5 linhas conectando o perfil de requisitos às vantagens específicas desta ferramenta — sem repetir o que já está na ficha]

**O que monitorar após a implementação:**
- [Sinal de que está funcionando — ex: "Pipeline 100% atualizado em até 24h após o contato"]
- [Sinal de alerta — ex: "Se o time abandonar o CRM após 30 dias, o problema não é a ferramenta — é onboarding"]

**Gatilho para migração:**
[Quando faz sentido revisar esta escolha — ex: "Ao atingir X usuários ou precisar de funcionalidade Y que esta ferramenta não entrega"]

---

#### CRM Marketing recomendado: [Nome] *(se aplicável)*

**Por que esta é a escolha certa para [Nome do Cliente] agora:**
[3 a 5 linhas]

**Integração com o CRM Sales recomendado:**
[Como os dois sistemas se conversam — passagem de lead, sincronização de dados, atribuição de conversão]

**Gatilho para contratar:**
[Se ainda não está pronto para o CRM Marketing — qual é o sinal de que o momento chegou: ex: "Quando gerar mais de X leads/mês de forma consistente"]

---

### Seção 7 — Próximos Passos de Implementação

| Ação | Responsável | Prazo sugerido |
|---|---|---|
| Contratar o plano recomendado do CRM Sales | Gestor | Semana 1 |
| Configurar o pipeline com as etapas do BPMN | Consultor V4 + Gestor | Semana 1–2 |
| Importar base de contatos e leads existentes | Gestor | Semana 2 |
| Treinamento do time no CRM | Gestor | Semana 2–3 |
| Definir regra de uso obrigatório (SOP) | Gestor | Semana 3 |
| Primeira revisão de uso e adoção | Consultor V4 | 30 dias após ativação |
| Contratar CRM Marketing (se aplicável) | Gestor | [Após critério de gatilho acima] |

---

## Regras de qualidade do documento

- Nenhuma opção avaliada pode ter sido escolhida por familiaridade ou popularidade genérica — a seleção deve ser justificada pelo perfil do cliente
- Os preços apresentados devem ser baseados em pesquisa real dos planos atuais das ferramentas — sinalizar com "(verificar plano atual)" quando o preço mudar frequentemente
- A nota ponderada deve ser calculada com base nos dados reais encontrados nas fichas — não atribuir notas de forma intuitiva sem justificativa
- Se o cliente já usa um CRM, avaliá-lo como uma das 3 opções e comparar honestamente — não recomendar troca sem razão técnica clara
- A seção de CRM Marketing só é incluída se houver evidência nos documentos de que existe ou existirá operação de marketing estruturada
- A recomendação final deve ser objetiva e direta — não apresentar "depende" como resposta. Fazer a escolha e justificá-la

---

## Como usar esta skill

1. Digite `/ec-stack`
2. Compartilhe os documentos na seguinte ordem:
   - **Obrigatórios:** Plano de ROI, transcrições das entrevistas (Kickoff + gestor), Documento de Análise
   - **Processo:** BPMN, KPIs, Estrutura Organizacional
   - **Contexto de stack:** output da `/ec-ferramentas` se disponível, lista de ferramentas atuais, CRM já usado (se houver)
3. Informe se há operação de marketing estruturada (para decidir se inclui CRM Marketing)
4. O modelo pesquisa o mercado, monta o perfil de requisitos e entrega o estudo completo com 3 opções avaliadas por categoria e recomendação final
