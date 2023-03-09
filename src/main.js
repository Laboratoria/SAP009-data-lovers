import  {filterByGender, getPeople}  from './data.js';
import data from './data/ghibli/ghibli.js';

const people = getPeople(data.films)
console.log(people)
console.log(filterByGender(people, "Male"))


function getNamesAndImages() {
  const NameAndImages = []
  for (let i = 0; i < data.films.length; i++) {
    for (let j = 0; j < data.films[i].people.length; j++) {
      NameAndImages.push({name: `${data.films[i].people[j].name}`, image: `${data.films[i].people[j].img}`})
    }
  }
  return NameAndImages
}

const mostrarCardPai = document.querySelector(".mostrar-card-pai");

const NamesAndImg = getNamesAndImages()

function showPeople(NamesAndImg) {
  for (let i = 0; i < NamesAndImg.length; i++) {
    
    const div = document.createElement("div");
    div.classList.add("cards");

    const img = document.createElement("img");
    img.classList.add("card_image");
    img.setAttribute("src", NamesAndImg[i].image);

    const nomePersonagem = document.createElement("p");
    nomePersonagem.classList.add("card_nome");
    const nome = document.createTextNode(NamesAndImg[i].name);


    div.appendChild(img);
    //div.appendChild(nomePersonagem);
    mostrarCardPai.appendChild(div);

  }
    
}

showPeople(NamesAndImg)

//váriavel que guarda todos os personagens 

//const personagens = data.films.map((filme) => filme.people)
//const mapPersonagens = personagens.map((personagem) => personagem.map((pessoa) => pessoa))

//const arr = [] 
//arr.push(mapPersonagens)
//console.log(arr)


//const generos = function showGender()

// //Fazer as funções = Filtrar e criar
// export default function filtrarPorGenero() {
//   console.log("deu certo")
//   //return listaPersonagens.filter(personagem => personagem.gender === genero);
// }

const generoEscolhido = document.getElementById("genero")
adiconar evento generoEscolhido.value 

const nomePersonagem = document.getElementById("nome")
const especieEscolhida = document.getElementById("especie")

// //Apenas chamar a função e passar o parâmetro.

// generoEscolhido.addEventListener('change', filtrarPorGenero)

//Como separar Male de Female
//Usar um filter dentro do gender.push()
//function getGender() {
//const gender = []
//for (let i = 0; i < data.films.length; i++) {
//for (let j = 0; j < data.films[i].people.length; j++) {
//if (data.films[i].people[j].gender == "male") {
//gender.push({name: data.films[i].people[j].name})
//}
      
//}
//}



