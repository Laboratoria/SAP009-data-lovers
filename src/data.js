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

export const filtrarRegiao = (pokemons, regiao) => {
  const regiaoFiltrado = pokemons.filter(item =>
    item.generation.name === regiao);
  return regiaoFiltrado;
}

