import {films} from './data.js';
import data from './data/ghibli/ghibli.js';


function sectionCharacters(persona){
  document.getElementById('infoCharacters').innerHTML = persona.map((studio) => 
  studio.people.map(film =>`
  <div class="cardFront">
  <img src="${film.img}" alt="Poster do filme">
  <p class="name">${film.name}</p>
  `).join("") 
)}
sectionCharacters(data.films)