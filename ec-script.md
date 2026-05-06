# Skill: /ec-script
**Objetivo:** Produzir os scripts de vendas e follow-up oficiais da operação comercial. A skill opera em duas fases: primeiro entende o modelo de negócio e define o tom da marca; depois constrói scripts que se encaixam diretamente em cada toque de cada cadência definida na `/ec-cadencia` — formando um sistema unificado de comunicação comercial.

---

## Inputs esperados

### Bloco 1 — Modelo de Negócio e Tom da Marca (obrigatório)
| Documento | O que entrega para os scripts |
|---|---|
| **Plano de ROI** | Modelo de negócio, produto/serviço, proposta de valor, ticket médio, perfil do cliente ideal |
| **Transcrição do Kickoff** | Como o gestor fala sobre a empresa e o produto — vocabulário real, diferenciais declarados, posicionamento |
| **Transcrição da entrevista com o gestor** | Tom esperado na comunicação, o que funciona hoje, objeções mais comuns na visão da liderança |
| **Transcrição da entrevista com o top performer** | Como o melhor vendedor fala, aborda e convence — a voz que mais converte nessa operação |
| **Exemplos de conversas reais com leads** | O vocabulário e o ritmo que o lead já conhece — preservar o que funciona, corrigir o que perde |
| **Documento Geral de Análise** (output da `/ec-analise`) | Gargalos de comunicação identificados — onde a abordagem atual falha |

### Bloco 2 — Cadências (obrigatório para a integração)
| Documento | O que entrega para os scripts |
|---|---|
| **Fluxos de Cadência** (output da `/ec-cadencia`) | **Input central.** Cada toque de cada cadência precisa de um script correspondente. A estrutura de scripts segue exatamente a estrutura de cadências |

### Bloco 3 — Processo e Metodologia
| Documento | O que entrega para os scripts |
|---|---|
| **BPMN** (output da `/ec-bpmn`) | Em qual etapa do funil cada script é acionado e quem o usa |
| **Metodologia de qualificação** (definida no BPMN ou nas entrevistas) | Qual framework guia o script de qualificação — NATA, SPIN, BANT ou método próprio |

---

## Instruções para o modelo

### Fase 1 — Entender o Modelo de Negócio e Definir o Tom da Marca

Antes de escrever qualquer script, produza internamente (e apresente ao início do documento) uma síntese de:

**1. Modelo de negócio:**
- O que a empresa vende e para quem
- Como a venda acontece (ciclo curto/longo, consultiva/transacional, B2B/B2C)
- Qual é o argumento central de valor — por que o cliente compra
- Qual é a objeção mais recorrente e por que ela existe

**2. Tom da marca:**
- Formal ou informal?
- Consultivo ou direto?
- Técnico ou acessível?
- Qual é o vocabulário que a empresa usa e evita
- Como o top performer fala vs. como o bottom fala — o que diferencia

Só após essa síntese estar clara, partir para a escrita dos scripts.

---

### Fase 2 — Construir os Scripts Integrados às Cadências

Para cada cadência definida na `/ec-cadencia`, escreva o script correspondente para cada toque. O script deve:

- Ser coerente com o canal do toque (WhatsApp tem tom diferente de e-mail; ligação tem tom diferente de mensagem escrita)
- Avançar a conversa de onde o toque anterior parou — sem repetir o que já foi dito
- Ter um objetivo claro: abrir, qualificar, gerar urgência, quebrar objeção, encerrar
- Estar pronto para uso direto, com `[marcadores]` apenas onde a personalização é indispensável

---

## Estrutura obrigatória do documento

### Cabeçalho

```
# Scripts de Vendas e Follow-up — [Nome do Cliente]

**Cliente:** [Nome do cliente]
**Data:** [Data]
**Responsável:** Denis Orosco | Consultor de Estratégia de Vendas Sênior
```

---

### Seção 1 — Modelo de Negócio e Tom da Marca

**Modelo de negócio:**
[Síntese em 5 a 8 linhas: o que a empresa vende, para quem, como a venda acontece, qual é o argumento central de valor e qual é a principal objeção]

**Tom da marca:**
[Síntese em 3 a 5 linhas: formal ou informal, consultivo ou direto, vocabulário que usa e evita, como o top performer comunica]

**Palavras e expressões que definem a voz da marca:**
- [Termo / expressão que deve aparecer nos scripts]
- [Termo / expressão a evitar — e por quê]

---

### Seção 2 — Scripts por Cadência

Para cada cadência documentada na `/ec-cadencia`, construa os scripts de cada toque na seguinte estrutura:

---

#### Cadência [N] — [Nome da Cadência]

*[Breve descrição do contexto: quando essa cadência é ativada e qual é o objetivo]*

---

##### Toque [N] — Dia [X] — [Canal]

**Objetivo deste toque:** [O que deve ser alcançado com essa mensagem]

```
[Script completo — pronto para uso direto]
```

> **Instrução de uso:** [Orientação rápida — o que observar, quando adaptar, o que não mudar]

---

*(Repetir para todos os toques de todas as cadências definidas na `/ec-cadencia`)*

---

### Seção 3 — Scripts de Etapa do Funil

Além dos scripts de cadência (follow-up), produza os scripts das etapas principais do funil — os momentos em que o processo avança, não apenas mantém o lead ativo.

#### 3.1 — Primeiro Contato

**Quando usar:** chegada de um novo lead pelo canal principal
**Canal:** [Canal principal do cliente]

```
[Script]
```

#### 3.2 — Qualificação

**Quando usar:** após o primeiro contato, para verificar elegibilidade
**Metodologia:** [Framework utilizado]

| CRITÉRIO | OBJETIVO | SCRIPT |
|---|---|---|
| [Critério 1] | [O que o vendedor quer descobrir] | "[Pergunta em linguagem natural]" |
| [Critério 2] | | |
| [Critério 3] | | |
| [Critério 4] | | |

#### 3.3 — Solicitação de Informações ou Documentos

**Quando usar:** lead qualificado, avançando para análise ou proposta

```
[Script]
```

#### 3.4 — Proposta e Fechamento

**Quando usar:** após análise, apresentando a solução e chamando para a decisão

```
[Script — estrutura: dor identificada → solução → resultado esperado → modelo comercial → chamada para ação]
```

#### 3.5 — Quebra de Objeções

Para cada objeção recorrente identificada nas entrevistas:

**Objeção: [Nome]**
*Por que o lead diz isso:* [Razão real por trás da objeção]

```
[Script de resposta — empático, direto, sem pressão]
```

#### 3.6 — Onboarding Pós-Fechamento

**Quando usar:** imediatamente após o fechamento confirmado
**Canal:** [Canal principal]

```
[Script de boas-vindas e próximos passos]
```

---

### Seção 4 — Quadro Comparativo: Atendimento Atual vs. Padrão [Nome do Cliente]

| SITUAÇÃO | ATENDIMENTO ATUAL | PADRÃO [NOME DO CLIENTE] |
|---|---|---|
| **Primeiro contato** | [O que acontece hoje — baseado nas entrevistas] | [O que deve acontecer com o novo script] |
| **Qualificação** | [Situação atual] | [Novo padrão] |
| **Follow-up sem retorno** | [Situação atual] | [Novo padrão — cadência estruturada] |
| **Objeção de [tipo]** | [Situação atual] | [Novo padrão] |
| **Pós-fechamento** | [Situação atual] | [Novo padrão] |

---

## Regras de qualidade do documento

- Nenhum script deve ser escrito antes da síntese de modelo de negócio e tom da marca estar concluída
- Cada script de cadência deve ser coerente com o toque anterior — a conversa tem memória
- O canal define o tom: WhatsApp é mais direto e humano; e-mail permite mais estrutura; ligação exige abertura e ritmo diferente
- Scripts com mais de 5 linhas de texto corrido tendem a não ser lidos no WhatsApp — respeitar o canal
- Os `[marcadores]` devem ser apenas onde a personalização é indispensável — scripts muito genéricos não convertem, scripts muito longos de personalizar não são usados
- As objeções respondidas devem ser as reais do cliente — não objeções genéricas de mercado

---

## Como usar esta skill

1. Digite `/ec-script`
2. Compartilhe os documentos na seguinte ordem:
   - **Obrigatórios:** Plano de ROI, transcrições das 3 entrevistas, Fluxos de Cadência (`/ec-cadencia`)
   - **Processo:** BPMN (`/ec-bpmn`), Documento Geral de Análise
   - **Tom e linguagem:** exemplos de conversas reais com leads
3. O modelo primeiro sintetiza o modelo de negócio e o tom da marca — e só então constrói os scripts
4. Receba os scripts integrados às cadências e os scripts de etapa do funil, prontos para uso imediato
