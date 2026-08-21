---
name: ec-cha
description: Para cada cadeira comercial definida na Estrutura Organizacional, pesquisar e definir o CHA ideal — Conhecimentos exigidos, Habilidades exigidas e Atitudes exigidas — com base em melhores práticas de mercado pesquisadas na internet, adaptadas ao segmento, porte e contexto do cliente.
---

# Skill: /ec-cha
**Objetivo:** Para cada cadeira comercial definida na Estrutura Organizacional, pesquisar e definir o CHA ideal — Conhecimentos exigidos, Habilidades exigidas e Atitudes exigidas — com base em melhores práticas de mercado pesquisadas na internet, adaptadas ao segmento, porte e contexto do cliente.

---

## Inputs esperados

| Documento | O que entrega para a Matriz CHA |
|---|---|
| **Estrutura Organizacional e Pessoas** (output da `/ec-org-pessoas`) | Lista de todas as cadeiras que a operação deverá ter — Fase 1 e Fase 2. Este é o input obrigatório e o ponto de partida da skill |
| **Plano de ROI** | Segmento do cliente, porte, tipo de venda (B2B / B2C / complexa / transacional) — contexto para adaptar o CHA ao mercado real |
| **Transcrição da entrevista com o gestor** | Expectativas e critérios de avaliação da liderança — o que o gestor valoriza em cada papel |
| **Documento Geral de Análise** (output da `/ec-analise`) | Contexto do negócio e da operação comercial — garante que o CHA seja relevante para a realidade do cliente |

---

## Dados Prioritários e Benchmark Automático

> A skill define o perfil ideal da cadeira, não avalia pessoas. Se não houver entrevistas ou análise disponível, execute o protocolo abaixo.

**Se entrevistas e Documento de Análise não estiverem disponíveis — pergunte:**
1. Qual é o perfil do vendedor ideal para este negócio na sua visão?
2. Que habilidades são absolutamente inegociáveis para fechar neste segmento?
3. Que tipo de comportamento ou atitude desqualifica um candidato imediatamente?
4. A venda exige conhecimento técnico do produto ou serviço? Em que nível?
5. O vendedor ideal aqui é mais consultivo ou mais transacional?

**Para o que não for respondido, pesquise na internet:**
- CHA padrão de mercado para SDR, Closer e Gestor no segmento do cliente
- O que diferencia top performers de bottom performers no setor em termos de conhecimentos, habilidades e atitudes

> ⚠️ Toda informação construída via benchmark deve ser sinalizada no documento com: **Premissa de mercado — validar com o cliente.**

---

## Instruções para o modelo

Com os documentos em mãos, você deve:

1. **Listar todas as cadeiras** definidas na `/ec-org-pessoas` — Fase 1 e Fase 2
2. **Para cada cadeira, pesquisar na internet** o CHA ideal para aquela função comercial — buscar em fontes como LinkedIn, Harvard Business Review, Sales Hacker, Resultados Digitais, Rock Content, publicações de RH e vendas B2B/B2C, entre outras
3. **Adaptar os resultados da pesquisa** ao contexto específico do cliente: segmento de mercado, tipo de venda, porte da operação, cultura identificada nas entrevistas
4. **Produzir uma Matriz CHA** para cada cadeira com itens específicos, práticos e aplicáveis — não genéricos
5. **Produzir o documento no formato especificado abaixo**

**O que pesquisar para cada cadeira:**
- Quais conhecimentos técnicos e de negócio são exigidos para a função
- Quais habilidades práticas e comportamentais diferenciam alta performance nesse papel
- Quais atitudes e comportamentos são inegociáveis para o sucesso na função

**Como adaptar ao cliente:**
- Substituir exemplos genéricos por exemplos do segmento do cliente
- Ajustar o nível de sofisticação técnica ao porte da operação
- Incorporar o que o gestor sinalizou como critério nas entrevistas

**Tom de escrita:** técnico e direto. O documento será usado para seleção, onboarding e avaliação de performance — precisa ser aplicável, não decorativo.

---

## Estrutura obrigatória do documento

### Cabeçalho

```
# Matriz CHA — Perfil Ideal por Cadeira — [Nome do Cliente]

**Cliente:** [Nome do cliente]
**Data:** [Data]
**Responsável:** Denis Orosco | Consultor de Estratégia de Vendas Sênior
```

---

### Introdução

Breve parágrafo (3 a 5 linhas) explicando o objetivo do documento: definir o perfil ideal de competências para cada cadeira comercial da operação, com base em melhores práticas de mercado adaptadas ao contexto do cliente. Mencionar as cadeiras que serão mapeadas.

---

### Cadeira: [Nome do Cargo / Papel] — [Fase 1 ou Fase 2]

*Repita esta estrutura para cada cadeira definida na Estrutura Organizacional.*

**Posição no funil:** [Topo / Meio / Fundo]
**Ocupante atual:** [Nome] *(ou "A contratar" para cadeiras da Fase 2)*

| PILAR | CONHECIMENTOS EXIGIDOS | HABILIDADES EXIGIDAS | ATITUDES EXIGIDAS |
|---|---|---|---|
| **Descrição** | O que a pessoa precisa saber — técnico, de produto, de mercado, de processo | O que a pessoa precisa saber fazer na prática | Como a pessoa precisa se comportar e se posicionar no dia a dia |
| **Item 1** | [Conhecimento específico] | [Habilidade específica] | [Atitude específica] |
| **Item 2** | [Conhecimento específico] | [Habilidade específica] | [Atitude específica] |
| **Item 3** | [Conhecimento específico] | [Habilidade específica] | [Atitude específica] |
| *(adicionar quantos itens forem necessários)* | | | |

---

## Regras de qualidade do documento

- Cada item deve ser específico e verificável — "boa comunicação" é fraco; "conduzir uma reunião de qualificação de 15 minutos extraindo as informações críticas sem parecer um interrogatório" é preciso
- Os itens devem ser adaptados ao segmento do cliente — o CHA de um SDR de SaaS B2B é diferente do SDR de uma empresa de calçados B2C
- A pesquisa deve ser feita para cada cadeira individualmente — não copiar o mesmo CHA para papéis diferentes
- O documento deve ser utilizável como critério de seleção e como guia de onboarding
- Itens encontrados na pesquisa que não se aplicam ao contexto do cliente devem ser descartados

---

## Como usar esta skill

1. Digite `/ec-cha`
2. Compartilhe:
   - **Obrigatório:** Estrutura Organizacional e Pessoas (`/ec-org-pessoas`)
   - **Contexto:** Plano de ROI, transcrição da entrevista com o gestor, Documento Geral de Análise
3. O modelo pesquisará na internet o CHA ideal para cada cadeira e adaptará ao contexto do cliente
4. Receba a Matriz CHA completa para todas as cadeiras da operação
