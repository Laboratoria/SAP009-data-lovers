import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


const pokemons = data.pokemon;

function mostrarPokemon(data) {
  const mostrarPokemonTela = document.getElementById("inserirCards");
  mostrarPokemonTela.innerHTML = data.map((item) =>
    `
    <div class = "cards-container">
   <div class= "cards-container-frente">
      <h2 class = "nome-pokemons">${item.name}</h2>
      <img class ="img-estilo" src=${item.img}>
      <p class = "tipos-pokemons"> ${item.type.join(" ")}</p>                   
    </div>
 </div>
 `
  ).join("")

}
mostrarPokemon(pokemons)

// Get the button:
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
