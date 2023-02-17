import harryData from "./data/harrypotter/harry.js"

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

/*function listCharacters(allCharacters, chooseCharacter){
  return (chooseCharacter.innerHTML = "personagens aqui" )
}
charactersBtn.addEventListener('click', listCharacters);*/

const allCharacters = harryData.characters.forEach(function(character) {//forEach para percorrer todo array de character
  cardDrawing(character)
} 
);

//elementos da carta
const cardImg = document.getElementsByClassName("cardImg")
const charactersName = document.getElementsByClassName("charactersName")





function cardDrawing(character){
  /*//card
  let card = document.createElement("article")
  card.setAttribute("class", "card")
  cardSection.appendChild(card)

  //imagem do card(ou imagem dentro do card?)
  const img = document.createElement("img")
  card.appendChild(img)
  img.setAttribute("class", "cardImg")
  img.setAttribute("src", "logo-frog-4.png")

  //nome do personagem
  let charactersName = document.createElement("h2")
  charactersName.setAttribute("class", "charactersName")
  card.appendChild(charactersName)
  charactersName.textContent = character.name //é isso que faz aparecer a palavra "nome" no card
  */

  const cardSection = document.querySelector(".cardSection")

  cardSection.innerHTML += `<div class= "cardsDiv">
  <img src="logo-frog-4.png" alt="cardImg" id="cardImg" class="cardImg"> 
  <h2>${character.name}</h2>
   </div>`



}




 



//console.log(example, data);
