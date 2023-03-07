import { filterSport , filterMedal , sortDataByAthleteName } from './data.js'; // importa o arquivo do data.js

import data from './data/athletes/athletes.js';

const chooseMedal = document.getElementById("selectMedal"); // manipulação de DOM, pegando o id do HTML de selecionar o páis.
const chooseSport = document.getElementById("selectSport"); // manipulação de DOM, pegando o id do HTML de selecionar o a modalidade.
const chooseOrder = document.getElementById("selectOrder"); // manipulação de DOM, pegando o id do HTML de selecionar a ordem (A-Z / Z -A).
const endButton = document.getElementById("okButton3"); // manipulação de DOM, pegando o id do HTML do botão.
const selectAllOptions = document.getElementById("selectTheOptions3"); // manipulação de DOM, pegando o id do HTML da mensagem para selecionar tudo.

// para cada elemento "sport" do banco de dados, foi criado um elemento <option> e que foi adicionado ao elemento <select> :
const sportsSet = new Set();// Cria uma variável para receber o objeto Set. 
data.athletes.forEach(function(athlete) { //Percorre o array "athletes" do objeto "data"e adiciona cada valor de modalidade ao objeto Set.
  sportsSet.add(athlete.sport); // Adiciona à variável (objeto Set) o array de "sport".
});
const sportsArray = Array.from(sportsSet).sort(); // Converte o objeto Set em um array e ordena os valores em ordem alfabética.
sportsArray.forEach(function(sport) { // Adiciona cada esporte como uma opção no elemento select.
  const option = document.createElement("option"); //cria um elemento <option> para cada elemento "sport". 
  option.value = sport; // O "value" pega o valor do elemento <option>, que foi definido como o valor de "sport" do elemento "athlete".
  option.text = sport; // representa o conteúdo do texto na <option>, que recebe o "sport" de cada "athlete".
  chooseSport.appendChild(option); // acrescenta à varível ESCOLHER ESPORTE, o que foi declarado entre parênteses (o texto do elemento <option>).
});

endButton.addEventListener("click", () => {
  const selectedOrder = chooseOrder.value; // Cria varíavel (ordem) para obter o valor (value) do evento, ou seja, no momento em que o <select> é modificado, e o usuário escolhe uma oção de ordem, esse valor "escolhido" pelo usuário é obtido.
  const selectedMedal = chooseMedal.value; // Cria varíavel (país selecionado) para obter o valor (value) do evento, ou seja, no momento em que o <select> é modificado, e o usuário escolhe uma oção de país, esse valor "escolhido" pelo usuário é obtido.
  const selectedSport  =  chooseSport.value; // Cria varíavel (país selecionado) para obter o valor (value) do evento, ou seja, no momento em que o <select> é modificado, e o usuário escolhe uma oção de país, esse valor "escolhido" pelo usuário é obtido.

if (selectedOrder === "" || selectedMedal === ""  || selectedSport === "") {
 selectAllOptions.innerHTML = "⚠️ Por favor, selecione todas as opções antes de clicar em OK";
} else {
  generateTableBySport(selectedSport , selectedMedal , selectedOrder); // Chama a função de exibição de tabela com base no país e na ordem selecionados.
}
});

  function generateTableBySport(sportName , medalName , order) { // Função que filtra os dados do banco de dados com base no tipo de madalha, no nome do esporte/modalidade e na ordem (A-Z / Z -A).

    const filterDataMedal = filterMedal(data.athletes, "medal", medalName); // Cria variável para receber o filtro das medalhas do banco de dados.
    
    const filterDataSport = filterSport(filterDataMedal, "sport", sportName); //Cria variável para receber o filtro dos esportes do banco de dados.

   const sortedMedalAndSport = sortDataByAthleteName (filterDataSport, order); // Cria variável para receber a função de ORDENAÇÃO do data.js e passar o paramêtro da variável de filtro por medalha, filtro por esporte e da ordem.
    
    // construindo a tabela com os dados filtrados e ordenandos, puxando o elemento do HTML "tableFilter", e definindo o conteúdo do elemento "table" (que foi estilizado no CSS)
    tableFilter.innerHTML = `
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
       ${sortedMedalAndSport.map((athlete) => ` 
          <tr>
            <td>${athlete.name}</td>
            <td>${athlete.gender}</td>
            <td>${athlete.height}</td>
            <td>${athlete.weight}</td>
            <td>${athlete.sport}</td>
            <td>${athlete.team}</td>
            <td>${athlete.noc}</td>
            <td>${athlete.age}</td>
            <td>${athlete.event}</td>
            <td>${athlete.medal}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}// O map invoca a variável filteredData passada por argumento para cada elemento do Array (athletes) e devolve um novo Array como resultado. O join junta todos os elementos de um array (athletes.name, athletes.gender, etc...) em uma string e retorna esta string. Aqui, ele junta o <tr> (que  define uma linha de células em uma tabela), o <th> (que define uma célula como cabeçalho de um grupo de células da tabela) e o <td> (que define uma célula de uma tabela que contém dados).