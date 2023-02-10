
function searchData(inputValue, list) {
  const newSearch = list.filter(pokemon => pokemon.name.includes(inputValue));
  return newSearch;
}

function filterPokemon(value, list) {
  const newFilter = list.filter(pokemon => pokemon.type.includes(value));
  return newFilter;
}
function order(value, list) {
  if (value === "a-z") {
    list.sort(function(a,b){
      if(a.name < b.name){
        return -1;
      }
      if(a.name > b.name){
        return 1;
      }
      return 0;
    });
  }
  else if (value === "z-a") {
    list.sort(function(a,b){
      if(a.name < b.name){
        return 1;
      }
      if(a.name > b.name){
        return -1;
      }
      return 0;
    });
  }
}

function computerType (newFilter, list) {
  return ((newFilter.length / list.length)*100).toFixed(2)

}

export {
  searchData,
  filterPokemon,
  order, 
  computerType
};

//criar uma função que pegue o valor escrito no input
//consulte o pokemon.js(data) e imprima na tela todos com aquele nome
