# <h1 align="center"> Data Lovers - League Of Legends <img src="https://icon-library.com/images/league-of-legends-logo-icon/league-of-legends-logo-icon-22.jpg" width=35px> </h1>
--------------------------------------------------------------------------------------
<p align="justify">Data Lovers - League Of Legends foi o segundo projeto desenvolvido no bootcamp da Laboratória, tem como objetivo ajudar jogadores e novos jogadores a conhecerem melhor os campeões presentes em Summoner's Rift apresentando informações como tipo e nível de ataque, defesa, magia e dificuldade de cada campeão, bem como, disponibiliza um filtro de pesquisa através do nome do campeão.</p>

### <h3 align="center"> 💻 Para acessar a página web <a href="https://thainaratabile.github.io/SAP009-data-lovers/src/"> clique aqui </a></h3>
<div align="center">

**Desenvolvido por**

<p> Thainara Tabile <br>
<a href="https://www.linkedin.com/in/thainaratabile/">Lindedin </a> | <a href="https://github.com/ThainaraTabile"> Github </a> </p>

<p> Ariane Vieira  <br>
<a href="https://www.linkedin.com/in/ariane-vieira-534310164/"> Lindedin </a> | <a href="https://github.com/VieiraAriane"> Github </a>
</p>

<p> Patricia Adania <br>
<a href="https://www.linkedin.com/in/patriciadania/"> Lindedin </a> | <a href="https://github.com/patriciadania"> Github </a>
</p>
</div>

## Índice

* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Etapas iniciais para o desenvolvimento da interface](#2-etapas-iniciais-para-o-desenvolvimento-da-interface)
* [3. Considerações técnicas](#3-considerações-técnicas)


## 1. Resumo do projeto
<div align="justify">
Neste projeto, contruimos uma página web para visualizar um conjunto (set) de dados que se adeque às necessidades de seu usuário.

Temos uma página web que permite visualizar dados, filtrá-los, ordená-los e fazer algum cálculo agregado. Por cálculo agregado nos referimos aos diversos cálculos que podem ser feitos com os dados para mostrar a informação mais relevante para os usuários (médias, valores máximos e mínimos, etc).

Tudo isso utilizando HTML semântico, CSS responsivo e JavaScript puro.
</div>

## 2. Etapas iniciais para o desenvolvimento da interface
<div align="justify">

### Pesquisa com usuários

Foram realizadas pesquisas com jogadores de LOL, utilizando as mesmas perguntas expostas no readme da Laboratória. Que foram:

**Quem são os usuários principais do produto?**
Usuários que pretendem começar a jogar e não possuem informações sobre as regas e personagens, também usuários jogadores do LOL e que desejam informações sobre os campeões, para que possam escolher melhor com qual deles jogar. ‌

**Quais são os objetivos dos usuários com relação ao produto?**
Apresentar informações sobre as características dos campeões, que podem ser filtrados por tipo (lutador, assassino, mago, atirador e suporte), fornecer a classificação de acordo com o nível de ataque/defesa/magia/dificuldade, por grupo ou todos (de acordo com o interesse do usuário). ‌

**Quais são os dados mais relevantes que querem ver na interface e por quê?** 
Filtragem por tipo de campeão e classificação do poder. Para que o usuário conheça os personagens e possa escolher de acordo com sua preferência.

**Quando utilizam ou utilizariam o produto?**
Antes de iniciar sua partida no jogo.

### Protótipo
Desenvolvemos o protótipo de baixa fidelidade para telas de computadores e tablets utilizando as ferramentas do <a href="https://www.canva.com/"> Canva. </a>

<img width="350" alt="image" src="https://user-images.githubusercontent.com/122550758/221359717-97f22602-4700-44ac-85db-74e5c989914d.png">

Para o protótipo para telas de celulares, utilizamos as ferramentas do <a href="https://www.figma.com/"> Figma. </a>

<img width="350" alt="image" src="https://user-images.githubusercontent.com/122550758/221363960-383dcadb-1421-4a8d-a5f4-bf5a4add88c8.png">


A estilização da página buscou semalhança com a interface do jogo, com objetivo de proporcionar ao usuário a sensação de já estar imerso ao mundo LOL. Sendo assim, a paleta de cores utilizada foi extraída do ícone do jogo.

<img width="350" alt="image" src="https://user-images.githubusercontent.com/122550758/221360181-19d5f568-4780-4b15-827a-9fb543a09a91.png">

</div>

## 3. Considerações técnicas


A lógica do projeto foi implementada somente em JavaScript (ES6), HTML e
CSS.
Estas funções são [_puras_], assim, através de funções puras e independentes do DOM que foram usadas a partir do arquivo
`src/main.js`, ao carregar a página e a cada vez que o usuário interage com a interface (cliques, seleções, filtros, ordenação, etc).

### Implementação da interface de usuário (HTML/CSS/JS)
A implementação contém: 
1. Exibição dos dados em interface em cards;
2. Permite ao usuário interagir com a interface para obter as informações que necessita, através de filtros de buscas por nome ou tipo do campeão, bem como por classificação dos poderes.
3. É responsiva, ou seja, deve ser visualizada sem problemas a partir de diversos tamanhos de tela: celulares, tablets, notebooks, etc.

### `src/main.js`

Utilizamos `src/main.js` para inserir todos os códigos relacionados a exibição dos dados na tela, utilizando a estrutura condicional  `switch ` para tradução de palavras da API,  `templade string` e o método   `map()` para obter dados da API. Com isto nos referimos basicamente à interação
com o DOM. Operações como criação de nós, registro de manejadores de eventos

Para carregar a fonte de dados da API:

```js
import lolData from "./data/lol/lol.js"
```
Assim, criamos a variável `lolData` disponível em `src/main.js`.

Para carregar os filtros:

```js
import { buscaTag, buscaNome, ordenarCampeoes, calculoAgragado } from "./data.js"
```

### `src/data.js`

O coração deste projeto é a manipulação de dados através de arrays e objetos.

Utilizamos este arquivo para armazenar toda a funcionalidade que corresponda a
obter, processar e manipular dados (suas funções):

* `function buscaTag`: esta função recebe os dados e nos retorna os campeões filtrados por tipo (assassinos, lutadores, magos, atiradores, suportes, tanques ou todos eles), no processamento dos dados utilizamos o método `filter`.


* `function buscaNome`: esta função retorna ao usuário o nome do campeão digitado, com auxilio do método `filter`.

* `function ordenarCampeoes`: responsável por ordenar os campeões de acordo com nível de ataque, defesa, magia e dificuldade, que podem ser ordenados de forma crescente ou descrecente Para esta função utilizamos o método `sort`.

* `function calculoAgragado`: realiza o cálculo percentual do tipo de campeão selecionado pelo usuário (assassinos, lutadores, magos, atiradores, suportes)

### `src/data`

A API do projeto foi extraída desta pasta, onde estão os dados de diferentes fontes. Utilizamos o arquivo com a extensão
`.js`.

### Testes unitários

Os  teste unitários das funções implementadas no arquivo `/test/data.spec.js`, cobriram 100% dos statements, functions e lines e branches.

#### Ferramentas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

#### Organização do trabalho


Para a organização do projeto utilizamos o Trello para a construção de um roadmap, fracionando cada etapa, definindo  metas e prioridades.

No planejamento de sprint foram definidas as metas a serem atingidas para a próxima sprint, enquanto na daily eram definidas as prioridades das tarefas para o dia.


