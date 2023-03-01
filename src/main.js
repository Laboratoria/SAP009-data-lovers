import {filtrarNome} from './data.js';
// import data from './data/lol/lol.js';
import {ordenarPorNomeAZ} from './data.js';
// import data from './data/lol/lol.js';

import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//declarar as const que poderão ser utilizadas mais de uma vez
const pokemons = data.pokemon;
const mostrarPokemonTela = document.getElementById("inserirCards");
const filtrarNomesPokemons = document.getElementById("buscarPokemon");
const ordenarPokemons = document.getElementsByClassName("ordenar");

// código para mostrar na tela os pokemons filtrados por nome
filtrarNomesPokemons.addEventListener("keyup", () => {
  const text = filtrarNomesPokemons.value;
  const procurarPokemon = filtrarNome (pokemons, text);
  mostrarPokemon.innerHTML = mostrarPokemon (procurarPokemon);
});

//código para mostrar na tela os pokemons ordenados de forma alfabética



// código para mostrar pokemons nos cards com flip
function mostrarPokemon(data) {
  mostrarPokemonTela.innerHTML = data.map((item) =>{
    let evolution = "";
    if (item.evolution && item.evolution.nextevolution) {
      evolution = `<div class = "extra-info2"> <p class="letras"> <span>Evolução </span>${item.evolution.nextevolution[0].candycost} candies</p></div>`
    }
    return ` <div class = "cards-box">
        <div class = "flip-cards">
          <div class= "cards-container-frente">
            <div class = "extra-info1"> 
              <h2 class = "nome-pokemons">${item.num} - ${item.name}</h2> 
              <img class ="img-estilo" src=${item.img}>
              <p class = "tipos-pokemons"> ${item.type.join(" / ")} </p>                   
            </div>
          </div>
          <div class = "cards-container-posterior">
            <div class = "extra-info2"> <p class="letras"> <span>Altura </span>${item.size.height}</p></div>
            <div class = "extra-info2"> <p class="letras"> <span>Peso </span>${item.size.weight}</p></div>
            <div class = "extra-info2"> <p class="letras">${evolution}</div>
            <div class = "extra-info2"> <p class="letras"> <span>Resistências </span>${item.resistant.join(", ")}</p></div>
            <div class = "extra-info2"> <p class="letras"> <span>Fraquezas </span>${item.weaknesses.join(", ")}</p></div>
          </div> 
        </div>  
      </div>  
 `
  }).join("")

}
mostrarPokemon (pokemons)

// Pegar o botão para scroll to top
const meuBotao = document.getElementById("myBtn")
meuBotao.addEventListener("click",topFuncao);

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


