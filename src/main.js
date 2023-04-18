import data from './ghibli.js';

const listaPersonagem = document.getElementById('listaPersonagem');

const filmes = data.films;
const personagens = [];

filmes.forEach(filmes => {
  filmes.people.forEach(personagem => {
    personagens.push(personagem);
    const imagemCard = personagem.img;
    const template = `<div class="card"> <img class="imgPers" src= "${imagemCard}"></div>`;
    listaPersonagem.innerHTML += template;
  })
})

