//import { example } from './data.js';
import  {searchData, filterPokemon, order, computerType} from '../src/data.js'; 
import data from './data/pokemon/pokemon.js';

const icons = {
  "steel": "🦾",
  "water": "💧",
  "dragon": "🐲",
  "electric": "⚡",
  "fairy": "🧚🏻",
  "ghost": "👻",
  "fire": "🔥",
  "ice": "🧊",
  "bug": "🐛",
  "fighting": "🥊",
  "normal": "💭",
  "rock": "⚙️",
  "grass": "🍀",
  "psychic": "💫",
  "dark": "🛸",
  "ground": "🌏",
  "poison": "🐍",
  "flying": "🪂"
};

const translate=(type) => {
  switch (type) {
  case "steel":
    return "Aço"
  case "water" :
    return "Água"
  case "electric":
    return "Elétrico"
  case "fairy":
    return "Fada"
  case "ghost":
    return "Fantasma"
  case "fire":
    return "Fogo"
  case "ice":
    return "Gelo"
  case "bug":
    return "Inseto"
  case "fighting":
    return "Lutador"
  case "normal":
    return "Normal"
  case "rock":
    return "Pedra"
  case "grass":
    return "Planta"
  case "psychic":
    return "Psíquico"
  case "dark":
    return "Sombrio"
  case "ground":
    return "Terra"
  case "poison":
    return "Venenoso"
  case "flying":
    return "Voador"
  }
}
    
function printCards(list) {
  document.getElementById('cards').innerHTML = list.map((pokemon) => `
    <div class="container-card">
    <div class="flipper-card display">
    <div class="display card-front card">
    <img src="${pokemon.img}" alt="charmander">
    <p class="pokemom-name">${pokemon.name}</p>
    ${pokemon.type.map(tipo => `
        <p class="pokemon-type ${tipo}-type">${translate(tipo)}</p>
    `).join("")}
</div>
    
        <ul class="display card-back card">
                <li><strong>Peso:</strong> <span class="weight">${pokemon.size.weight}</li>
                <li><strong>Altura:</strong> ${pokemon.size.height} </li>     
                <li><strong>Raridade:</strong> ${pokemon.pokemonRarity}</li> 
                <li><strong>Resistências:</strong> <div>
                ${pokemon.resistant.map(resistance => icons[resistance]).join(' ')}</div>
                 </li>
                <li><strong>Fraquezas:</strong> <span class="weakness"><div>
                ${pokemon.weaknesses.map(weaknesses => icons[weaknesses]).join(' ')}
                </div
                </li>
               </ul>
                </div>
                </div>
`).join("")
}
printCards(data.pokemon)

const calcText = document.getElementById('calcText')

const searchInput = document.getElementById('search')
searchInput.addEventListener('keyup', (evento) => {
  const valueInput = evento.target.value.toLowerCase()
  const listFilter= searchData(valueInput, data.pokemon)
  printCards(listFilter)
  calcText.innerHTML = `Nesse site você encontrará 251 tipos de pokemons.`
})

const filterTypes = document.getElementById('filter-types')
filterTypes.addEventListener('change', () => {
  const filter = filterPokemon (filterTypes.value, data.pokemon)
  printCards(filter)
  const porcent = computerType(filter, data.pokemon)
  calcText.innerHTML = `O número de pokemons desse tipo é ${filter.length}, o que equivale a ${porcent}%`
})

const orderList = document.getElementById('order-by')
orderList.addEventListener('change', () => {
  const ordenado = order(orderList.value, data.pokemon)
  printCards(ordenado)
  calcText.innerHTML = `Nesse site você encontrará 251 tipos de pokemons.`
})
