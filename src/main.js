import {filtrarNome, filtrarTipo, filtrarRegiao, calcPorcentagem} from './data.js';

import data from './data/pokemon/pokemon.js';


const pokemons = data.pokemon;
const mostrarPokemonTela = document.getElementById("inserirCards");
const filtrarNomesPokemons = document.getElementById("buscarPokemon");
const selecionarTipo = document.getElementById("selecionarTipo");
const selecionarRegiao = document.getElementById("regiaoPokemon");
const porcentagemTipo = document.getElementById("porcentagem-tipo");


const iconesTiposPokemons = (listaTipo) => {
  let tipoIcone = "";
  listaTipo.map((tipoElemento) => {
    tipoIcone += `<img class = "tipospoke" src = "./img/tipospokemons/${tipoElemento}.png" alt="tipo de pokemons"/>`;
  });
  return tipoIcone
}

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
              <div class = "tipos-pokemons"> ${iconesTiposPokemons(item.type)}</div>        
            </div>
          </div>
          <div class = "cards-container-posterior">
            <div class = "extra-info2"> <p class="letras"> <span>Altura </span>${item.size.height}</p></div>
            <div class = "extra-info2"> <p class="letras"> <span>Peso </span>${item.size.weight}</p></div>
            <div class = "extra-info2"> <p class="letras"> <span>Região </span>${item.generation.name}</p></div>
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


filtrarNomesPokemons.addEventListener("keyup", () => {
  const nome = filtrarNomesPokemons.value;
  const procurarPokemon = filtrarNome (pokemons, nome);
  mostrarPokemon.innerHTML = mostrarPokemon (procurarPokemon);
});

selecionarTipo.addEventListener("change", () => {
  const tipo = selecionarTipo.value;
  const tipoPokemon = filtrarTipo (pokemons, tipo);
  mostrarPokemon.innerHTML = mostrarPokemon(tipoPokemon);
  const tipoPorcentagem = calcPorcentagem(
    pokemons.length,
    tipoPokemon.length
  );
  
  porcentagemTipo.innerHTML = 
    Math.round(tipoPorcentagem) + "% dos Pokémons são desse tipo"
    //  Math.round é uma função que retorna o valor de um número arredondado para o inteiro mais proximo
});


selecionarRegiao.addEventListener("change", () => {
  const regiao = selecionarRegiao.value;
  const regiaoPokemon = filtrarRegiao (pokemons, regiao);
  mostrarPokemon.innerHTML = mostrarPokemon(regiaoPokemon);
});


// Pegar o botão
const meuBotao = document.getElementById("myBtn")
meuBotao.addEventListener('click', topFuncao);

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


