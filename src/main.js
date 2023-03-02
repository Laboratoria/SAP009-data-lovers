import { ordenar, preencherModal, resultadoDoFiltro } from './data.js';

import data from './data/ghibli/ghibli.js';

const arrayGhibli = data;
const filmes = arrayGhibli.films
const root = document.getElementById("root");

function renderizaPoster (posteres){
  const cards = posteres.map(function (item) {
    return `<img class="filme" src="${item.poster}" data-id="${item.id}">`;  // mapeando o array filmes e retornando todos os itens com nome poster e id
  })
  root.innerHTML = cards.join('') // avisa o JS que os posteres vao pro HTML - .join junta todos os itens do array pra que nao printe na tela com virgula, e a string vazia serve pra que nao fiquem colados um no outro
}
renderizaPoster(filmes)

const todosPosteresDoHtml = document.querySelectorAll(".filme")  // selecionando todos os posteres e colocando dentro da variável
todosPosteresDoHtml.forEach((umPosterDoHtml) => umPosterDoHtml.addEventListener("click",(event)=>{  // fazendo um loop nessa seleção de todos os posteres e adicionando o evento de clique para cada poster do html
  informacoes.innerHTML = preencherModal(event.target)
  // event.target -> identifica em que poster aconteceu o clique 
  // preencherModal -> chamando a função preencherModal e enviando o parametro event.target 
  
  bloco.showModal();
}))

const seletorDeFiltro = document.getElementById("filtroProdutor")
seletorDeFiltro.addEventListener('change', function(event){
  const filmesFiltrados = resultadoDoFiltro(filmes, event.target.value)
  renderizaPoster(filmesFiltrados)
})

const seletorDeOrdem = document.getElementById("ordem")
seletorDeOrdem.addEventListener('change', function(event){
  const posteresOrdenados = ordenar(filmes, event.target.value)
  renderizaPoster(posteresOrdenados)

  const todosPosteresDoHtml = document.querySelectorAll(".filme")
  todosPosteresDoHtml.forEach((umPosterDoHtml)=> umPosterDoHtml.addEventListener("click",(event)=>{
    informacoes.innerHTML = preencherModal(filmes, event.target)
    // event.target -> identifica em que poster aconteceu o clique 
    // preencherModal -> chamando a função preencherModal e enviando o parametro event.target 
  
    bloco.showModal();
  }
  ))
})

//teste modal-dialog:

const fechar = document.querySelector(".fechar")
const bloco = document.getElementById("bloco")
const informacoes = document.querySelector(".informacoes")

fechar.addEventListener("click",function(){
  bloco.close();
})
