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
