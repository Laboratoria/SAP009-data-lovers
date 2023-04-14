# Data Lovers

## Índice

* [1. Introdução](#1-Introdução)
* [2. Histórias de Usuário ](#2-Histórias-de-Usuário)
* [3. Checklist de Implementação](#3-Checklist-de-Implementação)
* [4. Considerações finais](#4-considerações-finais)

***

## 1. Introdução

Para este projeto defini que seria desenvolvida uma aplicação de LOL, 
com o conjunto de dados seguinte:

* [League of Legends - Challenger leaderboard](src/data/lol/lol.json): Este
  conjunto mostra a lista de campeões do jogo League of Legends
  (LoL).
  [Pesquisa com jogadores de LoL](src/data/lol/README.pt-BR.md)

O objetivo principal deste projeto foi que aprender a  desenhar e construir uma
interface web onde se possa visualizar e manipular dados, entendendo o que o
usuário necessita.

## 2. Histórias de Usuário
 
  Com base na Metodologia Ágil, foi criado um quadro no Trello, onde as tarefas foram definidas de acordo com 
  cada história de usuário:

 [Quadro no Trello](src/card-imgs/printHU.jpg)

## 3. Checklist de Implementação

* [ ] Usar VanillaJS.
* [ ] Passa pelo linter (`npm run pretest`)
* [ ] Passa pelos testes (`npm test`)
* [ ] Testes unitários cobrem um mínimo de 70% de statements, functions, lines e
  branches.
* [ ] Inclui uma _definição de produto_ clara e informativa no `README.md`.
* [ ] Inclui histórias de usuário no `README.md`.
* [ ] Inclui rascunho da solução (protótipo de baixa fidelidade) no `README.md`.
* [ ] Inclui uma lista de problemas detectados nos testes de usabilidade no
  `README.md`.
* [ ] UI: Mostra lista/tabela/etc com dados e/ou indicadores.
* [ ] UI: Permite ordenar dados por um ou mais campos (asc e desc).
* [ ] UI: Permite filtrar dados com base em uma condição.
* [ ] UI: É _responsivo_.

## 3. Considerações finais

Visando melhorar esta aplicação, irei modificar o layout da pagina com o CSS futuramente. 
