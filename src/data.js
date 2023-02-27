// estas funciones son de ejemplo
function filterData(data, condition) {
  return data.filter(item => item.name.toLowerCase().includes(condition.toLowerCase()));
}

function sortData(data, sortBy, sortOrder) {
  return data.sort((a, b) => {
    let x = a[sortBy];
    let y = b[sortBy];
    if (typeof x === "string") {
      x = x.toLowerCase();
      y = y.toLowerCase();
    }
    if (sortOrder === "desc") {
      return y > x ? 1 : -1;
    } else {
      return x > y ? 1 : -1;
    }
  });
}

// Definir la función computeStats
function computeStats(data) {
  // Calcular las estadísticas y devolverlas
  const stats = {};
  const ages = data.map(item => item.age);
  const totalAges = ages.reduce((accumulator, currentValue) => accumulator + currentValue);
  stats.averageAge = totalAges / ages.length;
  stats.numCharacters = data.length;
  return stats;
}


// Exportar las funciones
export { filterData, sortData, computeStats };

//export const example = () => {
//  return 'example';
//};

//export const anotherExample = () => {
//  return 'OMG';
//};