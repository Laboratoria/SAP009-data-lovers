import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

// console.log(example,data)

const arrayGhibli = data;
const filmes = arrayGhibli["filmes"]

const cartaz = filmes.map(function(item){
  return item.poster;
})

console.log(cartaz);

const root = document.getElementById("root");

root.innerHTML = `${cartaz}`

