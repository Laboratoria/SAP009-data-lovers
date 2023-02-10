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
            break;
        case "water" :
            return "Água"
            break;
        case "electric":
            return "Elétrico"
            break;
        case "fairy":
            return "Fada"
            break;
         case "ghost":
            return "Fantasma"
            break;
        case "fire":
            return "Fogo"
            break;
        case "ice":
            return "Gelo"
            break;
        case "bug":
            return "Inseto"
            break;
        case "fighting":
            return "Lutador"
            break;
        case "normal":
            return "Normal"
            break;
        case "rock":
            return "Pedra"
            break;
        case "grass":
            return "Planta"
            break;
        case "psychic":
            return "Psíquico"
            break;
        case "dark":
            return "Sombrio"
            break;
        case "ground":
            return "Terra"
            break;
        case "poison":
            return "Venenoso"
            break;
        case "flying":
            return "Voador"
            break;
    }
}
    
    




function printCards(list) {
    document.getElementById('cards').innerHTML = list.map((pokemon,index) => `
    <div class="container-card">
    <div class="flipper-card">
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
                <li><strong>Resistências:</strong> 
                ${pokemon.resistant.map(resistance => icons[resistance]).join(' ')}
                 </li>
                <li><strong>Fraquezas:</strong> <span class="weakness">
                ${pokemon.weaknesses.map(weaknesses => icons[weaknesses]).join(' ')}
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
    const valueInput = evento.target.value
    const listFilter= searchData(valueInput, data.pokemon)
    printCards(listFilter)
    console.log(listFilter.length)
})

const filterTypes = document.getElementById('filter-types')
filterTypes.addEventListener('change', () => {
    const filter = filterPokemon (filterTypes.value, data.pokemon)
    printCards(filter)
    const porcent = computerType(filter, data.pokemon)
    calcText.innerHTML = `O número de pokemons desse tipo é ${filter.length}, o que equivale a ${porcent}%`
})



const names = data.pokemon.slice()
const orderList = document.getElementById('order-by')
orderList.addEventListener('change', () => {
    const ordered = order(orderList.value, names)
    console.log(names)
   // console.log(ordered)
    printCards(names)
})
