---
name: layout-de-entrega
description: Gerar decks/apresentacoes HTML no padrao visual V4 Company "Sales Enablement" (fundo vermelho hero, glassmorphism, IBM Plex Sans/Mono, slides navegaveis). Use quando o usuario pedir deck de projeto, apresentacao de kickoff, cronograma visual, roadmap em slides, pitch de projeto, ou qualquer entrega em formato de slide navegavel (nao documento/relatorio de pagina branca — para isso usar a skill documento-de-entrega).
---

# Layout de Entrega (Deck V4)

Criar apresentacoes HTML autocontidas, no formato de deck navegavel (slides 1600x900, setas de navegacao, contador, barra de progresso), replicando o design system extraido de `deckprojetosalesenablementavanti.vercel.app`. Uso: decks de kickoff, cronograma de projeto, roadmap de sprints, apresentacao de proposta/plano.

Nao confundir com [[documento-de-entrega]]: aquela skill produz documento de pagina branca (relatorio); esta produz apresentacao/deck (slide a slide, com hero vermelho e dark mode).

## Fluxo de Trabalho

1. Levantar com o usuario: titulo do projeto/cliente, periodo (datas de inicio/fim), fases/sprints, dores ou contexto, pessoas envolvidas, indicadores, materiais/entregas, riscos.
2. Definir o roteiro de slides (tipicamente 10-16): capa → contexto → leitura de horas/escopo → mapa de dores → ritmo/modelo → fases (linha do tempo) → cronograma Gantt → 1 slide por fase com sprints → indicadores → materiais/backlog → stakeholders → riscos → encerramento.
3. Gerar um unico arquivo HTML autocontido usando a estrutura, classes CSS e tokens abaixo (copiar o arquivo `assets/template.html` como base e editar o conteudo).
4. Alternar `.slide`, `.slide.white`, `.slide.red`, `.slide.dark` para variar o ritmo visual — nunca dois slides `.red` seguidos.
5. Revisar contra o checklist antes de entregar.

Se dado real faltar (datas, nomes, metas), usar marcador `[a confirmar]` em vez de inventar.

## Arquivo Base

Use `assets/template.html` desta skill como esqueleto. Ele ja contem: tokens CSS, biblioteca de icones SVG (`<symbol>`), motor de navegacao (JS de teclado/botoes/scale), e exemplos de cada tipo de slide/componente. Edite apenas o conteudo dentro de `<main id="deck">`.

## Tokens Visuais (obrigatorios)

```css
--v4-red: #e50914;
--v4-orange: #ff481f;
--v4-dark: #280001;
--ink: #141414;
--ink-soft: #5a5a5a;
--line: rgba(20,20,20,.12);
--paper: #f5f4f2;
--radius: 22px;
--hero: radial-gradient(120% 130% at 50% -10%, #ff5a2c 0%, #e50914 30%, #b00610 62%, #280001 100%);
--light: radial-gradient(circle at 92% 8%, rgba(229,9,20,.055), transparent 24%), #f5f4f2;
--dark: radial-gradient(circle at 78% 15%, rgba(229,9,20,.5), transparent 32%), linear-gradient(145deg, #280001 0%, #130001 100%);
```

Fontes (Google Fonts): `IBM Plex Sans` (300/400/500/600/700) para corpo e titulos; `IBM Plex Mono` (400/500/700) para eyebrows, numeros, datas, labels tecnicos.

Escala tipografica:

| Elemento | Tamanho | Peso | Letter-spacing |
|---|---|---|---|
| h1 | 88px / linha .98 | 600 | -.055em |
| h2 | 60px / linha 1.02 | 600 | -.045em |
| h3 | 26px / linha 1.1 | 600 | -.025em |
| .lede | 27px / linha 1.42 | 300 | — |
| .big | 72px / linha .95 | 700 | -.06em |
| .eyebrow | 12px mono | 700 | .09em uppercase |

## Estrutura do Slide

- Formato fixo `1600x900px`, escalado via `--deck-scale` para caber na viewport (nunca redesenhar em unidades relativas dentro do slide).
- Padding padrao: `76px 96px 108px`.
- 4 variantes de fundo, alternadas para dar ritmo:
  - `.slide` (claro padrao, `--light`)
  - `.slide.white` (branco puro, para slides com muita informacao densa: mapa de dores, materiais, Gantt)
  - `.slide.red` (gradiente `--hero`, texto branco) — usar em capa, ritmo/modelo, indicadores, riscos, encerramento
  - `.slide.dark` (gradiente `--dark`, texto branco) — usar em leitura de horas, fases, stakeholders
- `.topline`: barra de 5px no topo com gradiente red→orange — adicionar apenas em slides claros/brancos (nos escuros/vermelhos ja ha o proprio fundo saturado).
- Todo slide tematico comeca com `<span class="eyebrow">` (kicker) e depois `<h2>`.

## Biblioteca de Componentes

- **`.eyebrow`** — pill uppercase mono, indicador de secao/contexto no topo do slide. Em fundo escuro vira vidro (blur automatico pela classe pai `.red`/`.dark`).
- **`.card`** — bloco branco com borda fina e radius 22px; em `.dark`/`.red` vira translucido.
- **`.glass`** — efeito vidro fosco (`backdrop-filter: blur(14px) saturate(140%)`) para destaques sobre fundo `.red`; usar com moderacao (1 grid por slide).
- **`.sphere`** — esfera decorativa flutuante (`animation: float 7s`), so em slides de capa/encerramento, 1-2 por slide, posicionada com `style` inline (`top`/`right`/`bottom`/`opacity`).
- **`.icon-box` + `.icon`** — caixa 58x58px com icone SVG stroke-based; puxar simbolos de `<symbol id="i-...">` no topo do HTML (arrow-left/right, target, search, message, users, chart, route, check, calendar, bolt, money, layers, lightbulb, shield, clock, flag). Adicionar novos symbols seguindo o mesmo estilo (`stroke-width: 2.3`, `stroke-linecap: round`) quando faltar um icone.
- **`.item`** — linha ícone+texto para listas de dores/indicadores/papeis; `<strong>` para o titulo curto.
- **`.stage`** — card de sprint dentro de `.timeline` (grid de 4-6 colunas): numero mono vermelho, data mono, h3, paragrafo.
- **`.gantt`** — grade de cronograma: `.gantt-head` (cabecalho de semana), `.gantt-label` (linha lateral), `.gantt-phase` (barra solida com gradiente hero), `.gantt-cadence` (barra fina, `.stripe` para quinzenal), `.gantt-milestone.diamond`/`.ring` (marcos), `.gantt-divider` (separador), `.gantt-legend` (legenda ao final).
- **`.quote`** — bloco de destaque em vermelho solido para uma frase-chave (ex.: fala de sponsor).
- **`.big`** — numero grande em destaque (ex.: horas, %, contagem).
- Grids utilitarias: `.grid-2`, `.grid-3`, `.grid-4`, `.stack` (empilhado vertical), `.row` (flex horizontal), `.split` (`.95fr 1.05fr`, para quote + card lado a lado).

## Chrome do Deck (fixo, nao editar por slide)

- `.deck-footer`: logo do cliente/parceria, troca de versao (clara/escura) conforme o tema do slide ativo via JS.
- `.deck-counter`: contador `01 / N` em mono, cor adapta ao tema.
- `.navigation`: dois botoes circulares (`prevBtn`/`nextBtn`) com icones de seta.
- `.progress-track` + `.progress-fill`: barra inferior com gradiente red→orange proporcional ao slide atual.
- Navegacao por teclado: setas, PageUp/Down, espaco, Home/End.
- `fitDeck()`: recalcula `--deck-scale` para caber a viewport mantendo proporcao 16:9-ish fixa (1600x900).

## Roteiro Recomendado (adaptar por projeto)

1. Capa (`.red`, sphere, brand-lockup, h1 + lede)
2. Contexto do projeto (`.white`, quote + card de "o que ja existe")
3. Escopo/leitura de horas ou recursos (`.dark`, grid-3 de big numbers)
4. Mapa de dores/diagnostico (`.white`, grid-2 de `.item`)
5. Modelo/ritmo de trabalho (`.red`, grid-4 de `.glass`)
6. Fases do projeto — linha do tempo (`.dark`, grid-4 de `.card` com datas)
7. Cronograma Gantt (`.white`, `.gantt` completo + legenda)
8. Um slide por fase com sprints (`.timeline` de `.stage`, alternando white/red/dark)
9. Indicadores/KPIs (`.red`, grid-4 de `.item` com icone)
10. Materiais/backlog de entregas (`.white`, grid-4 de `.card`)
11. Stakeholders/papeis (`.dark`, grid-4 de `.card`)
12. Riscos/pontos em aberto (`.red`, grid-3 de `.glass`)
13. Encerramento (`.red`, sphere, h1 de fechamento + lede)

## Anti-padroes

- Nunca usar esse layout para documento de leitura longa/relatorio (usar [[documento-de-entrega]] nesse caso).
- Nao empilhar dois slides `.red` seguidos — quebra o ritmo de contraste.
- Nao adicionar mais de 1 `.glass` grid por slide (efeito perde impacto).
- Nao fugir do grid 1600x900 — o deck depende de escala fixa para o `fitDeck()` funcionar.
- Nao usar cores fora da paleta (`--v4-red`, `--v4-orange`, `--v4-dark`, `--ink`, `--ink-soft`, `--paper`) nem outra fonte alem de IBM Plex Sans/Mono.
- Nao inventar dados de cronograma/pessoas — usar `[a confirmar]`.

## Checklist de Qualidade

- [ ] Arquivo HTML unico, autocontido, sem dependencias externas alem do Google Fonts.
- [ ] Slides no formato fixo 1600x900 com `fitDeck()` funcionando.
- [ ] Variantes `.red`/`.dark`/`.white`/`.light` alternadas, sem duas `.red` seguidas.
- [ ] Cada slide tematico tem `.eyebrow` + `h2`.
- [ ] Tokens de cor e fontes exatamente os do design system (nao inventar tons).
- [ ] Navegacao (botoes, teclado, contador, progress bar) presente e funcional.
- [ ] Dados reais do projeto (nao placeholder generico) preenchidos ou marcados `[a confirmar]`.
- [ ] Nenhum componente fora da biblioteca listada (ou, se novo, segue o mesmo padrao visual de radius/border/blur).
