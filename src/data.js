
export const filterByGender = (data, gender) => {
    return data.filter((personagem) => personagem.gender === gender)
}

export const getPeople = (films) =>  films.reduce((total, film) => total.concat(film.people), []);