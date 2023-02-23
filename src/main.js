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

const seletorDeOrdem = document.getElementById("ordem")
seletorDeOrdem.addEventListener('change', function(event){
  let posteresOrdenados = ''

  if(event.target.value === 'deAZ') {
    const deAZ = data.films.sort((a,b) => a.title.localeCompare(b.title))
    deAZ.map(function(item) {
      posteresOrdenados += `<div class="poster"><img src="${item.poster}"></div>`;  // mapeando o array filmes e devolve na let posteres todos os itens com nome poster dentro do arquivo ghibli.js
    })
  }

  if(event.target.value === 'deZA') {
    console.log('deZA')
  }

  if(event.target.value === 'crescente') {
    console.log('crescente')
  }

  if(event.target.value === 'decrescente') {
    const decrescente = data.films.sort((a,b) => b.release_date.localeCompare(a.release_date));

    decrescente.map(function(item) {
      posteresOrdenados += `<div class="poster"><img src="${item.poster}"></div>`;  // mapeando o array filmes e devolve na let posteres todos os itens com nome poster dentro do arquivo ghibli.js
    })
  }

  root.innerHTML = posteresOrdenados
})

const score = data.films.sort((a,b) => Number(a.rt_score) - (Number(b.rt_score)));

console.log(score)
