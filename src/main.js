import data from "./data/ghibli/ghibli.js";

document.getElementById("list-container").innerHTML = showAll(data);

function showAll(data) {
  const allAnimationTitles = [];
  for (let i = 0; i < data.films.length; i++) {
    const animationTitle = data.films[i].title;
    allAnimationTitles.push(animationTitle);
  }
  return `<ul>
            ${allAnimationTitles.map((item) => `<li>${item}</li>`).join("")}
          </ul>`;
}
