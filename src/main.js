//import {films} from './data.js';
import data from './data/ghibli/ghibli.js';

// Função dos cards na tela
function sectionMovies(movies){
  document.getElementById('infoMovies').innerHTML = movies.map((movie) => `
  <div class="cardFront">
  <p class="name">${movie.title}</p>
  <img data-id="${movie.id}" data-melancia="melancia" src="${movie.poster}" alt="Poster do filme">
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

  const movie = filmes[0]

  const modalContent = modal.querySelector('.modal-content')
  console.log(movie)

  modalContent.innerHTML = `
    <h1>${movie.title}</h1>
          <h3>Description:${movie.description}</h3>
          <h3>Director: ${movie.director}</h3>
          <h3>Producer: ${movie.producer}</h3>
          <h3>Date: ${movie.release_date}</h3>
  `;
}

const image = document.querySelector('.cardFront');
image.addEventListener('click', function(e) {
  console.log(e.target.dataset);
  console.log(e.target.dataset.melancia);
  modalFilmes('modalChar', e.target.dataset.id);
})


