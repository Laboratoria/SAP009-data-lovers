import { filterCountry , sortDataByAthleteName , brazilMedals } from './data.js'; // importa o arquivo do data.js

import data from './data/athletes/athletes.js';

const chooseCountry = document.getElementById("selectCountry"); // manipulação de DOM, pegando o id do HTML de selecionar o páis.
const chooseOrder = document.getElementById("selectOrder"); // manipulação de DOM, pegando o id do HTML de selecionar a ordem (A-Z / Z -A).
const endButton = document.getElementById("okButton"); // manipulação de DOM, pegando o id do HTML do botão.
const selectAllOptions = document.getElementById("selectTheOptions1"); // manipulação de DOM, pegando o id do HTML da msg para selecionar tudo.
const calculationOfBrazilianMedalists = document.querySelector("#aggregateCalculation"); // manipulação de DOM, pegando o id do HTML do cálculo agregado.

const percentageBrazil = (brazilMedals(data.athletes , "team" , "Brazil"));
 
calculationOfBrazilianMedalists.innerHTML = ` “Em 2016, A porcentagem total de atletas medalhistas brasileiros foi de ${percentageBrazil} % ” `

// para cada elemento "team" do banco de dados, foi criado um elemento <option> e que foi adicionado ao elemento <select> :
const countrySet = new Set(); // Cria uma variável para receber o objeto Set. 
data.athletes.forEach(function(athlete) { //Percorre o array "athletes" do objeto "data"e adiciona cada valor de país ao objeto Set.
  countrySet.add(athlete.team); // Adiciona à variável (objeto Set) o array de "team".
});
const countrysArray = Array.from(countrySet).sort(); // Converte o objeto Set em um array e ordena os valores em ordem alfabética.
countrysArray.forEach(function(team) { // Adiciona cada páis como uma opção no elemento select.
  const option = document.createElement("option"); //cria um elemento <option> para cada elemento "team". 
  option.value = team; // O "value" pega o valor do elemento <option>, que foi definido como o valor de "team" do elemento "athlete".
  option.text = team; // representa o conteúdo do texto na <option>, que recebe o "team" de cada "athlete".
  chooseCountry.appendChild(option); // acrescenta à varível ESCOLHER PAÍS, o que foi declarado entre parênteses (o texto do elemento <option>).
});

   endButton.addEventListener("click", () => {
    const selectedOrder = chooseOrder.value; // Cria varíavel (ordem) para obter o valor (value) do evento, ou seja, no momento em que o <select> é modificado, e o usuário escolhe uma oção de ordem, esse valor "escolhido" pelo usuário é obtido.
    const selectedTeam = chooseCountry.value; // Cria varíavel (país selecionado) para obter o valor (value) do evento, ou seja, no momento em que o <select> é modificado, e o usuário escolhe uma oção de país, esse valor "escolhido" pelo usuário é obtido.

  if (selectedOrder === "" || selectedTeam === "") {
   selectAllOptions.innerHTML = "⚠️ Por favor, selecione todas as opções antes de clicar em OK";
  } else {
    generateTableByCountry(selectedTeam, selectedOrder); // Chama a função de exibição de tabela com base no país e na ordem selecionados.
  }
});

  function generateTableByCountry(teamName , order) { // Função que filtra os dados do banco de dados com base no nome do país e na ordem.
        
    const filterDataCountry = filterCountry(data.athletes, "team", teamName); // Cria variável para receber o filtro dos países do banco de dados.
    
    const sortedCountry = sortDataByAthleteName (filterDataCountry , order); // Cria variável para receber a função de ORDENAÇÃO do data.js e passar o paramêtro da variável de filtro por país e da ordem.

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
       ${sortedCountry.map((athlete) => ` 
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