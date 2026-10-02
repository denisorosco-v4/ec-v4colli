---
name: ec-entrevista-bottom
description: Analisar a transcrição do Kickoff e da entrevista com o gestor comercial para gerar perguntas estruturadas para a entrevista com o vendedor de menor performance (bottom performer), indicado pelo próprio gestor.
---

# Skill: /ec-entrevista-bottom
**Objetivo:** Analisar a transcrição do Kickoff e da entrevista com o gestor comercial para gerar perguntas estruturadas para a entrevista com o vendedor de menor performance (bottom performer), indicado pelo próprio gestor.

---

## Dados Prioritários e Benchmark Automático

> A skill avalia o que está disponível antes de gerar as perguntas. Se as transcrições anteriores não estiverem disponíveis, execute o protocolo abaixo.

**Se Kickoff e entrevista do gestor não estiverem disponíveis — pergunte:**
1. Como você descreveria sua rotina diária de trabalho em vendas?
2. Em qual etapa do processo você mais trava?
3. O que você acha que falta para vender mais?
4. Como você recebe os leads? O processo é claro para você?
5. Você tem todas as ferramentas e informações que precisa?
6. Como é sua relação com o gestor e com o restante do time?
7. Se pudesse mudar uma coisa no processo hoje, o que seria?

**Para o que não for respondido, pesquise na internet:**
- Principais bloqueios relatados por vendedores de baixa performance em operações sem processo estruturado no segmento
- O que trava vendedores no tipo de venda identificado (consultiva, transacional, recorrente)

> ⚠️ Toda informação construída via benchmark deve ser sinalizada no documento com: **Premissa de mercado — validar com o cliente.**

---

## Instruções para o modelo

O usuário irá compartilhar:
1. A **transcrição da reunião de Kickoff**
2. A **transcrição da entrevista com o gestor comercial**

Você deve:

1. Ler e absorver as informações dos dois documentos
2. Identificar quem é o vendedor bottom performer mencionado pelo gestor
3. Identificar o que o gestor disse sobre as dificuldades e o perfil dessa pessoa
4. Gerar perguntas que ajudem a entender a perspectiva do vendedor sobre os bloqueios, o processo e a rotina dele
5. Nunca confrontar ou expor — as perguntas devem ser neutras e empáticas, como uma conversa de diagnóstico

O objetivo é entender **por que esse vendedor não performa**, sem julgamento. Os insumos servirão para construir o Playbook, a Matriz CHA e os Fluxos de Cadência.

---

## Foco da entrevista com o bottom performer

Esta entrevista tem como objetivo entender:

- Como o vendedor enxerga o próprio processo de trabalho
- Onde ele sente dificuldade e o que ele acredita que o impede de vender mais
- Como ele se relaciona com clientes e com o processo comercial
- O que ele entende como suporte, ferramenta e gestão
- O que ele faria diferente se pudesse

---

## Temas obrigatórios das perguntas

Gere perguntas nos seguintes blocos, considerando o que foi dito pelo gestor sobre esse vendedor:

### 1. Rotina e Processo de Vendas
- Como é o seu dia a dia de trabalho?
- Como você organiza sua agenda e sua carteira de clientes?
- Quais etapas você segue desde o primeiro contato até o fechamento?
- Como você decide quem priorizar na sua carteira?

### 2. Dificuldades e Bloqueios
- Qual parte do processo de venda você sente mais dificuldade?
- O que você acha que impede você de fechar mais negócios?
- Já perdeu alguma venda que você acreditava que ia fechar? O que aconteceu?
- O que te frustra no dia a dia comercial?

### 3. Relacionamento com Clientes
- Como você aborda um cliente novo?
- Como mantém contato com clientes que ainda não compraram?
- Como reativa um cliente que parou de comprar?
- Como você lida com objeções durante a negociação?

### 4. Ferramentas e Suporte
- Quais ferramentas você usa no seu trabalho?
- O que sente falta para trabalhar melhor?
- Como avalia o suporte que recebe da empresa (materiais, treinamento, gestão)?
- Existe alguma informação que você precisaria ter mas não tem acesso?

### 5. Visão Pessoal
- O que você acredita que diferencia um bom vendedor nessa área?
- O que você faria diferente se pudesse mudar algo no processo?
- O que te motivaria a vender mais?

---

## Formato de saída esperado

```
# Perguntas para Entrevista com o Vendedor Bottom Performer — [Nome do Cliente]
Vendedor: [Nome identificado na entrevista do gestor]

## Bloco 1: [Tema]
1. [Pergunta]
2. [Pergunta]

## Bloco 2: [Tema]
...

## Contexto extraído das entrevistas anteriores
- O que o gestor disse sobre esse vendedor: [resumo]
- Pontos de atenção para aprofundar: [lista]
```

---

## Como usar esta skill

1. Digite `/ec-entrevista-bottom`
2. Cole a transcrição do Kickoff e da entrevista com o gestor
3. Receba as perguntas estruturadas para a entrevista com o bottom performer
