import data from "./data/ghibli/ghibli.js";
const allAnimations = data.films;

//const showAnimations = (allAnimations) => {
function showAnimations(allAnimations) {
  return allAnimations.map((animation) =>
  `
  <div class="cards">
  <img class="posters" src="${animation.poster}" alt="Pôster do filme">
  <p class="film-info">${animation.title} - ${animation.release_date}</p>
  </div>
  `).join("");
}
document.querySelector(".animation_cards").innerHTML = showAnimations(allAnimations);




















//document.getElementById("list-container").innerHTML = showAll(data);

/*document.querySelector(".animation_cards").innerHTML = showInfo(data);

function showInfo(data) {
  const allAnimations = [];
  const allAnimationsPoster = [];
  for (let i = 0; i < data.films.length; i++) {
    const animationPoster = data.films[i].poster
    const animationTitle = data.films[i].title;
    const animationRelease = data.films[i].release_date;
    allAnimations.push(animationTitle + " - " + animationRelease);
  }
  return `<ul>
            ${allAnimations.map((item) => `<li>${item}</li>`).join("")}
          </ul>`;
}*/



