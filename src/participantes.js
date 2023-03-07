import {filterGender,filterData,filterAge,ascendingOrder,descendingOrder} from './data.js';
import data from './data/athletes/athletes.js';

const tableCreated = document.querySelector('#tableFilter');
const genderSelector = document.querySelector('#selectGender');
const ageSelector = document.querySelector('#selectAge');
const orderSelector = document.querySelector('#selectOrder'); 
const endButton = document.getElementById("okButton2"); // manipulação de DOM, pegando o id do HTML do botão.
const selectAllOptions = document.getElementById("selectTheOptions2"); // manipulação de DOM, pegando o id do HTML da mensagem para selecionar tudo.

const arrayAthletes = data.athletes;

endButton.onclick = () => {

  if (genderSelector.value === "" || ageSelector.value === "" || orderSelector.value === "") {
  selectAllOptions.innerHTML = "⚠️ Por favor, selecione todas as opções antes de clicar em OK";
 
  
} else {
    const gender = filterGender(arrayAthletes, "gender", genderSelector.value);
    const filterOne = filterAge(gender, ageSelector.value);
    const filtered = filterData(filterOne, "gender", genderSelector.value);

    let sortedAthletes;
    if (orderSelector.value === 'a-z') {
      sortedAthletes = ascendingOrder(filtered);
    } else {
      sortedAthletes = descendingOrder(filtered);
    }

    tableCreated.innerHTML =  `
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Gênero</th>
            <th>Altura</th>
            <th>Peso</th>
            <th>Esporte</th>
            <th>País</th>
            <th>Sigla</th>
            <th>Idade</th>
            <th>Evento</th>
            <th>Medalha</th>
          </tr>
        </thead>
        <tbody>
          ${sortedAthletes.map(element => `
            <tr>
              <td>${element.name}</td>
              <td>${element.gender}</td>
              <td>${element.height}</td>
              <td>${element.weight}</td>
              <td>${element.sport}</td>
              <td>${element.team}</td>
              <td>${element.noc}</td>
              <td>${element.age}</td>
              <td>${element.event}</td>
              <td>${element.medal}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
}