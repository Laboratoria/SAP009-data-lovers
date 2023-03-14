import {getCharacterByID, getCharacters, filterGender, filterFilm} from './data.js';
import data from './data/ghibli/ghibli.js';

// Função para imprimir os cards na tela
function sectionCharacters(characters){
  document.getElementById('infoCharacters').innerHTML = characters.map((personagem) => 
    `
    <div class="cardFront">
    <img class="imgFront" data-id="${personagem.id}" class="foto" src="${personagem.img}" alt="Poster do Personagem">
    <p class="name">${personagem.name}</p>
    </div>`
  ).join("")
}
sectionCharacters(getCharacters(data.films))


// Função para janela modal
function modalPersona(modalID, personagemID){
  const modal = document.getElementById(modalID);
  modal.classList.add('showModal')
  modal.addEventListener('click', (evento) => {
    if(evento.target.id === modalID || evento.target.className ==='closeModal') {
      modal.classList.remove('showModal');
    }
  })
  
  const personagens = getCharacters(data.films) 

  const personagem = getCharacterByID(personagens, personagemID)

  const modalContent = modal.querySelector('.modal-content')

  modalContent.innerHTML = `
    <h1>${personagem.name}</h1>
      <img class="poster" src="${personagem.img}">
          <p><strong>Age</strong>:${personagem.age}</p>
          <p><strong>Gender</strong>: ${personagem.gender}</p>
          <p><strong>Specie</strong>: ${personagem.specie}</p>
  `;
}

const image = document.getElementById('infoCharacters');
image.addEventListener('click', function(e) {
  modalPersona('modalChar', e.target.dataset.id);
})


// Filtro Genero 
const genderOption = document.getElementById('genderOption')

genderOption.addEventListener ('change', () =>{
  const gender = (genderOption).value;
  const characters = getCharacters(data.films)
  const filtro = filterGender(characters, gender)
  sectionCharacters(filtro)  
})

// Filtro por filme

const movies = document.getElementById('movies')

movies.addEventListener ('change', () =>{
  const title = (movies).value;
  const filme = filterFilm(data.films, title)
  sectionCharacters(filme.people)
})