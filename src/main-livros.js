import {filtrarLivros} from "./data.js"
document.querySelector('#botao-livros').onclick = () => {
  const valorLivros = document.querySelector('#input-livros').value
  const elementosDaListaLivros = []
  filtrarLivros(valorLivros).forEach((livro) => {
    //push é a função que joga itens pro nosso array vazio (elemtos da lista)
    elementosDaListaLivros.push(`
      <div class="card">
        <div class="card-info">
          <h2>${livro.title}</h2>
          <p>Descrição (inglês): ${livro.description}</p>
          <p>Dia de lançamento (inglês): ${livro.releaseDay}</p>
          <p>Autor: ${livro.author}</p>
        </div>
      </div>
    `)
  })
  document.querySelector('.card-container-livros').innerHTML = elementosDaListaLivros.join('')
}
