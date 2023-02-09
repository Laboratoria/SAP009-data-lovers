//import {order} from './data.js'; 

import data from './data/ghibli/ghibli.js';

const films = data.films
const infos = document.getElementById('#infos')

function showingMovieCards(films) {
  const showFilms = films.map((film) => {
    const catalogue =
    `
  <div id="divCard" class="film">

  <button class="btn" type=button>
  <img alt="Film poster" src="${film.poster}" id="filmPoster"/>
  </button>
  
  <div id="divText">
  <strong class="movieTitle">${film.title}</strong>
  </div>

  </div>
  `;
    return catalogue
  })
  return showFilms.join("");
}

function showingMovieInfos (films) {
  return `
  <div class="info-content">
    <h1>${films.title}</h1>
    <p class="info-director">Dirigido por ${films.director}</p>
    <div class="info-score">
      <p>Score: ${films.rt_score}</p> 
    </div>
    <div class="info-description">
      <p>${films.description}</p><br>
    </div>
    <button class="close">Sair</button>
  </div> 
  `
}

function printMovieCards (films){
  const movieCards = document.getElementById('movieCards');
  movieCards.innerHTML = showingMovieCards(films);

  const btnInfos = document.querySelector('.btn');

  for (let i = 0; i < films.length; i++) {
    const showInfos = catalogueInfos (films[i])
    btnInfos[i].addEventListener('click', showInfos);
  }
}
printMovieCards(films) //Mostra os cards na tela

function catalogueInfos (films) {
  return function (){
    infos.innerHTML = showingMovieInfos(films);
    const closeInfos = document.querySelector('.close');
    closeInfos.addEventListener('click', btnHideInfos);
    showInfos();
  }
}

infos.addEventListener ('click', hideInfos);

function showInfos(){
  infos.style.display = "block"
}

function btnHideInfos(){
  infos.style.display = "none";
}

function hideInfos(e){
  if (e.target === infos){
    infos.style.display = "none";
  }
}

console.log(data);