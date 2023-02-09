//import { example } from "./data.js";
import { films } from "./data.js";
import data from "./data/ghibli/ghibli.js";
const allAnimations = data.films;

//const showAnimations = (allAnimations) => {
document.querySelector(".animation_cards").innerHTML =
  showAnimations(allAnimations);

function showAnimations(allAnimations) {
  return allAnimations
    .map(
      (animation) =>
        `
  <div class="cards">
  <img class="posters" src="${animation.poster}" alt="Pôster do filme">
  <p class="film-info">${animation.title} </p>
  <p class="film-info"> ${animation.release_date}</p>
  </div>
  `
    )
    .join("");
}

//CREATE ELEMENT E APPENDCHILD DE EXEMPLO
const list = document.getElementById("list-container");
function createElement(data) {
  // Cria um novo elemento div
  const newDiv = document.createElement("div");
  // Adiciona conteúdo ao novo elemento div
  newDiv.innerHTML = "Total number of animations produced by Studio Ghibli: " + data.length;
  // Adiciona o novo elemento div ao documento HTML
  list.appendChild(newDiv);
}

createElement(allAnimations);

function teste() {
  films.alphaFilter();
} teste();