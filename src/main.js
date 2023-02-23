import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


const pokemons = data.pokemon;

const mostrarPokemonTela = document.getElementById("inserirCards");

function mostrarPokemon(data) {
  mostrarPokemonTela.innerHTML = data.map((item) =>
    `  <div class = "cards-box">
        <div class = "flip-cards">
              <div class= "cards-container-frente">
                <div class = "extra-info1"> 
                  <h2 class = "nome-pokemons">${item.name}</h2> 
                  <img class ="img-estilo" src=${item.img}>
                  <p class = "tipos-pokemons"> ${item.type.join(" / ")} </p>                   
            </div>
            </div>
            <div class = "cards-container-posterior">
                <div class = "extra-info2"> <p class="letras"> <span>Altura </span>${item.size.height}</p></div>
                <div class = "extra-info2"> <p class="letras"> <span>Peso </span>${item.size.weight}</p></div>
                <div class = "extra-info2"> <p class="letras"> <span>Evolução </span>${item.candycost}</p></div>
                <div class = "extra-info2"> <p class="letras"> <span>Resistências </span>${item.resistant.join(", ")}</p></div>
                <div class = "extra-info2"> <p class="letras"> <span>Fraquezas </span>${item.weaknesses.join(", ")}</p></div>
             </div> 
        </div>  
     </div>  
  
 `
  ).join("")

}
mostrarPokemon (pokemons)


