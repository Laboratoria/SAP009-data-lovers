// // import { example } from './data.js';
// // // import data from './data/lol/lol.js';
 import data from './data/lol/lol.js';

const allChampions = data.data; // aqui tem um objeto com todas as informaçoes dos camps. 

//a função mostra o objeto, com objetos dentro 
function showAnimation (allChampions) {
    console.log(allChampions);

// converte o objeto em array 
const championsArray = Object.values (allChampions);
// mostra a array convertida, acessada pelos indices de (0 a 134)
console.log(championsArray);
// acessa o item 11 da array e exibe o id, ou seja, nome do campeao 
console.log(championsArray[11].id);
//metodo map- para mapear a array 
return championsArray
 .map(
    //champion é cada personagem 
    //index é o número deles na tela
    (champion, index) =>
    <img id= "${index}" class ="posters" src="$ {champion.splash}" alt= "poster dos campeões">
        < p id= "championNameCard" class= "champion-name"> ${champion.id} </p>
        < p class="champion-name"> ${champion.tags}</p>
        <button class="more" id="${index}"> Mais iformação </button>
        </div>
 )
  .join("");
 } 
    
