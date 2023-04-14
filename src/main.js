
import { filtrarPorFuncao, ordenacaoAz, ordenacaoZa } from './data.js';
import data from './data/lol/lol.js';

const printarCards = document.getElementById('printarCards');
const selectChampion = document.getElementById('selectChampion'); //pegar o select do HTML pelo id 
const selectOrder = document.getElementById('selectOrder');
const allChampions = data.data;
const arrayAllChampions = Object.values(allChampions);

criarCards(arrayAllChampions)
selectChampion.addEventListener("change", ()=> {  
  const funcao = selectChampion.value //pegou o valor que o usuario selecionou 
  const arrayFiltrado = filtrarPorFuncao(arrayAllChampions,funcao)
  criarCards(arrayFiltrado); //criar uma função que pegue esse valor e print na tela
  return funcao
});

selectOrder.addEventListener("change", ()=> {  
  const ordenar = selectOrder.value 
  let arrayFiltrado;
  if (selectOrder.value === 'a-z') { 
    arrayFiltrado = ordenacaoAz(arrayAllChampions,ordenar);
  } else {
    arrayFiltrado = ordenacaoZa(arrayAllChampions,ordenar); 
  }
  criarCards(arrayFiltrado); 
  return ordenar
});


function criarCards(array){  //função que pega os dados e cria o card quando o usuario seleciona
  printarCards.innerHTML = "" //limpar todo conteudo antes de aparecer os itens filtrados
  for (const champion in array) {
    const photo = array[champion].splash;
    const name = array[champion].name;
    const attack = array[champion].info.attack;
    const defense = array[champion].info.defense;
    const template=(`<section class="cards">
    <img src = '${photo}'>
    <div class='texto'><p>${name}</p><details><summary>info:</summary><p>Ataque:${attack}</p><p>Defesa:${defense}</p></details>
    </div></section>`)
    printarCards.innerHTML += template;
  }
  
}

/* Adicionar o evento de change no select de ordenação 
puxar o valor selecionado 
passar o array e o tipo de ordenação pra função de ordenação 
criar a função de ordenação no data.js com os paramentros de array e tipos de ordenação 
usar o sort pra fazer a ordenação */