import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

const arrayGhibli = data;
const filmes = arrayGhibli["films"]
const root = document.getElementById("root");
let posteres = ''

filmes.map(function(item) {
  posteres += `<div class="poster"><img src="${item.poster}"></div>`;  // mapeando o array filmes e devolve na let posteres todos os itens com nome poster dentro do arquivo ghibli.js
})
root.innerHTML = posteres  // avisa o JS que isso vai pro HTML

filmes.sort(function(a,b) {
  if (a.tittle < b.tittle) {
    return -1
  }
  if (b.tittle < a.tittle) {
    return 1
  }
})