//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


(console.log(data.pokemon[0].name))
data.pokemon[0].type.forEach((element,indice, array) =>{
    console.log(element + " está no índice: "+indice + " " + array)
})



const cards = document.getElementById('cards')
const array = data.pokemon

cards.innerHTML = array.map((pokemon) =>  `
    <div class="display card-front card">
    <img src="${pokemon.img}" alt="charmander">
    <p class="pokemom-name">${pokemon.name}</p>
    <p class="pokemon-type">${pokemon.type}</P>
    </div>
    `
)


    //data.map((element) => )

/*frutas.forEach(function (item, indice, array) {
    //console.log(item, indice);
  });
  // Maçã 0
  // Banana 1*/


const searchInput = document.getElementById('search')
searchInput.addEventListener('keyup',()=>{
    console.log('input funcionando')
})

const filterTypes = document.getElementById('filter-types')
filterTypes.addEventListener('click', ()=>{
    console.log('filtro funcionando')
})

const btSearch = document.getElementById('bt-search')
btSearch.addEventListener('click', ()=>{
    console.log('botão de pesquisa funcionando')
})

const order = document.getElementById('order-by')
order.addEventListener('click', ()=>{
    console.log('ordenar funcionando')
})
