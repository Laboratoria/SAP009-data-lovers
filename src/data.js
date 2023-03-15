//Função para ordenar por A-Z/Z-A
export function sortByOrderFilms(films, orderBy){
  const newArray = [...films]

  if(orderBy === "az") {
    newArray.sort(function(a,b){
      if(a.title < b.title){
        return -1;
      }
    })
  } else {
    newArray.sort(function(a,b){
      if(a.title > b.title){
        return -1;
      }
    })
  }
  return newArray;
}

// Função filtrar mais/menos avaliados -- rever 
export function sortByScore(films, selected){
  const newArray = [...films]
  
  const sorted = newArray.sort(function(a, b) {
    if(selected === 'highScore'){
      return b.rt_score - a.rt_score;
    }
    return a.rt_score - b.rt_score;
  })
  return sorted;
} 

// Função filtrar por diretor
export const filters = (array, key, condition) =>
  array.filter((item) => item[key] === condition);

// Função para filtro de Genero
export const filterGender = (characters, gender) =>{
  return characters.filter((character) =>{
    return character.gender === gender
  })
} 

export const getCharacters = (films) =>{
  let characters = []
  films.forEach(filme => {
    characters = [...characters, ... filme.people]
  })
  return characters
}

export const getCharacterByID = (characters, characterID) =>{
  return characters.filter((character) => {
    return character.id === characterID
  })[0]
}

// Função personagens por filmes

export const filterFilm = (names, title) =>{
  return names.filter((name) => {
    return name.title === title
  })[0]
}


