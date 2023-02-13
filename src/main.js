import data from "./data/ghibli/ghibli.js";
import { films } from "./data.js";

const allAnimations = data.films;
const animationCards = document.querySelector(".animation-cards");
const filterButton = document.getElementById("filter-button");
const filterType = document.getElementById("filter-type");
// document.querySelector(".animation-cards").innerHTML = showAnimations(allAnimations);
filterButton.addEventListener("click", defineAlphabeticalFilter);

const inputArea = document.getElementById("filter");
inputArea.addEventListener("keyup", films.searchFilms);

document.querySelector(".animation-cards").innerHTML =
  showAnimations1(allAnimations);

function showAnimations1(allAnimations) {
  return allAnimations
    .map(
      (animation) =>
        `<div class="all-cards">
  <div class="cards">
  <img class="posters" src="${animation.poster}" alt="Pôster do filme">
  <p id="film-title" class="film-info">${animation.title} </p>
  <p class="film-info"> ${animation.release_date}</p>
  </div>
  </div>
  `
    )
    .join("");
}

// function showAnimations(allAnimations) {
//   return allAnimations
//     .map(
//       (animation) =>
//         `
//   <div class="cards">
//   <img class="posters" src="${animation.poster}" alt="Pôster do filme">
//   <p class="film-info">${animation.title} </p>
//   <p class="film-info"> ${animation.release_date}</p>
//   </div>
//   `
//     )
//     .join("");
// }

function defineAlphabeticalFilter() {
  let alphabeticalFilter = null;
  if (filterButton.value === "Show films from A - Z") {
    alphabeticalFilter = films.alphabeticOrderFilter(allAnimations);
    filterButton.value = "Show films from Z - A";
    filterType.innerHTML = "A - Z";
  } else if (filterButton.value === "Show films from Z - A") {
    alphabeticalFilter = films.inverseAlphabeticOrderFilter(allAnimations);
    filterButton.value = "Show films from A - Z";
    filterType.innerHTML = "Z - A";
  }
  showFilmsAlphabeticalOrder(alphabeticalFilter);
}

function showFilmsAlphabeticalOrder(alphabeticalFilter) {
  animationCards.innerHTML = alphabeticalFilter
    .map(
      (animation) =>
        `
<div class="cards">
<img class="posters" src="${animation.poster}" alt="Pôster de ${animation.title}">
<p class="film-info">${animation.title} </p>
<p class="film-info"> ${animation.release_date}</p>
</div>
`
    )
    .join("");
}

function createElement(data) {
  const parentDiv = document.querySelector(".top-info");
  const childDiv = document.getElementById("buttons");
  const newDiv = document.createElement("div");
  newDiv.classList.add("list-container");
  newDiv.innerHTML =
    "Total number of animations produced by Studio Ghibli: " + data.length;
  parentDiv.insertBefore(newDiv, childDiv);
}

createElement(allAnimations);
