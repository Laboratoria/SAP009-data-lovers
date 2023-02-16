import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

const arrayGhibli = data;
const filmes = arrayGhibli["filmes"]

var cartaz = filmes.map(function(item){
  return item.poster;
})

console.log(cartaz)

const root = document.getElementById("root");

root.innerHTML = `${cartaz}`