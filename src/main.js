//import { example } from './data.js';

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
    
    


const cards = document.getElementById('cards')
const array = data.pokemon
const allCards =() => {
cards.innerHTML = array.map((pokemon) => `
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
allCards()
//${pokemon.pokemon-rarity}
//${pokemon.evolution.next-evolution[0].candy-cost}
//<p>Candies: <span class="candies">${pokemon.evolution.nextEvolution[0].candyCost}</span></p>


const searchInput = document.getElementById('search')
searchInput.addEventListener('keyup', () => {
    console.log('input funcionando')
})

const filterTypes = document.getElementById('filter-types')
filterTypes.addEventListener('click', () => {
    console.log('filtro funcionando')
})

const btSearch = document.getElementById('bt-search')
btSearch.addEventListener('click', () => {
    console.log('botão de pesquisa funcionando')
})

const order = document.getElementById('order-by')
order.addEventListener('click', () => {
    console.log('ordenar funcionando')
})
