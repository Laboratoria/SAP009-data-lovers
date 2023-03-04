
export function harryFunçoes(name, listCharacterHouseFilter) {
  return listCharacterHouseFilter.filter((user) => user.name.includes(name));
}

//FILTRO VER TODOS


export function filtrarCasa(listArray, valueSelect) {
  const casasPersonagem = listArray.filter((itemListaArray) =>
    itemListaArray.house.includes(valueSelect)
  );
  //filtro precisa filtrar apenas o item indicado
  //includes retornar verdadeiro ou falso caso encontre o que está procurando

export function harryFunçoes(name, listCharacterHouseFilter) {
  return listCharacterHouseFilter.filter((user) => user.name.includes(name));
}
//FILTRO POR CASAS
export function countCharactersHogwarts(characters) {
  const houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
  return characters.filter((user) => houses.includes(user.house)).length;
}

//FILTRO VER TODOS 

export function filterHouse(house, characters) {
  return characters.filter((user) => user.house === house);
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

export const filtroCasa = (allPersonagens, house) => {
  const resultadoCasas = allPersonagens.filter(function (house) {
    if (allPersonagens.house === null) {
      //condição para o que for null não apareça no filtro pode usar diferente de null só ?
      return false;
    }
    const casaFiltro = allPersonagens.house.includes(house); //determina se a condição pode ser encontrado dentro da string
    return casaFiltro;
  });
  return resultadoCasas;
};


export const selectNameAz = (characters) => {
  return characters.sort(orderName);
};
export const selectNameZa = (characters) => {
  return characters.sort(orderName).reverse();
};

