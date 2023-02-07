import {order} from './data.js'; 

import data from './data/ghibli/ghibli.js';

const films = data.films;
const cards = document.querySelector("#movieCards");

function showingMovieCards(itens) {
  cards.innerHTML = "";
  for (const films of itens) {
    const poster = films.poster;
    const title = films.title;
    const movieCards = `
        <div id="divCard" class="film">
        <strong class="movieTitle">${title}</strong>
        <button class="btn" type=button>
        <img alt="Film poster" src="${poster}"/>
        </button>
        </div>
        `;
    cards.innerHTML += movieCards;
  }
}

showingMovieCards(films);




console.log(order, data);

//Mostrar na tela a foto e o nome do personagem
//Mostrar na tela a foto e o nome dos locais/veículos
//Para isso, temos que acessar os dados e criar uma função para mostrá-los para a gente
