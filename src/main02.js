import {qtdePersonByHouse } from './data.js';
import harryData from './data/harrypotter/harry.js';

// const characters = [
//   harryData.characters[323],
//   harryData.characters[542],
//   harryData.characters[434],
//   harryData.characters[122],
//   harryData.characters[202],  
//   harryData.characters[347],
//   harryData.characters[364],
//   harryData.characters[583],
//   harryData.characters[324],
//   harryData.characters[0],
//   harryData.characters[208],
//   harryData.characters[138],
//   harryData.characters[97],
//   harryData.characters[300],
//   harryData.characters[146],
//   harryData.characters[154],
//   harryData.characters[159],  
//   harryData.characters[374],
//   harryData.characters[23],
//   harryData.characters[2],
//   harryData.characters[42],
//   harryData.characters[658],
// ];
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

qtdePersonByHouse(harryData.characters, "Gryffindor")
document.getElementById("grifinoria").textContent = `Esta casa tem um total de ${qtdePersonByHouse(harryData.characters, "Gryffindor")} personagens.`;

qtdePersonByHouse(harryData.characters, "Hufflepuff")
document.getElementById("lufa").textContent = `Esta casa tem um total de ${qtdePersonByHouse(harryData.characters, "Hufflepuff")} personagens.`;

qtdePersonByHouse(harryData.characters, "Ravenclaw")
document.getElementById("corvinal").textContent = `Esta casa tem um total de ${qtdePersonByHouse(harryData.characters, "Ravenclaw")} personagens.`;

qtdePersonByHouse(harryData.characters, "Slytherin")
document.getElementById("sonserina").textContent = `Esta casa tem um total de ${qtdePersonByHouse(harryData.characters, "Slytherin")} personagens.`;