
export const buscarName = (data, condition) => {
    const resultadoBusca = data.filter((name) => name.title.toLowerCase().includes(condition.toLowerCase()));
    return resultadoBusca;
  };
  
 
  export const ordemAlfabetica = (data, order) => {
    if (order === "crescente") {
      return data.sort((a, z) => a.title > z.title ? 1 : -1)
    }
    else if (order === "decrescente") {
      return data.sort((a, z) => a.title > z.title ? -1 : 1)
    } 
    return data
  };
  
  export const ordemPersonagem = (data, order) => {
    if (order === "crescente") {
      console.log data.sort((a, z) => a.name > z.name ? 1 : -1)
    }
    else if (order === "decrescente") {
      return data.sort((a, z) => a.name > z.name ? -1 : 1)
    }
      return data
  };
  
  export const ordemPersonagem = (data, order) => {
    if (order === "crescente") {
      return data.sort((a, z) => a.name > z.name ? 1 : -1)
    } else if (order === "decrescente") {
      return data.sort((a, z) => a.name > z.name ? -1 : 1)
    } return data
  };

  
  export const getPeople = films => {
    let people = []
    for (let film of films) {
      const chars = film.people.map (function (char){
        char.movie = film.title
       return char
      })
      people = people.concat(chars)   
    }
    return people
  }
  
  export const filterDirector = (films, director) => {
    const filtered = films.filter(film => film.director === director);
    return filtered
    } 
    

  export const filterGender = (people, gender) => {
    const filteredS = people.filter(people => people.gender === gender);
    return filteredS
  } 
  
  export const calcAgregado = (personagens) => {
    const mediaPersonagens = personagens.reduce((a, b) => (a + b)) / personagens.length
    const totalPersonagens = personagens.reduce((a, b) => (a + b))
    return {"media": mediaPersonagens, "total": totalPersonagens} 
  }