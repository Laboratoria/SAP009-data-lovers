// import {filterName} from './data.js';
import data from './data/ghibli/ghibli.js';

//transformando um objeto em array // const ghibli = Object.key(data.data); 
// console.log(teste.); // array de string

let infoGhibli = [];
for (let characters in data.data){
  infoGhibli.push(data.data[characters]);
}

const cards = document.ElementById("infoCards"); 

function screenInfo (data){
  cards.innerHTML = data.map(character) =>
  
}
screenInfo(data);

console.log(data);
