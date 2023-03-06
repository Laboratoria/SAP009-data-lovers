import {filtrarPocoes} from "./data.js"
document.querySelector('#botao-pocoes').onclick = () => {
  const valorPocoes = document.querySelector('#input-pocoes').value
  const elementosDaListaPocoes = []
  filtrarPocoes(valorPocoes).forEach((pocao) => {
    //push é a função que joga itens pro nosso array vazio (elemtos da lista)
    elementosDaListaPocoes.push(`
      <div class="card">
        <div class="card-info">
          <h2>${pocao.name}</h2>
          <p>Descrição: ${pocao.description}</p>
        </div>
      </div>
    `)
  })
  document.querySelector('.card-container-pocoes').innerHTML = elementosDaListaPocoes.join('')
}
