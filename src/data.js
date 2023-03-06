// estas funciones son de ejemplo
export const filtrarNome = (pokemons, name) => {
  const nomeFiltrado = pokemons.filter(item =>
    item.name.toLowerCase().includes(name));
  return nomeFiltrado;
};

export const filtrarTipo = (pokemons, type) => {
  const tipoFiltrado = pokemons.filter (item =>
    item.type.includes(type));
  return tipoFiltrado;
};

export const calcPorcentagem = (pokemonsLength, typeLength) =>
  (typeLength / pokemonsLength) * 100 

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


export const filtrarRegiao = (pokemons, regiao) => {
  const regiaoFiltrado = pokemons.filter(item =>
    item.generation.name === regiao);
  return regiaoFiltrado;
}

