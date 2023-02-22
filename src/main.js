import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

// console.log(example,data)

const filmes = data.films;
console.log(filmes);

const posters =  filmes.map(function(item){
  return item.poster
}
)

console.log(posters)

const root = document.getElementById("root");
root.innerHTML = `<img src="${posters}">`

