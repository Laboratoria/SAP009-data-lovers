import {getCharacterByID, getCharacters, sortByOrderCharacters, filterGender, filterFilm} from './data.js';
import data from './data/ghibli/ghibli.js';

// --- FUNÇÕES GERAIS DA TELA ---

const allCharacters = getCharacters(data.films)

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
sectionCharacters(allCharacters)

// Função para janela modal
function modalPersona(modalID, personagemID){
  const modal = document.getElementById(modalID);
  modal.classList.add('showModal')
  modal.addEventListener('click', (evento) => {
    if(evento.target.id === modalID || evento.target.className ==='closeModal') {
      modal.classList.remove('showModal');
    }
  })
  
  const personagem = getCharacterByID(allCharacters, personagemID)
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

// --- FUNÇÕES DE ORDENAÇÃO/FILTROS --- 

// Ordenação
const orderBy = document.getElementById('orderBy')

orderBy.addEventListener ('change', () => {
  const pressed = (orderBy).value;
  const sortedOrder = sortByOrderCharacters(allCharacters, pressed)
  sectionCharacters(sortedOrder)
})

// Filtro Gênero 
const genderOption = document.getElementById('genderOption')

genderOption.addEventListener ('change', () =>{
  const gender = (genderOption).value;
  const filtro = filterGender(allCharacters, gender)
  sectionCharacters(filtro)  
})

// Filtro  personagem por Filme
const movies = document.getElementById('movies')

movies.addEventListener ('change', () =>{
  const title = (movies).value;
  const filme = filterFilm(data.films, title)
  sectionCharacters(filme.people)
})