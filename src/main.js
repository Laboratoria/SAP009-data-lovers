import data from "./data/harrypotter/harry.js";
import {
  harryFunçoes,
  selecionaNomeAz,
  selecionaNomeZa,
  calcPorcentagem,
  filtrarCasa,
  filtrarPersonagemCasa,
} from "./data.js";

const animationCards = document.querySelector(".animation-cards");

const linkPersonagens = document.getElementById("listaPerso");
linkPersonagens.addEventListener("click", exibirPersonagens);
const todosPersonagens = data.characters;

const campoBusca = document.getElementById("exibir1");

function exibirPersonagens() {
  const animationCardsHTML = todosPersonagens
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
  const filtrarPersonagem = harryFunçoes(personagemBuscado, todosPersonagens);
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
  const ordenadoAz = selecionaNomeAz(data.characters);
  const animationCardsHTML = ordenadoAz
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
  const ordenadoZa = selecionaNomeZa(data.characters);
  const animationCardsHTML = ordenadoZa
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
const selecionarPersonagemPorCasa = document.getElementById("selectFiltros");
selecionarPersonagemPorCasa.addEventListener("change", function (event) {
  const valor = event.target.value;
  const listaPersonagensFiltradosPorCasa = filtrarPersonagemCasa(
    todosPersonagens,
    valor
  );
  animationCards.innerHTML = listaPersonagensFiltradosPorCasa
    .map((element) => {
      `      
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
});

const printar = document.getElementById("mensagemCalculo");
selecionarPersonagemPorCasa.addEventListener("change", function (event) {
  const listaNome = filtrarCasa(event.target.value, todosPersonagens);
  const percentPersonagens = calcPorcentagem(
    listaNome.length,
    todosPersonagens.length
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
