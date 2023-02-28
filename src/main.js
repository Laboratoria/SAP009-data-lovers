import {filtrarNome} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


const pokemons = data.pokemon;
const mostrarPokemonTela = document.getElementById("inserirCards");
const filtrarNomesPokemons = document.getElementById("buscarPokemon");

filtrarNomesPokemons.addEventListener("keyup", () => {
  const text = filtrarNomesPokemons.value;
  const procurarPokemon = filtrarNome (pokemons, text);
  mostrarPokemon.innerHTML = mostrarPokemon (procurarPokemon);
});

// variavel jutando a função filtro com a variavel de filtrarNomesPokemons

function mostrarPokemon(data) {
  mostrarPokemonTela.innerHTML = data.map((item) =>
    ` <div class = "cards-box">
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
            <div class = "extra-info2"> <p class="letras"> <span>Resistências </span>${item.resistant.join(", ")}</p></div>
            <div class = "extra-info2"> <p class="letras"> <span>Fraquezas </span>${item.weaknesses.join(", ")}</p></div>
          </div> 
        </div>  
      </div>  
 `
  ).join("")

}
mostrarPokemon (pokemons)

// Pegar o botão
const meuBotao = document.getElementById("myBtn");

// Quando usuário desce 20px do topo do documento, mostraro botão
window.onscroll = function() {scrollFuncao()};

function scrollFuncao() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    meuBotao.style.display = "block";
  } else {
    meuBotao.style.display = "none";
  }
}

// Quando o usuário clica no botao, rola para o topo do documento

function topFuncao() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE e Opera
}


