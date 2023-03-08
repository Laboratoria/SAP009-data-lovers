import data from './data/harrypotter/data.js';
import { sortData, filterData, filterHouse } from './data.js'


const select = document.getElementById("ordenalfa");
select.addEventListener('change', () => {
  const selectedOption = select.options[select.selectedIndex].value;
  const filteredData = sortData(data, selectedOption);
  showNames(filteredData);
})

function showNames(characters) {
  const list = document.getElementById('list');
  list.innerHTML = "";  // esvaziamos a lista antes de adicionar os novos elementos

  for (const character of characters) {
    const li = document.createElement("li");
    li.textContent = character.name;
    list.appendChild(li);
  }
}

const filterGenero = document.getElementById('filter-genero');
const personajesList = document.querySelector('ul');

function showPeople(characters) {
  personajesList.innerHTML = '';
  characters.forEach(character => {
    const li = document.createElement('li');
    li.textContent = character.name;
    personajesList.appendChild(li);
  });
}

filterGenero.addEventListener('change', () => {
  const selection = filterGenero.value;
  if (selection === 'genero') {
    showPeople(data.characters);
  } else {
    const personsFilter = filterData(data.characters, selection);
    showPeople(personsFilter);
  }
});




// console.log(data.characters);


