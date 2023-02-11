//import data from "./data/ghibli/ghibli.js";
// estas funciones son de ejemplo

// export const example = () => {
//   return "example";
// };

// export const anotherExample = () => {
//   return "OMG";
// };

export function searchFilm() {
  //Chamar área do filter e retornar em uppercase para facilitar na digitação
  const input = document.getElementById("filter").value.toUpperCase();
  //Chamar cards do HTML
  const cards = document.getElementsByClassName("cards");

  //Iterar por todos os cards e selecionar os títulos pelo index de cada um
  for (let i = 0; i < cards.length; i++) {
    const titles = cards[i].querySelector("#film-title");
    //console.log(titles);

    //Checar o texto do título em uppercase e o index de input no array 
    if(titles.innerText.toUpperCase().indexOf(input) > -1){
      //Retornar o card do array se o index for válido, ou seja, existir no array (igual ou maior que 0)
      cards[i].style.display = "";
    } else {
      //Se o index for inválido, o display será nulo, e nada aparecerá
      cards[i].style.display = "none";
    }

    //console.log(cards);
  }
}

// Antiga função de teste para encontrar os títulos
/*export const films = {
  alphabeticOrderFilter: function alphabeticOrderFilter() {
    //Variável para encontrar os films em data
    const films = data.films;
    //Variável que retorna os títulos dos filmes como array
    const teste = films.map(
      (animation) => animation.title);
    //Variável para colocar em ordem os títulos
    const sorted = teste.sort();
    return alert(((sorted).join(" ")));
  }}*/