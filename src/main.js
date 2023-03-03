import {filtrarPersonagens} from "./data.js"

document.querySelector('#botao').onclick = () => {
  const valor = document.querySelector('#input').value
  const elementosDaLista = []
  const traducoesDasCasa = {
    Gryffindor: 'Grifinória',
    Slytherin: 'Sonserina',
    Ravenclaw: 'Corvinal',
    Hufflepuff: 'Lufa-lufa'
  }
  const traducoesDosGeneros = {
    Male: 'Homem',
    Female: 'Mulher'
  }
  const traducaoEspecie = {
    Human: 'Humano'
  }
  filtrarPersonagens(valor).forEach((personagem) => {
    elementosDaLista.push(`
      <div class="card">
        <div class="card-info">
          <h2>${personagem.name}</h2>
          <p>Gênero: ${traducoesDosGeneros[personagem.gender]}</p>
          <p>Data de nascimento: ${personagem.birth}</p>
          <p>Espécie: ${traducaoEspecie[personagem.species]}</p>
          <p>Livros apresentados: ${personagem.books_featured_in}</p>
          <p>Casa de estudo: ${personagem.house ? traducoesDasCasa[personagem.house] : 'Sem casa'}</p>
        <div class="back"></div>
        </div>
        </div>
  
    `)
  })
  document.querySelector('.card-container').innerHTML = elementosDaLista.join('')
}



