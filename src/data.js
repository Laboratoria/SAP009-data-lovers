// estas funciones son de ejemplo
export const filtrarNome = (pokemon, name) => {
  const nomeFiltrado = pokemon.filter(item =>
    item.name.toLowerCase().includes(name));
  return nomeFiltrado;
};



export const ordenarPorAZ = pokemons.sort(function(a, b){
  if(a.name < b.name){
    return -1;
  } else{
    return 1;
  }
  return ordenarPorAZ;
});

