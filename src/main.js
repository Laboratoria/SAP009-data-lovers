import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

// console.log(example,data)

const arrayGhibli = data;
const filmes = arrayGhibli["films"]
const root = document.getElementById("root");
let posteres = ''

filmes.map(function(item) {
  posteres += `<div class="poster"><img src="${item.poster}"></div>`;  // mapeando o array filmes e devolve na let posteres todos os itens com nome poster dentro do arquivo ghibli.js
})
root.innerHTML = posteres  // avisa o JS que isso vai pro HTML

// const alfabeto = filmes.sort(function(a,b){
//   if(a.title < b.title){
//     return -1
//   }
//   if(b.title < a.title){
//     return 1
//   }
// })
// console.log(alfabeto)

const alfabeto = data.films.sort((a,b) => a.title.localeCompare(b.title));


const ano = filmes.sort(function(a,b){
  if(a.release_date < b.release_date){
    return -1
  }
  if(b.release_date < a.release_date){
    return 1
  }
})

const anoDecrescente = document.getElementById("decrescente")
anoDecrescente.onclick = function(){
  data.release_date.sort((a,b) => b.release_date.localeCompare(a.release_date));
}
console.log(anoDecrescente)