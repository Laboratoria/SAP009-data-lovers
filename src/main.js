import data from "./data/harrypotter/harry.js";
import { harryFunçoes, filterHouse, selectNameAz,  selectNameZa } from "./data.js";

const animationCards = document.querySelector(".animation-cards");

const linkPersonagens = document.getElementById("listaPerso");
linkPersonagens.addEventListener("click", todosPersonagens);
const allPersonagens = data.characters;

const campoBusca = document.getElementById("exibir1");
// fieldSearch.addEventListener('change')

function todosPersonagens() {
  const animationCardsHTML = allPersonagens
    .map((element, index) => {
      return `      
        <div class="cards"> 
          <p id="nomePersonagens" class="infoPersonagens"><b>${element.name}</b></p>
          <p class="infoPersonagens"><b>Espécie:</b>${element.species}</p>
          <p class="infoPersonagens"><b>Livro:</b>${element.books_featured_in}</p>
          <p class="infoPersonagens"><b>Idade:</b>${element.death}</p>
          <p class="infoPersonagens"><b>Casa:</b>${element.house}</p>
        </div>
      `;
    })
    .join("");
  animationCards.innerHTML = animationCardsHTML;
}

//CAMPO BUSCAR POR DIGITAÇÃO = OK
campoBusca.addEventListener("keyup", function (event) {
  const personagemBuscado = event.target.value;
  const filtrarPersonagem = harryFunçoes(personagemBuscado, allPersonagens);
  animationCards.innerHTML = filtrarPersonagem
    .map(
      (element) =>
        `      
        <div class="cards"> 
        <p id="nomePersonagens" class="infoPersonagens"><b>${element.name}</b></p>
        <p class="infoPersonagens"><b>Espécie:</b>${element.species}</p>
        <p class="infoPersonagens"><b>Livro:</b>${element.books_featured_in}</p>
        <p class="infoPersonagens"><b>Idade:</b>${element.death}</p>
        <p class="infoPersonagens"><b>Casa:</b>${element.house}</p>
      </div>
`
    )
    .join("");
});

//POÇÔES

const listaFeitiços = document.getElementById("listaFeitiços");
listaFeitiços.addEventListener("click", Feitiços);
const allSpells = data.spells;

function Feitiços() {
  const poçoesCardsHTML = allSpells
    .map((element, index) => {
      return `      
        <ul class="listaFeitiços">     
          <li id="feitiços" class="infoFeitiços">${element.name}</li>
          <li class="infoFeitiços">${element.pronunciation}</li>          
        </ul>
      `;
    })
    .join("");
  animationCards.innerHTML = poçoesCardsHTML
}

const linkCuriosidades = document.getElementById("listaCuriosidades");
linkCuriosidades.addEventListener("click", curiosidades);
const allCuriosidades = data.funFacts;

function curiosidades() {
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

const linkLivros = document.getElementById("listaLivros");
linkLivros.addEventListener("click", coleçaoLivros);
const allBooks = data.books;

function coleçaoLivros() {
  const animationCardsHTML = allBooks
    .map((element, index) => {
      return `    
      <div>  
        <div class="cards">  
          <p id="film-title" class="film-info">${element.title}</p>
          <p class="film-info">${element.description}</p>
          <button class="more" id="${index}">More</button>
        </div>
      </div>
      `;
    })
    .join("");
  animationCards.innerHTML = animationCardsHTML;
}
//FILTRO A - Z
const buttonAz = document.getElementById("az");
buttonAz.addEventListener("click", () => {
  const ordenado = selectNameAz(data.characters)
  const animationCardsHTML = ordenado
    .map((element, index) => {
      return `      
      <div class="cards"> 
        <p id="nomePersonagens" class="infoPersonagens"><b>${element.name}</b></p>
        <p class="infoPersonagens"><b>Espécie:</b>${element.species}</p>
        <p class="infoPersonagens"><b>Livro:</b>${element.books_featured_in}</p>
        <p class="infoPersonagens"><b>Idade:</b>${element.death}</p>
        <p class="infoPersonagens"><b>Casa:</b>${element.house}</p>
      </div>
    `;
    })
    .join("");
  animationCards.innerHTML = animationCardsHTML;
})

//FILTRO Z - A
const buttonZa = document.getElementById("za");
buttonZa.addEventListener("click", () => {
  const ordenado = selectNameZa(data.characters)
  const animationCardsHTML = ordenado
    .map((element, index) => {
      return `      
      <div class="cards"> 
        <p id="nomePersonagens" class="infoPersonagens"><b>${element.name}</b></p>
        <p class="infoPersonagens"><b>Espécie:</b>${element.species}</p>
        <p class="infoPersonagens"><b>Livro:</b>${element.books_featured_in}</p>
        <p class="infoPersonagens"><b>Idade:</b>${element.death}</p>
        <p class="infoPersonagens"><b>Casa:</b>${element.house}</p>
      </div>
    `;
    })
    .join("");
  animationCards.innerHTML = animationCardsHTML;
})

//VER TODAS AS CASAS
// const selectCharacters = document.getElementById("selectFiltros");
// selectCharacters.addEventListener("change", function (event) {
//   const listCharacterHouseFilter = allPersonagens;
//   let listName;
//   if (event.target.value === "VerTodos") {
//     todosPersonagens();
//   } else {
//     listName = filterHouse(event.target.value, allPersonagens);
    
//     console.log("house");
//   }
//   listCharacterHouseFilter.innerHTML = listName.map().join("");
// });




