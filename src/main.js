import { example } from './data.js';
import data from './data/harrypotter/data.js';
// import data from './data/lol/lol.js';
<<<<<<< HEAD
import data from './data/harrypotter/data.js';
=======
// import data from './data/pokemon/pokemon.js';
>>>>>>> cac1fcd2abb284881497cdec7ebb4f11d5efe961
// import data from './data/rickandmorty/rickandmorty.js';

const filterHouse = document.getElementById("filter-house")

filterHouse.addEventListener("change", () => {
  const houseSelect = filterHouse.value;
  // Llamar a la función correspondiente para filtrar los datos
  if (houseSelect === 'todas') {
    // Mostrar todos los datos
    showData(data);
  } else if (houseSelect === 'gryffindor') {
    // Filtrar por casa Gryffindor
    const filteredData = filterData(data, 'Gryffindor');
    showData(filteredData);
  } else if (houseSelect === 'slytherin') {
    // Filtrar por casa Slytherin
    const filteredData = filterData(data, 'Slytherin');
    showData(filteredData);
  } else if (houseSelect === 'ravenclaw') {
    // Filtrar por casa Ravenclaw
    const filteredData = filterData(data, 'Ravenclaw');
    showData(filteredData);
  } else if (houseSelect === 'hufflepuff') {
    // Filtrar por casa Hufflepuff
    const filteredData = filterData(data, 'Hufflepuff');
    showData(filteredData);
  }
});


// console.log(example, data);
