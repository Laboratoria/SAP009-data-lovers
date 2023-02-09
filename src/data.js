import data from "./data/ghibli/ghibli.js";
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
<<<<<<< HEAD
      (animation) => animation.title).join("");
      console.log(teste);
=======
      (animation) => animation.title);
    console.log(teste);
    teste.sort();
    console.log(teste);
    // const a = ["xaxa", "baba", "gugu"];
    // a.sort();
    // console.log(a);
>>>>>>> ea5c16eb63367d5a3302ed69b73b7715951611a5
    // return alert("gildovigor");
  },
  //maskify: function maskify(teste) {},
};