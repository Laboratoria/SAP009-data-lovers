export function filtrarCasa(listArray, valueSelect) {
  const casasPersonagem = listArray.filter((itemListaArray) =>
    itemListaArray.house.includes(valueSelect)
  );
  //filtro precisa filtrar apenas o item indicado
  //includes retornar verdadeiro ou falso caso encontre o que está procurando

