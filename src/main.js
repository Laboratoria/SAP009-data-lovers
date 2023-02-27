/* eslint-disable no-unreachable */
import data from "./data/lol/lol.js";
//import {example} from './data.js';
const allChampions = data.data;
const interactionCards = document.querySelector(".animation-cards");
const inputChampions = document.getElementById("search");
inputChampions.addEventListener("click", teste);
//const allPersonagens = data.characters;

function teste() { 
  const championsArray = Object.values(allChampions);
  return championsArray
    .map((champion, index) => 
      ` 
      <div class="card">
      <img id="${index}" class="posters" src="${champion.splash}" alt="Pôster de">
      <p id="film-title" class="film-info">${champion.title} </p>
      <p class="film-info"> ${champion.stats.armorperlevel}</p>
      <button class="more" id="${index}">More</button>
      </div>
        
        </div>  
      `
    )
    .join("");
  interactionCards.innerHTML = championsArray

}
  