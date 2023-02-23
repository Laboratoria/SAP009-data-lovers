import harryData from "./data/harrypotter/harry.js"
const characters = [
  harryData.characters[0],
  harryData.characters[1],
  harryData.characters[2],
  harryData.characters[3]
];
const btnMenu = document.getElementById('toggleSidebar'); 
const btnFechar = document.getElementById('closeSidebar');
const header = document.getElementById('header');
const navigationHeader = document.getElementById('navigation_header');
const content = document.getElementById('content');
let showSidebar = false;
const homeBtn = document.getElementById('homeBtn')
const charactersBtn = document.getElementById('charactersBtn')
const housesBtn = document.getElementById('housesBtn')
const chooseCharacter = document.getElementById('message')



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
charactersBtn.addEventListener('click', closeSidebar);
homeBtn.addEventListener('click', closeSidebar);
housesBtn.addEventListener('click', closeSidebar);

window.addEventListener('resize', function() {
  if(window.innerWidth > 768 && showSidebar){
    toggleSidebar();
  }
  
});


const allCharacters = characters.forEach(function(character) {//forEach para percorrer todo array de character
  cardDrawing(character)
} 
);

function cardDrawing(character){

  const cardSection = document.querySelector(".cardSection")
  cardSection.innerHTML += `<div id="card" class="flipCard">
  <div class= "cardsDiv" id="front">
  <img src="logo-frog-4.png" alt="cardImg" id="cardImg" class="cardImg" loading="lazy"> 
  <h2>${character.name}</h2>
   </div>
   
   <div class= "cardsDiv" id="back">
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

const cardFlip = document.querySelector(".flipCard")
cardFlip.addEventListener("click",()=>{
  cardFlip.classList.toggle("flipCard")
})