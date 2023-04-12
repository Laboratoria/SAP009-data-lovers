
export const filtrarPorFuncao = (arrayAllChampions,funcao) => {
  return arrayAllChampions.filter((champion)=>champion.tags.includes(funcao));
};


export const ordenacao = (arrayAllChampions) => {
  return arrayAllChampions.sort((a, b) => {
    return a.name < b.name ? -1 : 1; 
  });
};

export const ordenacaoZa = (arrayAllChampions) => {
  return ordenacao(arrayAllChampions).reverse()
}

