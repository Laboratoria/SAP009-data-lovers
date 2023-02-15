/* Recomendamos que este arquivo contenha toda a funcionalidade que corresponda a obter, processar e manipular dados (suas funções):

filterData(data, condition): esta função receberia os dados e nos retornaria os que cumprem com a condição.

sortData(data, sortBy, sortOrder): esta função recebe três parâmetros. O primeiro, data, nos entrega os dados. O segundo, sortBy, diz respeito a qual das 
informações quer usar para ordenar. O terceiro, sortOrder, indica se quer ordenar de maneira crescente ou decrescente.

computeStats(data): essa função nos permite fazer cálculos estatísticos básicos para serem exibidos de acordo com o que os dados permitem.

Estes nomes de funções e parâmetros são somente referência, o que vocês decidir utilizar vai depender da sua implementação. */



export function sortByRelease(films, selected) {
  const filmsRelease = films.filter((film) => {//sort (recebe 2 parâmetros/2 filmes (qual vem antes, qual vem depois))
  
    if (selected === 'oldest') {
      return film.release_date >= 1986 && film.release_date <= 2014
    } else if (selected === 'recent') {
      return film.release_date <= 2014 && film.release_date >= 1986
    }
    return film
  })
  return filmsRelease
}