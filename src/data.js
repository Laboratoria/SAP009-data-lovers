export function harryFunçoes(name, listCharacterHouseFilter) {
  return listCharacterHouseFilter.filter((user) => user.name.includes(name));
}
//FILTRO VER TODOS
export function filterHouse(house, characters) {
  return characters.filter((user) => user.house === house); //retorna array
}
//ORDENAÇÃO
export const orderName = (a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
};
export const selectNameAz = (characters) => {
  return characters.sort(orderName);
};
export const selectNameZa = (characters) => {
  return characters.sort(orderName).reverse();
};
//FILTRO POR CASAS
export const filtroCasa = (characters, house) => {
  const resultadoCasas = characters.filter(function (character) {
    if (character.house === null) {
      return false;
    }
    const casaFiltro = character.house.includes(house); //determina se a condição pode ser encontrado dentro da string
    return casaFiltro;
  });
  return resultadoCasas;
};
//CÁLCULO AGREGADO
export const calcPercentage = (todos, parte) => {
  return (parte / todos).toFixed(2);
};
