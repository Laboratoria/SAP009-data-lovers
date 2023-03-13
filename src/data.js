
// filtro pessoas
export const filterByGender = (data, gender) => {
  return data.filter((personagem) => personagem.gender === gender)
}

export const getPeople = (films) =>  films.reduce((total, film) => total.concat(film.people), []);

// filtro espécie 
export const filterBySpecies = (data, specie) => {
  return data.filter((personagem) => personagem.specie === specie)
}

export const getSpecies = (films) =>  films.reduce((total, film) => total.concat(film.people), []);

// filtro por nome 
export const filterByName = (data, name) => {
  return data.filter((personagem) => personagem.name === name)
}

export const getNames = (films) => films.reduce((total, film) => total.concat(film.people), []);