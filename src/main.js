import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

// console.log(example,data)

const arrayGhibli = data;
const filmes = arrayGhibli.films;
console.log(filmes);

const posters =  filmes.map(function(item){
  return item.poster
})

const root = document.getElementById("root");

root.innerHTML = `<img src="${posters}">`

