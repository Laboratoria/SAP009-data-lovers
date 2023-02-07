/* Recomendamos que este arquivo contenha toda a funcionalidade que corresponda a obter, processar e manipular dados (suas funções):

filterData(data, condition): esta função receberia os dados e nos retornaria os que cumprem com a condição.

sortData(data, sortBy, sortOrder): esta função recebe três parâmetros. O primeiro, data, nos entrega os dados. O segundo, sortBy, diz respeito a qual das 
informações quer usar para ordenar. O terceiro, sortOrder, indica se quer ordenar de maneira crescente ou decrescente.

computeStats(data): essa função nos permite fazer cálculos estatísticos básicos para serem exibidos de acordo com o que os dados permitem.

Estes nomes de funções e parâmetros são somente referência, o que vocês decidir utilizar vai depender da sua implementação. */

// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
}*/

export function order(data, value){
  if (value === "A-Z"){ //Se a pessoa escolher de A ao Z
    return data.sort((a, z) => a.title > z.title ? 1 : -1) //se a for maior do que z, retorna 1; caso contrário, retorna -1. Ou seja, será do A ao Z (crescente)
  } else { //Se a pessoa escolher de Z ao A
    return data.sort((a, z) => a.title < z.title ? -1: 1) //se a for menor do que z, retorna -1; caso contrário, retorna 1. Ou seja, será do Z ao A (decrescente)
  }
}

