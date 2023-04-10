// estas funciones son de ejemplo

export const filtrarPorFuncao = (arrayAllChampions,funcao) => {
  return arrayAllChampions.filter((champion)=>champion.tags.includes(funcao));
};


//metodo filter utiliza uma função callback, que só é executada depois de uma outra função

