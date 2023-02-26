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
//, posicaoIndex, arrayCompleta
