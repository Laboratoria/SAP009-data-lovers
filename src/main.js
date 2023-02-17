import dataJs from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";



const characters = data.results;
const searchFor = document.getElementById("input-search");
const cardContainer = document.getElementById("card-container");
const gender = document.getElementById("gender");
const status = document.getElementById("status");
const order = document.getElementById("order");
const percentageReturn = document.getElementById('percentage-return');


function loadCharacters(itens) {
  const arrayResults = itens.map((item) => {
    const cards = `
   <div class="cards">
     <img class="image" src="${item.image}" alt="${item.name}">
     <ul style="list-style: none">                       
     <li class="li">Nome: ${item.name}</li>
     <li class="li">Status: ${item.status}</li>
     <li class="li">Espécie: ${item.species}</li>
     <li class="li">Gênero: ${item.gender}</li>
     <li class="li">Localização: ${item.origin.name}</li>
     </ul>                
   </div>
   `;
    return cards;
  });
  return arrayResults.join(""); //O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string
}

cardContainer.innerHTML = loadCharacters(characters);

searchFor.addEventListener("keyup", searchName);
gender.addEventListener("change", searchGender);
status.addEventListener("change", searchStatus);
// só faz uma de cada vez, para filtrar todas, colocar o filtro clicável e executar todas as funções dentro dele alinhadas com if e else

function searchName(e) {
  const value = e.target.value; // target é uma referência ao objeto que enviou o evento. Por exemplo, quando você quer capturar o que foi digitado em um campo input de um form , você utiliza o event. target. value , ou seja, você irá capturar do input do form o valor que foi digitado
  const filteredSearch = dataJs.searchByName(characters, value);
  const cards = loadCharacters(filteredSearch);
  cardContainer.innerHTML = cards;
}

function searchGender(e) {
  const value = e.target.value;
  const filteredSearch = dataJs.searchByGender(characters, value);
  const cards = loadCharacters(filteredSearch);
  cardContainer.innerHTML = cards;

  const percentage = dataJs.caululatePercentage(characters.length, filteredSearch.length);
  percentageReturn.innerHTML = `Essa lista contém ${percentage}% dos personagens totais`;

  
}


function searchStatus(e) {
  const value = e.target.value;
  const filteredSearch = dataJs.searchByStatus(characters, value);
  const cards = loadCharacters(filteredSearch);
  cardContainer.innerHTML = cards;

  const percentage = dataJs.caululatePercentage(characters.length, filteredSearch.length);
  percentageReturn.innerHTML = `Essa lista contém ${percentage}% dos personagens totais`;

}


order.addEventListener("change", orderAlphabetica);

function orderAlphabetica(e) {
  const charactersOrder = order.value;
  if (charactersOrder === "az") {
    const option = e.target.value;
    const filterOrder = dataJs.alphabeticalOrder(characters, option);
    const cards = loadCharacters(filterOrder);
    cardContainer.innerHTML = cards;
  } 
  else if (charactersOrder === "za") {
    const option = e.target.value;
    const filterOrder = dataJs.alphabeticalOrder(characters, option).reverse();
    const cards = loadCharacters(filterOrder);
    cardContainer.innerHTML = cards;
  }
}
