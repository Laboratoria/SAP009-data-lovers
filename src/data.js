
// filtro pessoas
export const filterByGender = (data, gender) => {
  return data.filter((personagem) => personagem.gender === gender)
}

export const getPeople = (films) =>  films.reduce((total, film) => total.concat(film.people), []);

// filtro espécie 
export const filterBySpecies = (data, specie) => {
  return data.filter((personagem) => personagem.specie === specie)
}

// filtro por nome 
export const filterByName = (data, name) => {
  return data.filter((personagem) => personagem.name === name)
}


// calculo agregado 
export const calculo = (tipo, total) => {
  return ((tipo / total) * 100).toFixed(1);
}
  