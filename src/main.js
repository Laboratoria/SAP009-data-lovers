import data from "./data/lol/lol.js";
 import {example} from './data.js';


const allChampions = data.data;
const inputChampions = document.getElementById("search");

  
function showCards() {
  const inputChampions = document.getElementById("search");
  const interactionCards = document.querySelector(".champions-cards");
  
  function filterNames() {
    const filter = inputChampions.value.toUpperCase();
    const championsArray = Object.values(allChampions);
    const filteredList = championsArray.filter(champion => {
      return champion.id.toUpperCase().includes(filter);
    });
    return filteredList;
  }
  
  const filteredChampions = filterNames();
  const championsHTML = filteredChampions.map((champion, index) => `
    <div class="card">
      <img id="${index}" class="posters" src="${champion.splash}" alt="champion image">
      <p id="champion-text" class="champion-title">${champion.title} </p>
      <p class="champion-name"> ${champion.id}</p>
      <p class="champion-power"> Nível de Ataque: ${champion.info.attack}</p>
      <p class="champion-power"> Nível de Defesa: ${champion.info.defense}</p>
      <p class="champion-power"> Nível de Magia: ${champion.info.magic}</p>
      <p class="champion-power"> Nível de Dificuldade: ${champion.info.difficulty}</p>
    
      <button class="more" id="${index}">More</button>
    </div>
  `).join("");
  
  interactionCards.innerHTML = championsHTML;
}

inputChampions.addEventListener("keyup", showCards);


const functionChampionArray = Object.values(allChampions);
const tagsArray = functionChampionArray.map(champion => champion.tags);
