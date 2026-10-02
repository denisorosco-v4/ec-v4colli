---
name: documento-de-entrega
description: Gerar documentos de entrega consultivos no padrao V4 Company Relatorio Branco. Use quando o usuario pedir relatorio executivo, diagnostico, playbook, plano, matriz, SLA, trilha, documento final para cliente, HTML imprimivel, pagina branca estilo A4, ou qualquer entrega densa e sobria baseada no design system v4-company-relatorio-branco.
---

# Documento de Entrega

Criar entregaveis consultivos executivos com aparencia de documento final para cliente: pagina branca, hierarquia por tipografia, linhas finas, tabelas densas e vermelho V4 usado com disciplina. O resultado deve parecer relatorio profissional, nao landing page, dashboard ou deck.

## Fluxo de Trabalho

1. Identificar cliente, tipo de entrega, periodo, autoria e fontes disponiveis.
2. Extrair achados concretos dos materiais: fonte, data, pessoa, evidencia, causa, impacto e proximo passo.
3. Definir a estrutura do documento antes de escrever: cabecalho, titulo, subtitulo, placar executivo quando aplicavel, secoes numeradas, tabelas e checklist final.
4. Gerar em Markdown, HTML ou outro formato pedido mantendo densidade editorial e visual de pagina branca.
5. Revisar contra o checklist desta skill antes de entregar.

Se dados importantes estiverem ausentes, usar marcadores como `[A validar com o cliente]` ou `[Fonte nao informada]` em vez de inventar.

## Linguagem

- Escrever em portugues brasileiro, com tom consultivo, direto e especifico do cliente.
- Conectar cada diagnostico a fonte, achado, causa, impacto e proximo passo.
- Preferir frases compactas e informativas.
- Evitar adjetivos vazios, frases genericas e promessas sem evidencia.
- Manter ressalvas proximas das metricas quando o numero for estimado.

## Estrutura Recomendada

Usar esta ordem quando fizer sentido para o pedido:

1. Cabecalho com marca, cliente, tipo de entrega e periodo.
2. Linha vermelha fina.
3. H1 preto, grande e objetivo.
4. Subtitulo cinza explicando escopo e criterio.
5. Linha de autoria, cliente ou parceria em vermelho.
6. Placar executivo para diagnosticos, maturidade, status ou risco.
7. Secoes numeradas: `Secao 1 - Metodologia Aplicada`, `Secao 2 - Matriz de Diagnostico`, etc.
8. Tabelas densas para maturidade, riscos, entregas, prioridades e planos de acao.
9. Proximos passos com responsaveis, prazos e dependencias.
10. Checklist ou observacoes finais quando for util para implementacao.

## Padrao Visual

Tokens obrigatorios:

| Token | Valor | Uso |
|---|---:|---|
| Vermelho V4 | `#d60000` | Titulos de secao, barras de tabela, destaques criticos |
| Texto principal | `#202124` | H1, corpo e celulas principais |
| Texto secundario | `#777777` | Meta de cabecalho, subtitulos, notas |
| Linha / borda | `#d9d9d9` | Divisorias, bordas de tabela |
| Fundo de tabela | `#f3f3f3` | Cabecalhos secundarios e linhas auxiliares |
| Branco | `#ffffff` | Pagina e celulas limpas |
| Critico | `#e83d5a` | Bolinha/status critico |

Pagina:

- Fundo branco, sem gradiente, sem card externo e sem decoracao.
- Largura de leitura proxima a A4: `760px` a `820px` na tela.
- Margens internas generosas: `44px` a `56px`.
- Conteudo alinhado a esquerda; nunca centralizar blocos densos.
- Usar divisorias horizontais finas entre blocos grandes.

Tipografia:

- Fonte preferencial: Arial, Helvetica ou IBM Plex Sans quando disponivel.
- H1: `28px` a `32px`, peso `700`, cor `#202124`.
- H2 / secao: `15px` a `17px`, peso `700`, vermelho V4.
- Corpo: `11px` a `12px`, cor preta, entrelinha compacta.
- Tabelas: `10px` a `11px`, densas e legiveis.
- Links ou nomes de empresas podem aparecer sublinhados em vermelho.

## Cabecalho

Criar a primeira linha em duas colunas:

- Esquerda: `V4 COMPANY · Cliente`, em vermelho, pequeno e negrito.
- Direita: tipo de entrega e mes/ano, em cinza e pequeno.

Abaixo, incluir linha horizontal vermelha fina, H1 preto, subtitulo cinza e linha de autoria/cliente em vermelho pequeno e negrito.

## Placar Executivo

Usar logo apos o titulo quando houver diagnostico, status, maturidade, riscos ou volume de entregas:

- Tabela de 4 colunas.
- Primeira linha vermelha com texto branco e negrito.
- Segunda linha cinza clara com labels explicativos.
- Exemplos de metricas: `1,25 / 5`, `Critico`, `5 Riscos`, `12 Entregas`.
- Status critico usa bolinha `●` em `#e83d5a` antes do texto.

## Secoes, Listas e Tabelas

- Nomear secoes como `Secao 1 - Metodologia Aplicada`.
- Separar secoes com `28px` a `36px` de espaco vertical em HTML, ou divisorias Markdown quando o documento for textual.
- Usar bullets simples, pretos, compactos e com recuo curto.
- Fazer cada item carregar informacao concreta: fonte, data, pessoa, achado ou evidencia.
- Em tabelas, usar bordas finas cinza em todas as celulas.
- Cabecalhos de tabela devem ter fundo `#f3f3f3`, texto preto e negrito.
- Em placares ou matrizes de sintese, usar cabecalho vermelho com texto branco.
- Alinhar celulas ao topo e manter densidade informacional.

Colunas recomendadas para diagnostico de maturidade:

| Frente analisada | Nota | Status | Justificativa tecnica |
|---|---:|---|---|

Colunas recomendadas para plano de acao:

| Prioridade | Acao recomendada | Responsavel | Prazo | Evidencia/criterio de sucesso |
|---|---|---|---|---|

## HTML Imprimivel

Quando o usuario pedir HTML, pagina, visual ou arquivo pronto para PDF:

- Criar arquivo HTML autocontido, com CSS no `<style>`.
- Nao usar CDN, JavaScript, imagens decorativas ou dependencias externas.
- Usar container `.page` com largura maxima entre `760px` e `820px`, fundo branco e margem centralizada somente na pagina externa.
- Incluir `@media print` para A4, removendo sombras se existirem e preservando quebras de secao.
- Manter layout responsivo, sem texto sobreposto e sem elementos que parecam landing page.

## Anti-padroes

- Cards arredondados de dashboard.
- Gradientes, sombras grandes, fundos escuros ou hero visual.
- Iconografia excessiva.
- Texto grande demais em blocos internos.
- Tabelas frouxas, com pouca informacao por linha.
- Vermelho usado em paragrafo inteiro sem funcao de hierarquia.
- Capa teatral, chamada de marketing ou composicao de deck.

## Checklist de Qualidade

- [ ] Cabecalho com marca, cliente, periodo e linha vermelha.
- [ ] H1 preto grande e subtitulo cinza.
- [ ] Placar executivo quando aplicavel.
- [ ] Secoes em vermelho, compactas e numeradas.
- [ ] Tabelas densas com bordas finas.
- [ ] Status critico com marcador visual discreto.
- [ ] Conteudo com evidencias, datas e nomes quando existirem.
- [ ] Causa, impacto e proximo passo aparecem nos diagnosticos.
- [ ] Nada de estetica de landing page, dashboard ou deck.
