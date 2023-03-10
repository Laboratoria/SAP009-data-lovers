import {sortByOrderFilms, sortByScore, filters} from './data.js';
import data from './data/ghibli/ghibli.js';

// Função dos cards na tela
function sectionMovies(movies){
  document.getElementById('infoMovies').innerHTML = movies.map((movie) => `
  <div class="cardFront">
  <p class="name">${movie.title}</p>
  <img data-id="${movie.id}" src="${movie.poster}" alt="Poster do filme">
  `).join("") 
}
sectionMovies(data.films)

// Função da janela modal
function modalFilmes(modalID, filmeID){
  /*console.log(personagemID)
  console.log(modalID)*/
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
    <h1>${movies.title}</h1>
          <h3>Description:${movies.description}</h3>
          <h3>Director: ${movies.director}</h3>
          <h3>Producer: ${movies.producer}</h3>
          <h3>Date: ${movies.release_date}</h3>
  `;
}

const image = document.querySelector('.cardFront');
image.addEventListener('click', function(e) {
  modalFilmes('modalChar', e.target.dataset.id);
})

const films = data.films
const orderBy = document.getElementById('orderBy')
const movies = document.querySelector('infoMovies')
const assessmentOption = document.getElementById('assessmentOption')
const director = document.getElementById('director')

// Função ordenar por A-Z/Z-A
orderBy.addEventListener ('change', () => {
  const pressed = (orderBy).value;
  const sortedOrder = sortByOrderFilms(films, pressed)
  const cards = sectionMovies(sortedOrder)
  movies.innerHTML = cards
})

// Função para filtrar por diretor
director.addEventListener('change', (event) => {
  const selectedDirector = event.target.value
  const filtered = filters(films, 'director', selectedDirector)
  const cards = sectionMovies(filtered)
  movies.innerHTML = cards
})

// Função filtrar mais/menos avaliados
assessmentOption.addEventListener ('change', () => {
  const selected = (assessmentOption).value;
  const sorted = sortByScore(films, selected)
  const card = sectionMovies(sorted)
  movies.innerHTML = card
})


