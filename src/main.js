//import {films} from './data.js';
import data from './data/ghibli/ghibli.js';

// Função dos cards na tela
function sectionMovies(items){
  document.getElementById('infoMovies').innerHTML = items.map((studio) => `
  <div class="cardFront">
  <p class="name">${studio.title}</p>
  <img src="${studio.poster}" alt="Poster do filme">
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
  
  let filmes = []
  data.films.map(filme => {
    const filmesFiltrados = filme.map((filmeAtual) => {
      return filmeAtual.id == filmeID
    })
    
    filmes = [...filmes, ... filmesFiltrados]
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


