import { ordenar, preencherModal, filtroProdutor, filtroDiretor} from './data.js';

import data from './data/ghibli/ghibli.js';

const arrayGhibli = data;
const filmes = arrayGhibli.films

const root = document.getElementById("root");
const media = document.getElementById("media");

// //somar valores de scores
const somaScore = filmes.reduce((a,b) => a + Number(b.rt_score),0)
const mediaScore = somaScore / filmes.length
media.innerHTML = `The average score of studio Ghibli films is <strong>${mediaScore}</strong>`

//fazer posteres aparecerem no html:

function renderizaPoster (posteres){
  const cards = posteres.map(function (item) {
    return `<img class="filme" src="${item.poster}" data-id="${item.id}">`;  // mapeando o array filmes e retornando todos os itens com nome poster e id
  })
  root.innerHTML = cards.join('') // avisa o JS que os posteres vao pro HTML - .join junta todos os itens do array pra que nao printe na tela com virgula, e a string vazia serve pra que nao fiquem colados um no outro
}
renderizaPoster(filmes)

//ordenar os filmes pela opção clicada em 'order':

const seletorDeOrdem = document.getElementById("ordem")
seletorDeOrdem.addEventListener('change', function(event){
  const posteresOrdenados = ordenar(filmes, event.target.value)
  renderizaPoster(posteresOrdenados)

  const todosPosteresDoHtml = document.querySelectorAll(".filme")
  renderizaModal(todosPosteresDoHtml)
})

//fazer aparecer o modal quando clicar no filme:

const todosPosteresDoHtml = document.querySelectorAll(".filme")  // selecionando todos os posteres e colocando dentro da variável
function renderizaModal (todosPosteresDoHtml){
  todosPosteresDoHtml.forEach((umPosterDoHtml)=> umPosterDoHtml.addEventListener("click",(event)=>{
    informacoes.innerHTML = preencherModal(filmes, event.target)
    // event.target -> identifica em que poster aconteceu o clique 
    // preencherModal -> chamando a função preencherModal e enviando o parametro event.target 
  
    bloco.showModal();
  }
  ))
}
renderizaModal(todosPosteresDoHtml)
todosPosteresDoHtml.forEach((umPosterDoHtml) => umPosterDoHtml.addEventListener("click",(event)=>{  // fazendo um loop nessa seleção de todos os posteres e adicionando o evento de clique para cada poster do html
  informacoes.innerHTML = preencherModal(event.target)
  // event.target -> identifica em que poster aconteceu o clique 
  // preencherModal -> chamando a função preencherModal e enviando o parametro event.target 
  
  bloco.showModal();
}))

//fazer aparecer na tela apenas filmes de determinado produtor:

const seletorDeFiltroP = document.getElementById("filtroProdutor")
seletorDeFiltroP.addEventListener('change', function(event){
  const filmesFiltrados = filtroProdutor(filmes, event.target.value)
  renderizaPoster(filmesFiltrados)

  const todosPosteresDoHtml = document.querySelectorAll(".filme")
  renderizaModal(todosPosteresDoHtml)
})

//fazer aparecer na tela apenas filmes de determinado diretor:

const seletorDeFiltroD = document.getElementById("filtroDiretor")
seletorDeFiltroD.addEventListener('change', function(event){
  const filmesFiltrados = filtroDiretor(filmes, event.target.value)
  renderizaPoster(filmesFiltrados)

  const todosPosteresDoHtml = document.querySelectorAll(".filme")
  renderizaModal(todosPosteresDoHtml)
})

//modal-dialog:

const fechar = document.querySelector(".fechar")
const bloco = document.getElementById("bloco")
const informacoes = document.querySelector(".informacoes")

fechar.addEventListener("click",function(){
  bloco.close();
})
