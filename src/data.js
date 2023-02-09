// estas funciones son de ejemplo

// export const example = () => {
//   return "example";
// };

// export const anotherExample = () => {
//   return "OMG";
// };
import data from "./data/ghibli/ghibli.js";
const titles = data.films.titles;

export const films = {
  alphaFilter: function alphaFilter() {
    const films = data.films;
    const teste = films.map(
      (animation) => animation.title).join("");
      console.log(teste);
    // return alert("gildovigor");
  },
  //maskify: function maskify(teste) {},
};