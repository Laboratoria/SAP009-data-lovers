import {films} from './data.js';
import data from './data/ghibli/ghibli.js';


function sectionCharacters(persona){
  document.getElementById('infoCharacters').innerHTML = persona.map((studio) => 
  studio.people.map(film =>`
  <div class="cardFront">
  <p class="name">${film.name}</p>
  <img class="foto" src="${film.img}" alt="Poster do Personagem">
  `).join("") 
)}
sectionCharacters(data.films)


// Função para janela modal
function modalPersona(modalID, data){
  console.log(modalID)
  const modal = document.getElementById(modalID);
  modal.classList.add('showModal')
  modal.addEventListener('click', (evento) => {
    if(evento.target.id == modalID || evento.target.className == 'closeModal') {
      modal.classList.remove('showModal');
    }
  })

  const teste = document.getElementById('teste')
  teste.innerHTML = `teste`
}

const image = document.querySelector('.cardFront');
image.addEventListener('click', function() {
  modalPersona('modalChar');
})

/*const modalData = document.querySelector(".modal")

data.films.filter(itemAtual => {
    return itemAtual.people.filter((personagemAtual) => {
      return personagemAtual.id == modalPersona.id
    })
  })

  modalData.innerHTML = `
    <h1>${modalPersona.name}</h1>
      <img class="poster" src="${modalPersona.img}">
          <h3>Age:${modalPersona.age}</h3>
          <h3>Gender: ${modalPersona.gender}</h3>
          <h3> Specie: ${modalPersona.specie}</h3>
          <h3>Hair Color: ${modalPersona.hair_color}</h3>
          <h3>Eye Color: ${modalPersona.eye_color}</h3>
  `;*/