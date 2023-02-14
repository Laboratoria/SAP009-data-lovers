import {filterRelease} from './data.js'; 

import data from './data/ghibli/ghibli.js';

const films = data.films
const movies = document.getElementById('movieCards')
const release = document.getElementById('release')

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

release.addEventListener ('click', () => {
  const selected = (release).value;
  const filterRelease = data.filterRelease(films, selected)
  showingMovieCards(filterRelease)
})





console.log(data, filterRelease)