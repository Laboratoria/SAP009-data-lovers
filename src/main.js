import  {filterByGender, filterBySpecies, filterByName, getPeople, calculo}  from './data.js';
import data from './data/ghibli/ghibli.js';

//mostrando cards na tela

function getNamesAndImages() {
  const NameAndImages = []
  for (let i = 0; i < data.films.length; i++) {
    for (let j = 0; j < data.films[i].people.length; j++) {
      NameAndImages.push({name: `${data.films[i].people[j].name}`, img: `${data.films[i].people[j].img}`, specie:`${data.films[i].people[j].specie}`})
    }
  }
  return NameAndImages
}

const mostrarCardPai = document.querySelector(".mostrar-card-pai");

const NamesAndImg = getNamesAndImages()

function showPeople(NamesAndImg) {
  while (mostrarCardPai.firstChild) {
    mostrarCardPai.removeChild(mostrarCardPai.firstChild);
  }
  for (let i = 0; i < NamesAndImg.length; i++) {

    const div = document.createElement("div");
    div.classList.add("cards");

    const img = document.createElement("img");
    img.classList.add("card_image");
    img.setAttribute("src", NamesAndImg[i].img);

    const nomePersonagem = document.createElement("h1");
    nomePersonagem.classList.add("card_name");
    //const nome = document.createTextNode(NamesAndImg[i].name);


    div.appendChild(img);
    //div.appendChild(nome);
    mostrarCardPai.appendChild(div);

  }
}

showPeople(NamesAndImg)

//Guarda o valor de todos os nomes e personagens
const people = getPeople(data.films)
//pegando os valores do select
const generoEscolhido = document.getElementById("genero")
generoEscolhido.addEventListener("change", (event) => {
  //Pego o valor do evento change do select
  const gender = event.target.value;
  //Coloca o valor do evento do alvo e mostra passando pela função filter
  const filterByGenderPeople = filterByGender(people, gender);
  showPeople(filterByGenderPeople)

  // usando calculo
  const calculoAgregado = calculo(filterByGenderPeople.length, people.length);
  const resultado = document.getElementById("paragrafoCalculo");

  resultado.style.color =  "#fb4f7d";  
  resultado.style.fontSize = "1rem";
  resultado.style.background = "#faf9f2";
  resultado.style.borderRadius = "5px";
  resultado.style.paddingBottom = "5px";
  resultado.style.paddingTop = "5px";
  resultado.style.marginTop = "20px"
  resultado.style.marginBottom = "20px"
  resultado.style.textAlign = "center";

  resultado.innerHTML = (`A porcentagem desse tipo de personagens é ${calculoAgregado} %`);
})



//pegando os valores do select
const especieEscolhida = document.getElementById("especie")
especieEscolhida.addEventListener("change", (event) => {
//Pego o valor do evento change do select
  const specieEscolhida = event.target.value;
  //Coloca o valor do evento do alvo e mostra passando pela função filter
  const filterBySpeciesPeople = filterBySpecies(people, specieEscolhida);
  showPeople(filterBySpeciesPeople)

  // usando calculo
  const calculoAgregado = calculo(filterBySpeciesPeople.length, people.length);
  const resultado = document.getElementById("paragrafoCalculo");

  resultado.style.color =  "#fb4f7d";  
  resultado.style.fontSize = "1rem";
  resultado.style.background = "#faf9f2";
  resultado.style.borderRadius = "5px";
  resultado.style.paddingBottom = "5px";
  resultado.style.paddingTop = "5px";
  resultado.style.marginTop = "20px"
  resultado.style.marginBottom = "20px"
  resultado.style.textAlign = "center";

  resultado.innerHTML = (`A porcentagem <br> desse tipo de personagens <br> em relação ao total é de ${calculoAgregado} %`);
})


//pegando os valores do select
const nomeEscolhido = document.getElementById("form")
nomeEscolhido.addEventListener("input", (event) => {
  event.preventDefault();
  //Pego o valor do evento change do select
  const nameEscolhido = document.getElementById("nome").value;
  //Coloca o valor do evento do alvo e mostra passando pela função filter
  const filterByNamePeople = filterByName(people, nameEscolhido);
  showPeople(filterByNamePeople)
})












