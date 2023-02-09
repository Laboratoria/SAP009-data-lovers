import data from "./data/ghibli/ghibli.js";
// estas funciones son de ejemplo

// export const example = () => {
//   return "example";
// };

// export const anotherExample = () => {
//   return "OMG";
// };

export const films = {
  alphaFilter: function alphaFilter() {
    const films = data.films;
    const teste = films.map(
      (animation) => animation.title);
    console.log(teste);
    teste.sort();
    console.log(teste);
    // const a = ["xaxa", "baba", "gugu"];
    // a.sort();
    // console.log(a);
    // return alert("gildovigor");
  },

  //maskify: function maskify(teste) {},
};
