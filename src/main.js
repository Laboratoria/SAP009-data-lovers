

import { getPeople, buscarName, ordemAlfabetica, ordemPersonagem, filterDirector, filterGender, calcAgregado } from './data.js';

import data from './data/ghibli/ghibli.js';



const films = data.films
const people = getPeople(films)


const listaImpressa = document.getElementById("listaImpressa")

const showFilme = (filmList) => {
  listaImpressa.innerHTML = ""
  filmList.forEach(film => {
    listaImpressa.innerHTML +=
      `  
    <li class="cardGhibli"> 
    <div class="cards">
    <div class="flip">
    <section class="front-card">
    <img class="card-poster" src=" ${film.poster}">
    </section>
    <section class="back-card">
    <p class="card-titulo"> ${film.title} </p> 
    <p class="card-lançamento"> Release date: ${film.release_date} </p>
    <p class="card-descrição"> Description: ${film.description} </p>    
    <p class="card-diretor"> Director: ${film.director} </p>
    <p class="card-producer"> Producer: ${film.producer} </p>
    <p class="card-avaliação"> Score: ${film.rt_score} </p>
    </section>
    </div>
    </div>
   </li>
  `
  })

}
showFilme(films)




const listaPersonagem = document.getElementById("listaPersonagem")
const showPeople = (peopleList) => {
 let cardString = ""
  peopleList.forEach(people => {
    cardString +=
      `
    <li class="cardPersonagem">
    <div class="cardsPersonagens">
    <div class="flipPersonagens"> 
    <section class="front-personagens">
          <img class="card-poster" src=" ${people.img}">
          </section>
          <section class="back-personagens">
          <p class="card-personagens">${people.name}</p>
          <p class="card-filme"> Filme: ${people.movie} </p>
          <p class="card-gênero"> Genero: ${people.gender}</p>
          <p class="card-idade"> Idade: ${people.age}</p>
          <p class="card-specie"> Espécie: ${people.specie}</p>
          </section>
          </div>
          </div>
         
    </li> 
  `
  })
  listaPersonagem.innerHTML = cardString
}
showPeople(people)



const buscarNomes = document.getElementById("search");
function filtroPesquisa(event) {
  const charactersByName = buscarName(data.films, event.target.value);
  showFilme(charactersByName);
}
buscarNomes.addEventListener("keyup", filtroPesquisa);




const ordenar = document.querySelector(".order");
function ordemFilme(event) {
  const filtrarMenu = document.getElementById("filterMenu")
  
  if (filtrarMenu.value === "Filmes"){
    const order = ordemAlfabetica(data.films, event.target.value)
  showFilme(order);
  }
  else if (filtrarMenu.value === "Personagem"){
    const order = ordemPersonagem(people, event.target.value)
  showPeople(order);
  } 
}
ordenar.addEventListener("change", ordemFilme);



const filtrarMenu = document.getElementById("filterMenu")
filtrarMenu.addEventListener("change", function (event) {
  let filmeMenu = event.target.value
  if (filmeMenu === "Filmes") {
    listaPersonagem.innerHTML = ""
    showFilme(films)
  }
  else if (filmeMenu === "Personagem") {
    listaImpressa.innerHTML = ""
    showPeople(people)
  }
  else {
    listaImpressa.innerHTML = ""
    listaPersonagem.innerHTML = ""
    showFilme(films)
    showPeople(people)
  }
});



const filterFilm = document.getElementById("select_id")
filterFilm.addEventListener("change", function (event) {
listaImpressa.innerHTML = ""
  const director = event.target.value
  let filtrados = films
    if (director != "todos") {
    filtrados = filterDirector(films, director)
    }
  showFilme(filtrados)
})



const femeleMale = document.getElementById("genero_id")
femeleMale.addEventListener("change", function (event) {
  listaPersonagem.innerHTML = ""
  let filtroPersonagem = []
  const gender = event.target.value
  filtroPersonagem = filterGender(people, gender)
  showPeople(filtroPersonagem)
})




  let printCuriosidade = document.getElementById("curiosidades_id")
  window.addEventListener("load", function(event) {

    let personagens = []
    for (let i = 0; i < films.length; i++) {
    personagens.push(films[i].people.length)
    }
      const curiosidades = calcAgregado(personagens, event.target.value)
      const mediaPersonagens = curiosidades.media
      const totalPersonagens = curiosidades.total
  
  printCuriosidade.innerHTML =
  `<div class="class_id">
  <h4>Curiosidades</h4>
  <br>
  <p class="soma">A soma de todos os personagens é: ${totalPersonagens}</p>
  <br>
  <p class="media"> A média de personagens por filme é: ${mediaPersonagens}</p>
  <br>
  <a href ="https://pt.quizur.com/tag/b4I-studio-ghibli" target="_blank"> Faça Quiz ou Testes de Personalidade sobre Studio Ghibli</a>
  <br>
  <a href ="https://open.spotify.com/playlist/603D3vOd4rWEl3ym4DLWK1?si=13453fabba424c16" target="_blank"> Ouça Studio Ghibli Therapy Session</a>
  </div>`
  });