export const sortData = (data, condition) => {
  const filteredData = [...data.characters]; // é feita uma cópia do array, para não modificar o original
  if (condition === 'az') {
    filteredData.sort((a, b) => (a.name > b.name) ? 1 : -1); // Ordenamos de A - Z
  } else if (condition === 'za') {
    filteredData.sort((a, b) => (a.name < b.name) ? 1 : -1);
  }
  return filteredData
};

export function filterData(characters, selection) {
  return characters.filter(character => {
    if (selection === 'male') {
      return character.gender === 'Male';
    } else if (selection === 'female') {
      return character.gender === 'Female';
    } else {
      return true;
    }
  });
}

export function filterHouse(characters, house) {
  if (house === 'todas') {
    return characters;
  } else {
    return characters.filter(character => character.house === house);
  }
}


//export const anotherExample = () => {
//  return 'OMG';
//};


