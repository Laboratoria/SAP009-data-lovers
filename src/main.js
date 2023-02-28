import {films} from './data.js';
import data from './data/ghibli/ghibli.js';


function sectionMovies(items){
  document.getElementById('infoMovies').innerHTML = items.map((studio) => `
  <div class="cardFront">
  <p class="name">${studio.title}</p>
  <img src="${studio.poster}" alt="Poster do filme">
  `).join("") 
}
sectionMovies(data.films)


