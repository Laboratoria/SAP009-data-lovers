import {sortByOrderFilms, sortByRelease} from './data.js';
import data from './data/ghibli/ghibli.js';

// Função dos cards na tela
function sectionMovies(movies){
  document.getElementById('infoMovies').innerHTML = movies.map((movie) => `
  <div class="cardFront">  
  <img class="imgFront" data-id="${movie.id}" src="${movie.poster}" alt="Poster do filme">
  <p class="name">${movie.title}</p>
  </div>
  `).join("") 
}
sectionMovies(data.films)

// Função da janela modal
function modalFilmes(modalID, filmeID){
  const modal = document.getElementById(modalID);
  modal.classList.add('showModal')
  modal.addEventListener('click', (evento) => {
    if(evento.target.id == modalID || evento.target.className == 'closeModal') {
      modal.classList.remove('showModal');
    }
  })
  
  const filmes = data.films.filter(filme => {
    return filme.id == filmeID
    })
    
  const movies = filmes[0]

  const modalContent = modal.querySelector('.modal-content')
  console.log(movies)

  modalContent.innerHTML = `
    <h1>${movies.title}</h1><br>
          <p><strong>Description</strong>: ${movies.description}</p><br>
          <p><strong>Director</strong>: ${movies.director}</p><br>
          <p><strong>Producer</strong>: ${movies.producer}</p><br>
          <p><strong>Date</strong>: ${movies.release_date}</p><br> 
  `;
}

const image = document.getElementById('infoMovies');
image.addEventListener('click', function(e) {
  modalFilmes('modalChar', e.target.dataset.id);
})

const films = data.films
const orderBy = document.getElementById('orderBy')
const movies = document.querySelector('infoMovies')
const assessmentOption = document.getElementById('assessmentOption')

// Função ordenar por A-Z/Z-A
orderBy.addEventListener ('change', () => {
  const pressed = (orderBy).value;
  const sortedOrder = sortByOrderFilms(films, pressed)
  const cards = sectionMovies(sortedOrder)
  movies.innerHTML = cards
})

// Função filtrar mais/menos avaliados
assessmentOption.addEventListener ('change', () => {
  const selected = (assessmentOption).value;
  const sorted = sortByRelease(films, selected)
  const card = sectionMovies(sorted)
  movies.innerHTML = card
})

