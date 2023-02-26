
import { filtrarCasa } from "./data.js";
import harryData from "./data/harrypotter/harry.js";

const selecionarPersonagemPorCasa = document.getElementById("personagensCasa");
const animationCards = document.querySelector(".animation-cards");
const linkPersonagens = document.getElementById("listaPerso");
const allPersonagens = harryData.characters;
linkPersonagens.addEventListener("click", printarCards);

function printarCards() {
  const animationCardsHTML = allPersonagens
    .map(
      (element, index) =>
        `      
        <div class="cards">     
          <p id="film-title" class="film-info">${element.name}</p>
          <p class="film-info">${element.books_featured_in}</p>
          </div>
      `
    )
    .join("");

  animationCards.innerHTML = animationCardsHTML;
}
// showAnimations(personagens);

selecionarPersonagemPorCasa.addEventListener("change", filtrarPersonagens); //sempre que mudar o select vai haver um evento para teste
function filtrarPersonagens() {
  console.log(selecionarPersonagemPorCasa.value);
  //meus argumentos são conforme as informações que eu quero atribuir
  const filtrarPersonagensCasa = filtrarCasa(
    allPersonagens,
    selecionarPersonagemPorCasa.value
  );
  console.log(filtrarPersonagensCasa);
}
//, posicaoIndex, arrayComple

import {} from "./data.js";

import data from "./data/harrypotter/harry.js";

const animationCards = document.querySelector(".animation-cards");

const linkPersonagens = document.getElementById("listaPerso");
linkPersonagens.addEventListener("click", teste);
const allPersonagens = data.characters;

function teste() { 
  const animationCardsHTML = allPersonagens
    .map((element, index) => {
      return `      
        <div class="cards">         
          <p id="film-title" class="film-info">${element.name}</p>
          <p class="film-info">${element.species}</p>
        </div>
      `;
    })
    .join("");
  animationCards.innerHTML = animationCardsHTML;
}

const linkLivros = document.getElementById("listaLivros");
linkLivros.addEventListener("click", testeBook);
const allBooks = data.books;

function testeBook() { 

  const animationCardsHTML = allBooks
    .map((element, index) => {
      return `      
        <div class="cards">     
          <p id="film-title" class="film-info">${element.title}</p>
          <p class="film-info">${element.description}</p>
          <button class="more" id="${index}">More</button>
        </div>
      `;
    })
    .join("");
  animationCards.innerHTML = animationCardsHTML;
}
const linkFeitiços = document.getElementById("listaFeitiços");
linkFeitiços.addEventListener("click", testeFeitiços);
const allSpells = data.spells;

function testeFeitiços() { 

  const animationCardsHTML = allSpells
    .map((element, index) => {
      return `      
        <div class="cards">     
          <p id="film-title" class="film-info">${element.name}</p>
          <p class="film-info">${element.pronunciation}</p>
          <button class="more" id="${index}">More</button>
        </div>
      `;
    })
    .join("");
  animationCards.innerHTML = animationCardsHTML;
}
const linkCuriosidades = document.getElementById("listaCuriosidades");
linkCuriosidades.addEventListener("click", testeCuriosidades);
const allCuriosidades = data.funFacts;

function testeCuriosidades() { 

  const animationCardsHTML = allCuriosidades
    .map((element, index) => {
      return `      
        <div class="cards">     
          <p id="film-title" class="film-info">${element.type}</p>
          <p class="film-info">${element.content}</p>
          <button class="more" id="${index}">More</button>
        </div>
      `;
    })
    .join("");
  animationCards.innerHTML = animationCardsHTML;
}
// showAnimations(personagens);

