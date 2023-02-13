import {films} from './data.js';
import data from './data/ghibli/ghibli.js';


function sectionMovies(items){
  document.getElementById('infoMovies').innerHTML = items.map((studio) => `
  <div class="cardFront">
  <img src="${studio.poster}" alt="Poster do filme">
  <p class="name">${studio.title}</p>
  `).join("") 
}
sectionMovies(data.films)













/*const sectionCards = document.getElementById("infoMovies")

function cards(cardMovies){
  cardMovies.map((allCards) =>{
    let info = document.createElement('div')
    info.innerHTML = `
    <img class = "posters" scr = "${allCards.posters}" alt = "Poster do filme">
    <p class = "movieInfo">${allCards.title}</p>  
    `
    sectionCards.appendChild(info)
  }
  )


  //console.log(infoMovies);
}






//data.map(movies)


//console.log(films, data)

//const infoMovies = document.getElementById("infoMovies");

   

/*const yearsOption = document.getElementById("yearsOption");
const assessmentOption = document.getElementById("assessmentOption");
const orderBy = document.getElementById("orderBy");*/


