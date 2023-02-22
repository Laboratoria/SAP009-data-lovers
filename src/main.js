// import { example } from './data.js';
// // import data from './data/lol/lol.js';
import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';

const allChampions = data.data;
console.log (allChampions);

const inputChampions= document.querySelector(".search");
inputChampions.addEventListener( "click", localizarChamp);
console.log(inputChampions);