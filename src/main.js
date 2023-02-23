//import { example } from './data.js';
import harryData from './data/harrypotter/harry.js';

const btnMenu = document.getElementById('toggleSidebar'); 
const btnFechar = document.getElementById('closeSidebar');
const header = document.getElementById('header');
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



const allCharacters = harryData.characters.forEach(function(character) {//forEach para percorrer todo array de character
  cardDrawing(character)
} 
);


//elementos da carta
const cardImg = document.getElementsByClassName("cardImg")
const charactersName = document.getElementsByClassName("charactersName")





 

/*
//import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);
*/



function cardDrawing(character){

  const cardSection = document.querySelector(".cardSection")

  cardSection.innerHTML += `<div class= "cardsDiv">
  <img src="logo-frog-4.png" alt="cardImg" id="cardImg" class="cardImg"> 
  <h2>${character.name}</h2>
   </div>`
}

/*
function nameCharacter (query) => {
  return cardSection.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) >-1);

};
console.log (nameCharacter('ha')); */


//import harryData from './data/harrypotter/harry.js';

//const allCharacters = harryData.characters.forEach(function(character) {//forEach para percorrer todo array de character



 



//console.log(example, data);
