import {films} from './data.js';
import data from './data/ghibli/ghibli.js';


function sectionCharacters(persona){
  document.getElementById('infoCharacters').innerHTML = persona.map((studio) => 
  studio.people.map(film =>`
  <div class="cardFront">
  <img class="foto" src="${film.img}" alt="Poster do Personagem">
  <p class="name">${film.name}</p>
  `).join("") 
)}
sectionCharacters(data.films)


// Função para janela modal
function modalID(modalID){
  const modal = document.getElementById(modalID);
  modal.classList.add('showModal')
  modal.addEventListener('click', (evento) => {
    if(evento.target.id == modalID || evento.target.className == 'closeModal') {
      modal.classList.remove('showModal');
    }
  })
  
  /*data.films.filter(itematual => {
    return itematual.people.filter((personagemAtual) => {
      return personagemAtual.id == modalID.id
    })
  })

  modal.innerHTML = "";

  modal.innerHTML = `
    <h1>${modalID.name}</h1>
      <img class="poster" src="${modalID.img}">
          <h3>Age:${modalID.age}</h3>
          <h3>Gender: ${modalID.gender}</h3>
          <h3> Specie: ${modalID.specie}</h3>
          <h3>Hair Color: ${modalID.hair_color}</h3>
          <h3>Eye Color: ${modalID.eye_color}</h3>
  `;*/
}

const image = document.querySelector('.cardFront');
image.addEventListener('click', function() {
  modalID('modalChar');
})
