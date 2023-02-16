/* Recomendamos que este arquivo contenha toda a funcionalidade que corresponda a obter, processar e manipular dados (suas funções):

filterData(data, condition): esta função receberia os dados e nos retornaria os que cumprem com a condição.

sortData(data, sortBy, sortOrder): esta função recebe três parâmetros. O primeiro, data, nos entrega os dados. O segundo, sortBy, diz respeito a qual das 
informações quer usar para ordenar. O terceiro, sortOrder, indica se quer ordenar de maneira crescente ou decrescente.

computeStats(data): essa função nos permite fazer cálculos estatísticos básicos para serem exibidos de acordo com o que os dados permitem.

Estes nomes de funções e parâmetros são somente referência, o que vocês decidir utilizar vai depender da sua implementação. */

//Função para ordenar por A-Z/Z-A
export const sortByOrder = (films) => films.sort((az, za) => {
  if (az.title < za.title) {
    return -1
  } else if (az.title > za.title) {
    return 1
  } else {
    return 0
  }
})

//Função para ordenar por data de lançamento
export const sortByRelease = (films) => films.sort((oldest, recent) => {
  if (oldest.release_date > recent.release_date) {
    return -1
  } else if (oldest.release_date < recent.release_date) {
    return 1
  } else {
    return 0
  }
})

//Função para filtrar por diretor

export const sortByDirector = (films) => films.map((film) => {
  const director = film.director
  const copy = [...new Set(director)]
  return copy

  console.log(copy)
})


//-1 para ordem crescente
//1 para ordem decrescente