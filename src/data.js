export function filterGender(data, key, value) {
  const filter = data.filter((element) => element[key] === value);
  return filter;
}

export function filterData(data, key, value) {
  const filter = data.filter((element) => element[key] === value);
  return filter;
}

export function filterAge (data, range) {
  const idades =   range.split("-")
  const min = Number(idades[0])
  const max = Number(idades[1])
  console.table(min,max)
  const grupo1 = data.filter(({ age }) => age  >= min && age <= max );
  return grupo1;
}

export const ascendingOrder = (data) => {
  const order = data.sort(function (a, b) {
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1;
    }
    else {
      return -1;
    }
  })
  return order;
}

export const descendingOrder = (data) => {
  return ascendingOrder(data).reverse()
}


export function sortDataByAthleteName(athletes , order) {
  const sorted = [...athletes];
  sorted.sort((a, b) => a.name.localeCompare(b.name))
  if (order === "a-z" ) {
    return sorted
  } else {
    return sorted.reverse()
  }
}
export function filterCountry(dataArray, key, value) {
  return dataArray.filter(item => item[key] === value); // Essa função receberá três parâmetros: um array de objetos (data.athletes), uma chave ('team') e um valor (o nome do país selecionado pelo usuário). A função irá retornar um novo array contendo apenas os objetos que possuem o valor especificado para a chave correspondente.
}
export function filterMedal(dataArray, key, value) {
  return dataArray.filter(item => item[key] === value);
}
export function filterSport(dataArray, key, value) {
  return dataArray.filter(item => item[key] === value);
}

export function brazilMedals (dataArray, key, value) { // Função que calcula a porcentagem de medalhas olímpicas que o Brasil ganhou em relação ao total.

  const totalMedals = dataArray.length;   // Variável que pega o comprimento do número total de medalhas.

  const medalsOnlyFromBrazil = dataArray.reduce((acc, item) => {  // Conta o número de medalhas ganhas pelo Brasil. Aqui estamos filtrando os dados utilizando o reduce, que executa uma função reducer para cada elemento do array, resultando num único valor de retorno. O valor de retorno da da função reducer é atribuída ao acumulador (acc). 

    if (item[key] === value) { // SE, o o item da chave for exatamente igual ao valor, ou seja, se o país for exatamente igual a "Brazil".

      return acc + 1; // retorne acc + 1. O parâmetro acc é uma variável de acumulador que é usada na função reduce. Essa variável é atualizada a cada iteração da função, com o objetivo de armazenar o resultado intermediário da operação realizada pelo reduce.
    }
    return acc;  
  }, 0);

return Number((medalsOnlyFromBrazil * 100 / totalMedals).toFixed(2)); // Retorna a porcentagem formatada com 2 casas decimais. Calcula a porcentagem de medalhas ganhas pelo Brasil em relação ao total, dividindo as medalhas somente do Brasil, multiplicando por 100 e dividindo pelo total de medalhas.
}