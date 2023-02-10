import data from "./data/ghibli/ghibli.js";
// estas funciones son de ejemplo

// export const example = () => {
//   return "example";
// };

// export const anotherExample = () => {
//   return "OMG";
// };

export const sortAZ = {
  alphaFilter: function alphaFilter() {
    //Variável para encontrar os films em data
    const films = data.films;
    //Variável que retorna os títulos dos filmes como array
    const teste = films.map(
      (animation) => animation.title);
    //Variável para colocar em ordem os títulos
    const sorted = teste.sort();
    return alert(((sorted).join(" ")));
  }};