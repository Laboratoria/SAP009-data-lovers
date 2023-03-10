import data from "./data/harrypotter/harry.js";
import {
  harryFunçoes,
  filtroCasa,
  selectNameAz,
  selectNameZa,
  calcPercentage,
  filterHouse,
} from "./data.js";

const animationCards = document.querySelector(".animation-cards");

const linkPersonagens = document.getElementById("listaPerso");
linkPersonagens.addEventListener("click", todosPersonagens);
const allPersonagens = data.characters;

const campoBusca = document.getElementById("exibir1");

function todosPersonagens() {
  const animationCardsHTML = allPersonagens
    .map((element) => {
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

//FILTRO A - Z
const buttonAz = document.getElementById("az");
buttonAz.addEventListener("click", () => {
  const ordenado = selectNameAz(data.characters);
  const animationCardsHTML = ordenado
    .map((element) => {
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
});

//FILTRO Z - A
const buttonZa = document.getElementById("za");
buttonZa.addEventListener("click", () => {
  const ordenado = selectNameZa(data.characters);
  const animationCardsHTML = ordenado
    .map((element) => {
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
});

//VER TODAS AS CASAS
const selectCharacters = document.getElementById("selectFiltros");
selectCharacters.addEventListener("change", function (event) {
  const valor = event.target.value;
  const listCharacterHouseFilter = filtroCasa(allPersonagens, valor);
  animationCards.innerHTML = listCharacterHouseFilter
    .map((element) => {
      `      
      <div class="cards"> 
      <p id="nomePersonagens" class="infoPersonagens"><b>${element.name}</p>
      <p class="infoPersonagens"><b>Espécie:</b>${element.species}</p>
      <p class="infoPersonagens"><b>Livro:</b>${element.books_featured_in}</p>
      <p class="infoPersonagens"><b>Idade:</b>${element.death}</p>
      <p class="infoPersonagens"><b>Casa:</b>${element.house}</p>
    </div>
`;
    })
    .join("");
});

const printar = document.getElementById("mensagemCalculo");
selectCharacters.addEventListener("change", function (event) {
  const listaNome = filterHouse(event.target.value, allPersonagens);
  const percentPersonagens = calcPercentage(
    listaNome.length,
    allPersonagens.length
  );
  printar.innerHTML =
    percentPersonagens +
    "%" +
    " de personagens que estudam em Hogwarts são da casa " +
    event.target.value;
  animationCards.innerHTML = listaNome
    .map((element) => {
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
  // animationCards.innerHTML = listaNome;
});
