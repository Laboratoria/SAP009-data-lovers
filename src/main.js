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

function modalID(modalID){
  const modal = document.getElementById(modalID);
  modal.classList.add('showModal')
  modal.addEventListener('click', (evento) => {
    if(evento.target.id == modalID || evento.target.className == 'closeModal') {
      modal.classList.remove('showModal');
    }
  })
}

const image = document.querySelector('.cardFront');
image.addEventListener('click', function() {
  modalID('modalChar');
})


