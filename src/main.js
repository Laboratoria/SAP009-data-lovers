import data from './data/rickandmorty/rickandmorty.js';

function getStatusIcon(character) {
    let statusIcon = "●"

    if (character.status === "Alive") {
        statusIcon = `<span style='color: green'>${statusIcon}</span>` // atributo style  adiciona css a qualquer elemento 
    } else if (character.status === "Dead") {
        statusIcon = `<span style='color: red'>${statusIcon}</span>`
    } else {
        statusIcon = `<span style='color: gray'>${statusIcon}</span>`
    }

    return statusIcon
}

function translateStatus(character) {
    const current_status = character.status.toLowerCase()

    const statusTranslation = {
        'alive': "Viv",
        'dead': "Mort",
        'unknown': "Desconhecid"
    }

    let pronoun = ''
    if (character.gender === 'Male') {
        pronoun = 'o'
    } else {
        pronoun = 'a'
    }

    return statusTranslation[current_status] + pronoun
}

function translateSpecies(character) {
    const current_species = character.species.toLowerCase()

    const speciesTranslation = {
        'human': "Humana",
        'alien': "Alienígena",
        'humanoid': "Humanoide",
        'unknown': "Desconhecida",
        'poopybutthole': "Poopybutthole",
        'mytholog': "Mytholog",
        'vampire': "Vampiro",
        'animal': "Animal",
        'robot': "Robô",
        'parasite': "Parasita",
        'cronenberg': "Cronenberg",
        'disease': "Disease"
    }

    return speciesTranslation[current_species]
}

document.querySelector("#main").innerHTML = data
    .results
    .map(character => {
        return `
    <div class="card">
    <img src="${character.image}"
      class="character-image" />
    <div class="character-name">${character.name}</div>
    <div class="character-description">
      <div>${getStatusIcon(character)} ${translateStatus(character)} - ${translateSpecies(character)} - ${character.gender}</div>
      <div>Origem: ${character.origin.name}</div>
      <div>Vive em: ${character.location.name}</div>
    </div>
  </div>
  </div>
  `
    }).join('')

