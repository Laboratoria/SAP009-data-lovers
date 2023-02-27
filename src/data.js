// estas funciones son de ejemplo
export const filtrarNome = (pokemon, name) => {
  const nomeFiltrado = pokemon.filter(item =>
    item.name.toLowerCase().includes(name));
  return nomeFiltrado;
};



export const anotherExample = () => {
  return 'OMG';
}