//import { example } from "./data.js";
import data from "./data/ghibli/ghibli.js";
const allAnimations = data.films;

document.querySelector(".animation_cards").innerHTML =
  showAnimations(allAnimations);

function showAnimations(allAnimations) {
  return allAnimations
    .map(
      (animation) =>
        `
  <div class="cards">
  <img class="posters" src="${animation.poster}" alt="Pôster do filme">
  <p class="film-info">${animation.title} </p>
  <p class="film-info"> ${animation.release_date}</p>
  </div>
  `
    )
    .join("");
}

//CREATE ELEMENT E APPENDCHILD DE EXEMPLO
const list = document.getElementById("list-container");
function createElement(data) {
  // Cria um novo elemento div
  const newDiv = document.createElement("div");
  // Adiciona conteúdo ao novo elemento div
  newDiv.innerHTML = "Total number of animations produced by Studio Ghibli: " + data.length;
  // Adiciona o novo elemento div ao documento HTML
  list.appendChild(newDiv);
}

createElement(allAnimations);


//FUNÇÕES ANTIGAS
//console.log(example, data);

// //document.getElementById("list-container").innerHTML = showAll(data);

// /*document.querySelector(".animation_cards").innerHTML = showInfo(data);

// function showInfo(data) {
//   const allAnimations = [];
//   const allAnimationsPoster = [];
//   for (let i = 0; i < data.films.length; i++) {
//     const animationPoster = data.films[i].poster
//     const animationTitle = data.films[i].title;
//     const animationRelease = data.films[i].release_date;
//     allAnimations.push(animationTitle + " - " + animationRelease);
//   }
//   return `<ul>
//             ${allAnimations.map((item) => `<li>${item}</li>`).join("")}
//           </ul>`;
// }*/

// function showInfo(data) {
//   const allAnimations = [];
//   const allAnimationsPosters = [];
//   for (let i = 0; i < data.films.length; i++) {
//     const animationPoster = data.films[i].poster;
//     const animationTitle = data.films[i].title;
//     const animationRelease = data.films[i].release_date;
//     allAnimations.push(animationTitle + " - " + animationRelease);
//     allAnimationsPosters.push(animationPoster);
//   }
//   return `<ul>
//             ${allAnimations.map((item) => `<li>${item}</li>`).join("")}
//           </ul>`;
// }
