import {sortByRelease, sortByOrder, sortByDirector} from './data.js'; 

import data from './data/ghibli/ghibli.js';


const films = data.films
const movies = document.getElementById('movieCards')
const release = document.getElementById('release')
const order = document.getElementById('order')
const director = document.getElementById('director')
//const movieSearch = document.getElementById('movies-search')

function showingMovieCards(films) {
  const listOfMovies = films.map((film) => {
    const allMovies = 
    `
    <div id="container">
    <div id="card">

    <div id="frontCard" class="movies">

    <img alt="Film poster" src="${film.poster}" id="filmPoster"/>
    
    <div id="divText">
    <strong class="movieTitle">${film.title}</strong>
    </div>

    <ul style="list-style: none;">
    <li id="director">${film.director}</li>
    <li id="releaseDate">${film.release_date}</li>
    </ul>

    </div>


    <div id="backCard" class="movies">
    <p id="description"><strong>Description:</strong> ${film.description}</p>
    </div>

    </div>
    </div>
    `
    return allMovies
  });
  return listOfMovies.join('');
}

movies.innerHTML = showingMovieCards(films)


//Função para ordenar por A-Z/Z-A --- ALTERAR NOME DA FUNÇÃO QUANDO FOR TRABALHAR COM OS PERSONAGENS
order.addEventListener ('change', () => {
  const pressed = (order).value;
  const sortedOrder = sortByOrder(films, pressed)
  const cards = showingMovieCards(sortedOrder)
  movies.innerHTML = cards
  
  if(pressed === 'za') {
    const pressed = (order).value;
    const sortedOrder = sortByOrder(films, pressed).reverse()
    const cards = showingMovieCards(sortedOrder)
    movies.innerHTML = cards
  }
  
  console.log(sortedOrder)
})

//Função para ordenar por data de lançamento
release.addEventListener ('change', () => {
  const selected = (release).value;
  const sorted = sortByRelease(films, selected)
  const card = showingMovieCards(sorted)
  movies.innerHTML = card
  
  if(selected === 'oldest') {
    const sortedReverse = sortByRelease(films, selected).reverse()
    const cardsReversed = showingMovieCards(sortedReverse)
    movies.innerHTML = cardsReversed
  }
  
  console.log(sorted)
})

//Função para filtrar os diretores
director.addEventListener ('change', () => {
  const selected = (director).value
  const sorted = sortByDirector(films, selected)
  const card = showingMovieCards(sorted)
  movies.innerHTML = card
  
  console.log(sorted)
})

/*1. pegar as informações da tag director(getElementById)
 2. criar um addEventListener para essa tag
 3. pegar o valor da tag
 4. separar os diretores

*/