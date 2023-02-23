import {} from "./data.js";

import data from "./data/harrypotter/harry.js";

const animationCards = document.querySelector(".animation-cards");

const linkPersonagens = document.getElementById("listaPerso");
linkPersonagens.addEventListener("click", teste);
const allPersonagens = data.characters;

function teste() { 

  const animationCardsHTML = allPersonagens
    .map((element, index) => {
      return `      
        <div class="cards">     
          <p id="film-title" class="film-info">${element.name}</p>
          <p class="film-info">${element.books_featured_in}</p>
          <button class="more" id="${index}">More</button>
        </div>
      `;
    })
    .join("");
  animationCards.innerHTML = animationCardsHTML;
}

const linkLivros = document.getElementById("listaLivros");
linkLivros.addEventListener("click", teste);
const allBooks = data.books;
console.log(allBooks)

// function teste() { 

//   const animationCardsHTML = allBooks
//     .map((element, index) => {
//       return `      
//         <div class="cards">     
//           <p id="film-title" class="film-info">${element.author}</p>
//           <p class="film-info">${element.books_featured_in}</p>
//           <button class="more" id="${index}">More</button>
//         </div>
//       `;
//     })
//     .join("");
//   animationCards.innerHTML = animationCardsHTML;
// }
// showAnimations(personagens);
