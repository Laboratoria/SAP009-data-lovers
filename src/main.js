
import { filtrarPorNome } from './data.js';
import data from './data/lol/lol.js';

const printarCards = document.getElementById('printarCards')
const selectChampion = document.getElementById('selectChampion'); //pegar o select do HTML pelo id 
//const selectOrder = document.getElementById('selectOrder');

console.log(printarCards)

criarCards()
selectChampion.addEventListener("change", ()=> {  
  const selecionar = selectChampion.value //pegou o valor que o usuario selecionou 
  criarCards(); //criar uma função que pegue esse valor e print na tela
  return selecionar
});

function criarCards(){  //função que pega os dados e cria o card quando o usuario seleciona
  const allChampions = data.data 

  for (const champion in allChampions) {
    const photo = allChampions[champion].splash;
    const name = allChampions[champion].name;
    const attack = allChampions[champion].info.attack;
    const template=(`<section class="cards">
    <div class='imagem'><img src = '${photo}'></div>
    <div class='texto'><p>${name}</p><p>Ataque: ${attack}</p>
    </div></section>`)
    printarCards.innerHTML += template;
  }
  
}

