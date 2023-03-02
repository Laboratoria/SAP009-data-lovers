//import { example } from './data.js';
import {filterAncestry/*, filterHouse*/, searchBar} from './data.js';


import harryData from './data/harrypotter/harry.js';
const characters = [
  harryData.characters[208],
  harryData.characters[138],
  harryData.characters[97],
  harryData.characters[300],
  harryData.characters[146],
  harryData.characters[154],
  harryData.characters[159],
  harryData.characters[364],
  harryData.characters[374],
  harryData.characters[23],
  harryData.characters[2],
  harryData.characters[42],
  harryData.characters[658],
  harryData.characters[323]
];
const ancestralidadeFilter = document.getElementById("ancestralidadeFilter");
//const casasFilter = document.getElementById("ancestralidadeFilter");
const btnMenu = document.getElementById('toggleSidebar'); 
const btnFechar = document.getElementById('closeSidebar');
const navigationHeader = document.getElementById('navigation_header');
const content = document.getElementById('content');
let showSidebar = false;

function toggleSidebar (){
  showSidebar = !showSidebar;
  if(showSidebar) {
    navigationHeader.style.marginLeft = '-10vw'; 
    navigationHeader.style.animationName = 'ShowSidebar'; 
    content.style.filter = 'blur(2px)'; 
  }
  else{
    navigationHeader.style.marginLeft = '-100vw';
    navigationHeader.style.animationName = '';
    content.style.filter = ''; 
  }
}
btnMenu.addEventListener('click', toggleSidebar); 

function closeSidebar(){
  if (showSidebar){
    toggleSidebar();
  }
}
btnFechar.addEventListener('click', closeSidebar);
content.addEventListener('click', closeSidebar);

window.addEventListener('resize', function() {
  if(window.innerWidth > 768 && showSidebar){
    toggleSidebar();
  }  
});

characters.forEach(function(character) {//forEach para percorrer todo array de character
  cardDrawing(character)
});

function cardDrawing(character){
  const cardSection = document.querySelector(".cardSection")
  cardSection.innerHTML += `
  <div class="card flipCard">
  <div class="cardsDiv back">
  <img src="logo-frog-4.png" alt="cardImg" id="cardImg" class="cardImg" loading="lazy"> 
  <h2>${character.name}</h2>
   </div>
   
   <div class="cardsDiv front">
  <img src="logo-frog-2.png" alt="cardBackImg" id="cardBackImg" class="cardBackImg" loading="lazy">
  <h2>${character.ancestry}<br>
  ${character.house}<br>
  Nascido em<br>
  ${character.birth}<br>
  ${character.gender}<br>
  ${character.species}</h2>
  </div>

   </div>` 
}

const cardFlip = document.querySelectorAll(".flipCard") // faz o card girar para apresentar as informações dos personagens
cardFlip.forEach((card)=> card.addEventListener("click",()=>{
  card.classList.toggle("flipCard")
}))

function cardPrinting(array){
  const cardCharacters = document.querySelector(".cardSection")
  cardCharacters.innerHTML = ''; // "limpa" todos os cards que estão na tela, assim o filtro irá apresentar os cards de acordo com a seleção
  array.forEach(function(character) {//forEach para percorrer todo array de character
    cardDrawing(character)   
  });
  const cardFlip = document.querySelectorAll(".flipCard")
  cardFlip.forEach((card)=> card.addEventListener("click",()=>{
    card.classList.toggle("flipCard")
  })) 
}

//barra de pesquisa
const inputSearch = document.getElementById("searchBar")
inputSearch.addEventListener('keyup', () => {
  const returnCharacters = searchBar(characters, inputSearch.value)
  cardPrinting(returnCharacters)
})

//filtro ancestralidade 

ancestralidadeFilter.addEventListener("change", (e) => { //evento de mudança, quando seleciona a opção filtro desejado
  const value = e.target.value;	 
  const ancestryCharacters = filterAncestry(characters, value);	//busca Ancestry
  //console.log(filterAncestry);
  cardPrinting(ancestryCharacters)
});

//filtro Casas
// cardCharacters = document.querySelector(".cardSection")
// casasFilter.addEventListener("change", (e) => { //evento de mudança, quando seleciona a opção filtro desejado
//   const value = e.target.value;	 
//   const casaCharacters = filterHouse(characters, value);	
//   cardCharacters.innerHTML = ''; // "limpa" todos os cards que estão na tela, assim o filtro irá apresentar os cards de acordo com a seleção
//   casaCharacters.forEach(function(character) {//forEach para percorrer todo array de character
//     cardDrawing(character)   
//   });
//   const cardFlip = document.querySelectorAll(".flipCard")
//   cardFlip.forEach((card)=> card.addEventListener("click",()=>{
//     card.classList.toggle("flipCard")
//   })) 
// });



