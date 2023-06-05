import {filtroGenero, filtroEspecie} from './data.js';
import data from './ghibli.js';

const listaPersonagem = document.getElementById('listaPersonagem');

const filmes = data.films;
const personagens = [];

filmes.forEach(filmes => {
  filmes.people.forEach(personagem => {
    personagens.push(personagem);
  })
})

function cardsNaTela(arrayPersonagens){
  listaPersonagem.innerHTML = "";
  arrayPersonagens.forEach(personagem => {
    const imagemCard = personagem.img;
    const template = `<div class="card"> <img class="imgPers" src= "${imagemCard}"></div>`;
    listaPersonagem.innerHTML += template;
  })
}
cardsNaTela(personagens);

const generoEscolhido = document.getElementById('genero');
generoEscolhido.addEventListener("change", () => {
  const generoFiltrado = filtroGenero(personagens, generoEscolhido.value);
  cardsNaTela(generoFiltrado);
})

const especieEscolhida = document.getElementById('especie');
especieEscolhida.addEventListener("change", () => {
  const personagensFiltrados = filtroEspecie(personagens, especieEscolhida.value);
  cardsNaTela(personagensFiltrados);
})
