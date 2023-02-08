import data from "./data/ghibli/ghibli.js";

//document.getElementById("list-container").innerHTML = showAll(data);

document.querySelector(".animation_cards").innerHTML = showInfo(data);

/*function showInfo(data) {
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

function showInfo(data) {
  const allAnimations = [];
  const allAnimationsPosters = [];
  for (let i = 0; i < data.films.length; i++) {
    const animationPoster = data.films[i].poster;
    const animationTitle = data.films[i].title;
    const animationRelease = data.films[i].release_date;
    allAnimations.push(animationTitle + " - " + animationRelease);
    allAnimationsPosters.push(animationPoster); 
  }
  return `<ul>
            ${allAnimations.map((item) => `<li>${item}</li>`).join("")}
          </ul>`
}

