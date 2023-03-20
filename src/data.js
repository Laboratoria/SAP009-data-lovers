// cria um array com o nome de todos os personagens 
export const getPeople = (films) =>  films.reduce((total, film) => total.concat(film.people), []);

// filtro pessoas
export const filterByGender = (data, gender) => {
  return data.filter((personagem) => personagem.gender === gender)
}

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

//filtro por título do filme
export const filterByFilms = (data, title) => {
  return data.filter((films) => films.film === title)
}


// criando um array com os personagens e o título de seu filme
export const getFilmsWithPeople = (films) => films.reduce((total, film) => {
  const people = film.people.map(person => ({ ...person, film: film.title }));
  return total.concat(people);
}, []);

