import data from './data/lol/lol.js';
import { example } from './data.js';

console.log(example, data);

let lolContent = []
    for (let item in lol.data) {
        lolContent.push(lol.data[item])
    }

function createCard(splash, name){
    let cards = document.createElement('card')
    cards.setAttribute('class', 'show-champions')
    cards.innerHTML = (`<img src = '${splash}'> <p>${name}</p>`)
    return cards
}
showList(championsList);

let championsList = document.getElementById("list")
function showList(data){
    championsList.innerHTML = ""
    for (let list in data) {
    let eachChampion = createCard(data[list].splash,data[list].name)
    championsList.addEventListener("click", () => {
        startModal()
        modalTemplate(data[list].name,data[list].splash,data[list].tags,data[list].info.attack,data[list].info.deffense,data[list].info.difficult)
    })
    }
}

function modalTemplate(name, image, tags, attack, defense, difficulty) {
    let cardsChampions = `<h2>${name}</h2>
    <img src = '${image}'>
    <p>Função: ${tags}</p>
    <p>Nível de Ataque: ${attack}</p>
    <p>Nível de Defesa: ${defense}</p>
    <p>Dificuldade para jogar: ${difficulty}</p>`
    document.getElementById('box-content').innerHTML - cardsChampions;
}

function startModal(){
    const modal = document.getElementById('modal');
    modal.classList.add('show')
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'modal' || e.target.className == 'close')
        modal.classList.remove('show')
    })
}