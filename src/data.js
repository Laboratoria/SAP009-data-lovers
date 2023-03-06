// estas funciones son de ejemplo
export const filtrarNome = (pokemon, name) => {
  const nomeFiltrado = pokemon.filter(item =>
    item.name.toLowerCase().includes(name));
  return nomeFiltrado;
};


// códigos para ordenaçao alfabética e numérica crescente e decrescente. localeCompare usado para String
/* export const ordemCompleta = (pokemon) => { */
export const ordemCompletaNome = (pokemon) => {
  const ordenarAZ = pokemon.sort((a, b) => {
    /* a.name.localeCompare(b.name); */
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    }
  })
  return ordenarAZ;
};
/*   export const ordenarZA = pokemons.sort((a, b) => {
    b.name.localeCompare(a.name);
    return ordenarZA;
  }); */

export const ordemCompletaNumero = (pokemon) => {
  const ordenarNum = pokemon.sort((a, b) =>{
    if (a.num < b.num) {
      return -1;
    } else if (a.num > b.num) {
      return 1;
    }
  })
  return ordenarNum;
};
/* 
  export const ordenarNumDecresc = pokemons.sort((a, b) =>{
    b.num - a.num;
    return ordenarNumDecresc;
  }); */
/* }; */
