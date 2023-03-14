import {filmPeople} from './data.js';
import data from './data/ghibli/ghibli.js';

// Função para imprimir os cards na tela
function sectionCharacters(persona){
  document.getElementById('infoCharacters').innerHTML = persona.map((studio) => 
  studio.people.map(personagem =>`
  <div class="cardFront">
  <img class="imgFront" data-id="${personagem.id}" class="foto" src="${personagem.img}" alt="Poster do Personagem">
  <p class="name">${personagem.name}</p>
  </div>
  `).join("") 
)}
sectionCharacters(data.films)


// Função para janela modal
function modalPersona(modalID, personagemID){
  /*console.log(personagemID)
  console.log(modalID)*/
  const modal = document.getElementById(modalID);
  modal.classList.add('showModal')
  modal.addEventListener('click', (evento) => {
    if(evento.target.id == modalID || evento.target.className == 'closeModal') {
      modal.classList.remove('showModal');
    }
  })
  
  let personagens = []
  data.films.forEach(filme => {
    const personagensFiltrados = filme.people.filter((personagemAtual) => {
      return personagemAtual.id == personagemID
    })
    personagens = [...personagens, ... personagensFiltrados]
  })

  const personagem = personagens[0]

  const modalContent = modal.querySelector('.modal-content')
  console.log(personagem)

  modalContent.innerHTML = `
    <h1>${personagem.name}</h1><br>
      <img class="poster" src="${personagem.img}"><br>
      <p><strong>Age</strong>:${personagem.age}</p><br>
          <p><strong>Gender</strong>: ${personagem.gender}</p><br>
          <p><strong>Specie</strong>: ${personagem.specie}</p><br>
  `;
}

const image = document.getElementById('infoCharacters');
image.addEventListener('click', function(e) {
  modalPersona('modalChar', e.target.dataset.id);
})

/*const modalData = document.querySelector(".modal")*/
