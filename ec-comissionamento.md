# Skill: /ec-comissionamento
**Objetivo:** Produzir a Política de Comissionamento oficial da operação comercial — um documento que define como cada cadeira comercial é remunerada variável, com base nas metas de KPI definidas, no modelo de negócio do cliente e nas melhores práticas do mercado pesquisadas. A política deve ser justa, clara, motivadora e alinhada com os resultados que a empresa precisa alcançar.

---

## Inputs esperados

### Bloco 1 — Financeiro e Metas (obrigatório)
| Documento | O que entrega para o comissionamento |
|---|---|
| **Plano de ROI** | Ticket médio, margem de contribuição, meta de faturamento, CAC — base para calcular o teto de comissão viável |
| **KPIs e Rituais** (output da `/ec-kpis`) | Metas oficiais por indicador — as metas de comissão devem ser as mesmas metas de KPI |
| **Transcrição do Kickoff** | Como o comissionamento funciona hoje, o que o gestor declara pagar, o que motiva o time |
| **Transcrição da entrevista com o gestor** | Visão da liderança sobre remuneração variável, o que ele acha que funciona e o que não funciona |

### Bloco 2 — Pessoas e Cargos
| Documento | O que entrega para o comissionamento |
|---|---|
| **Estrutura Organizacional e Pessoas** (output da `/ec-org-pessoas`) | Quais cadeiras existem — cada cadeira tem uma política de comissão própria |
| **Transcrição da entrevista com o top performer** | O que motiva o melhor vendedor, qual é sua percepção sobre remuneração e reconhecimento |
| **Transcrição da entrevista com o bottom performer** | O que desmotiva, se a política atual é percebida como justa ou injusta |
| **Documento Geral de Análise** (output da `/ec-analise`) | Gargalos relacionados a pessoas — se desmotivação ou rotatividade aparecem como problema |

---

## Instruções para o modelo

### Fase 1 — Pesquisa de Mercado

Antes de propor qualquer estrutura, pesquise na internet:
- Benchmarks de comissionamento para o segmento do cliente (ex: comissão de SDR em SaaS B2B, comissão de vendedor em varejo, comissão de closer jurídico)
- Modelos de comissionamento mais eficazes para o tipo de venda (consultiva, transacional, recorrente, success fee)
- Boas práticas de aceleradores, floor e ceiling para o porte da operação

### Fase 2 — Cálculo de Viabilidade

Com base no Plano de ROI:
1. Calcular o percentual máximo viável de comissão sobre a receita (sem comprometer a margem)
2. Verificar se a meta de faturamento é atingível com a estrutura de comissão proposta
3. Simular o ganho variável esperado do vendedor se atingir 80%, 100% e 120% da meta

### Fase 3 — Construção da Política

Montar a política respeitando:
- Uma política por cadeira (SDR e Closer têm regras diferentes)
- Metas baseadas nos KPIs oficiais definidos na `/ec-kpis`
- Regras claras de quando a comissão é paga
- Aceleradores para quem supera a meta
- Regras de chargeback quando aplicável

---

## Estrutura obrigatória do documento

### Cabeçalho

```
# Política de Comissionamento — [Nome do Cliente]

**Cliente:** [Nome do cliente]
**Data:** [Data]
**Versão:** 1.0
**Responsável:** Denis Orosco | Consultor de Estratégia de Vendas Sênior
**Vigência:** [Data de início] — revisão a cada 6 meses
```

---

### Seção 1 — Princípios da Política

Liste de 3 a 5 princípios que governam a política de comissionamento deste cliente. Devem ser específicos para o modelo de negócio — não frases genéricas.

Exemplos de princípios:
- "A comissão é paga sobre receita efetivamente recebida — não sobre contrato assinado"
- "Quem passa da meta recebe mais proporcionalmente — não apenas linearmente"
- "A política é pública e conhecida por todos — sem negociações individuais fora deste documento"

---

### Seção 2 — Estrutura de Remuneração por Cadeira

Para cada cadeira comercial definida na `/ec-org-pessoas`, apresente a estrutura completa de remuneração.

#### Cadeira: [Nome do Cargo]

| Campo | Definição |
|---|---|
| **Remuneração fixa** | [Salário base — se aplicável. Ou "Success fee — sem fixo"] |
| **Modelo de comissão** | [% sobre receita / valor fixo por contrato / success fee / outro] |
| **Base de cálculo** | [Sobre o quê incide a comissão: receita bruta, receita líquida, margem, valor do contrato] |
| **Meta de referência** | [Meta de KPI que define 100% da comissão — ex: X contratos/mês ou R$X em receita] |
| **Comissão a 100% da meta** | [Valor ou % que o profissional recebe ao atingir exatamente a meta] |
| **Gatilho mínimo (floor)** | [Performance mínima para ter direito à comissão variável — ex: acima de 70% da meta] |
| **Acelerador** | [O que acontece ao superar a meta — ex: acima de 100%: comissão dobra no excedente] |
| **Teto (ceiling)** | [Se existe um teto de comissão — e por quê] |
| **Quando é pago** | [Momento do pagamento: assinatura do contrato / primeiro pagamento / pagamento integral] |
| **Chargeback** | [Regra de devolução se o cliente cancelar ou não pagar dentro de X dias] |

---

#### Tabela de Simulação — [Nome do Cargo]

| Cenário | Performance | Receita gerada | Comissão |
|---|---|---|---|
| **Abaixo do floor** | [Ex: < 70% da meta] | R$ [valor] | R$ 0 |
| **Mínimo viável** | [Ex: 70% da meta] | R$ [valor] | R$ [valor] |
| **Meta atingida** | 100% da meta | R$ [valor] | R$ [valor] |
| **Superação moderada** | [Ex: 120% da meta] | R$ [valor] | R$ [valor] (acelerador) |
| **Superação forte** | [Ex: 150% da meta] | R$ [valor] | R$ [valor] (acelerador máximo) |

---

### Seção 3 — Bonificações Especiais

Defina bonificações pontuais que complementam a comissão padrão.

| Bonificação | Critério | Valor | Frequência |
|---|---|---|---|
| **Bônus de consistência** | [Ex: atingir a meta por 3 meses consecutivos] | R$ [valor] | [Trimestral] |
| **Bônus de indicação (MGM)** | [Ex: indicação que converte em cliente] | R$ [valor] por indicação convertida | Por evento |
| **Bônus de superação de time** | [Ex: time atinge meta coletiva do mês] | R$ [valor] por pessoa | Mensal |
| [Adicionar outras bonificações identificadas como relevantes para o cliente] | | | |

---

### Seção 4 — Regras Gerais e Proteções

| REGRA | DESCRIÇÃO |
|---|---|
| **Transparência** | A política é pública. Todos os membros do time comercial têm acesso a este documento |
| **Previsibilidade** | O vendedor deve conseguir calcular sua comissão esperada a qualquer momento do mês, sem depender do gestor |
| **Prazo de pagamento** | Comissões são pagas até o [dia X] do mês seguinte ao fato gerador |
| **Contestação** | O profissional tem até [X dias] após o recebimento do contracheque para contestar um valor |
| **Alteração da política** | Mudanças na política exigem aviso prévio de [X dias] e não se aplicam retroativamente |
| **Desligamento** | Em caso de desligamento, comissões de contratos já assinados e pagos são pagas normalmente |

---

### Seção 5 — Benchmark e Justificativa

Apresente os benchmarks pesquisados e como eles influenciaram a política proposta.

| Referência de mercado | Modelo praticado | Como influenciou a proposta |
|---|---|---|
| [Segmento / tipo de venda similar] | [Modelo de comissão praticado] | [O que foi adaptado para o cliente] |

Inclua uma nota de contexto: por que a política proposta é adequada ao momento atual do cliente (Fase 1) e o que deve ser revisado quando a operação escalar para a Fase 2.

---

## Regras de qualidade do documento

- Toda comissão deve ter simulação de ganho — o vendedor precisa visualizar o que vai ganhar antes de aceitar trabalhar pelo modelo
- O cálculo de viabilidade é obrigatório — a política deve ser sustentável para a margem do cliente
- Floor e acelerador são obrigatórios — sem floor, a empresa paga comissão para quem não performa; sem acelerador, quem supera a meta não tem incentivo para continuar
- Regras de chargeback devem ser claras e justas — chargeback abusivo desmotiva; ausência de chargeback expõe a empresa
- A política deve ser escrita para ser lida pelo vendedor, não pelo contador — linguagem clara, exemplos numéricos concretos

---

## Como usar esta skill

1. Digite `/ec-comissionamento`
2. Compartilhe os documentos na seguinte ordem:
   - **Obrigatórios:** Plano de ROI, KPIs (`/ec-kpis`), Estrutura Organizacional (`/ec-org-pessoas`), entrevistas com gestor e vendedores
   - **Complementar:** Documento de Análise
3. O modelo pesquisa benchmarks de mercado para o segmento do cliente antes de propor a estrutura
4. Receba a Política de Comissionamento completa com simulações de ganho por cenário
