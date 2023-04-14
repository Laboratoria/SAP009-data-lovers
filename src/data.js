
export const filtrarPorFuncao = (arrayAllChampions,funcao) => {
  return arrayAllChampions.filter((champion)=>champion.tags.includes(funcao));
};


export const ordenacaoAz = (arrayAllChampions) => {
  return [
    ...arrayAllChampions.map( x => ({...x}))].sort((a, b) => { //recriar um array pra ser ordenado 
    return a.name < b.name ? -1 : 1; 
  });
};


export const ordenacaoZa = (arrayAllChampions) => {
  return ordenacaoAz(arrayAllChampions).reverse()
}

