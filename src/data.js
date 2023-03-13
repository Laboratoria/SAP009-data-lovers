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
export const brazilMedals = (dataArray, key, value) => { // ******VER O .REDUCE*****

  const brazilMedals = dataArray.filter(medal => medal[key] === value && medal.country === 'BRA'); // Filtra o array para manter apenas as medalhas do Brasil com a chave e o valor fornecidos.
  const totalMedals = dataArray.filter(medal => medal[key] === value).length; // Calcula o total de medalhas do Brasil. O length é usado para obter o tamanho do novo array, que representa o total de medalhas do Brasil. Essa quantidade é armazenada na variável totalMedals.
  const percentage = brazilMedals.length / totalMedals * 100;  // Calcula a porcentagem de medalhas do Brasil em relação ao total.
  return percentage.toFixed(2);  // Retorna a porcentagem formatada com 2 casas decimais
}
