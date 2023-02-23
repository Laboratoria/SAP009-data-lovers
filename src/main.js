import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

// console.log(example,data)

const arrayGhibli = data;
const filmes = arrayGhibli["films"]
const root = document.getElementById("root");
let posteres = ''

filmes.map(function(item) {
  posteres += `<img src="${item.poster}">`;  // mapeando o array filmes e devolve na let posteres todos os itens com nome poster dentro do arquivo ghibli.js
})
root.innerHTML = posteres  // avisa o JS que isso vai pro HTML

const alfabeto = data.films.sort((a,b) => a.title.localeCompare(b.title));

const score = data.films.sort((a,b) => Number(a.rt_score) - (Number(b.rt_score)));

//const anoDecrescente = document.getElementById("decrescente")

//const ordemD = data.films.sort((a,b) => b.release_date.localeCompare(a.release_date));

console.log(alfabeto)
//console.log(ordemD)
console.log(score)