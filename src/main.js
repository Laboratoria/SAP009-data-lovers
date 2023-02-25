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
