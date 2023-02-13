import data from './data/ghibli/ghibli.js';

/*const films = data.films
const characters = document.getElementById('charactersCards')

function showingCharactersCards(films) {
  const listOfPeople = films.map((film) => {
    const people = film.people.map((person) => {
      const allPeople = 
    `
     <div id="divCharacterCard" class="characters">
     <strong class="charactersTitle">${person.name}</strong>
     <img alt="Character poster" src="${person.img}"/>
     </div>
    `
      return allPeople
    });
    return people.join('');
  })
  return listOfPeople.join('');
}

characters.innerHTML = showingCharactersCards(films)*/

const films = data.films
const characters = document.getElementById('charactersCards')

function showingCharactersCards(films) {
  const listOfPeople = films.map((film) => {
    const people = film.people.map((person) => {
      const allPeople = 
    `
    <div id="container">
    <div id="card">


     <div id="frontCard" class="characters">
     <img id="characterImg" alt="Character poster" src="${person.img}"/>
     <div id="charactersName">
     <p class="charactersTitle">${person.name}</p>
     <p class="charactersMovie">(${film.title})</p>
     </div>
     </div>

      <div id="backCard" class="characters">
      <ul style="list-style: none;">
      <li id="gender"><strong>Gender:</strong> ${person.gender}</strong>
      <li id="age"><strong>Age:</strong> ${person.age}</strong>
      <li id="eye_color"><strong>Eye color:</strong> ${person.eye_color}</strong>
      <li id="hair_color"><strong>Hair color:</strong> ${person.hair_color}</strong>
      <li id="specie"><strong>Specie:</strong> ${person.specie}</strong>
      </ul>
     </div>

     </div>
     </div>
    `
      return allPeople
    });
    return people.join('');
  })
  return listOfPeople.join('');
}

characters.innerHTML = showingCharactersCards(films) 

console.log(data)