import { ordenar, preencherModal } from './data.js';

import data from './data/ghibli/ghibli.js';

const arrayGhibli = data;
const filmes = arrayGhibli["films"]
const root = document.getElementById("root");
let posteres = ''

filmes.map(function (item) {
  posteres += `<img class="filme" src="${item.poster}" data-id="${item.id}">`;  // mapeando o array filmes e devolve na let posteres todos os itens com nome poster dentro do arquivo ghibli.js
})
root.innerHTML = posteres  // avisa o JS que isso vai pro HTML

const todosPosteresDoHtml = document.querySelectorAll(".filme")  // selecionando todos os posteres e colocando dentro da variável
todosPosteresDoHtml.forEach((umPosterDoHtml) => umPosterDoHtml.addEventListener("click",(event)=>{  // fazendo um loop nessa seleção de todos os posteres e adicionando o evento de clique para cada poster do html
  informacoes.innerHTML = preencherModal(event.target)
  // event.target -> identifica em que poster aconteceu o clique 
  // preencherModal -> chamando a função preencherModal e enviando o parametro event.target 
  
  bloco.showModal();
}))

const seletorDeOrdem = document.getElementById("ordem")
seletorDeOrdem.addEventListener('change', function(event){
  const posteresOrdenados = ordenar(event.target.value)
  
  root.innerHTML = posteresOrdenados

  const todosPosteresDoHtml = document.querySelectorAll(".filme")
  todosPosteresDoHtml.forEach((umPosterDoHtml)=> umPosterDoHtml.addEventListener("click",(event)=>{
    informacoes.innerHTML = preencherModal(event.target)
    // event.target -> identifica em que poster aconteceu o clique 
    // preencherModal -> chamando a função preencherModal e enviando o parametro event.target 
  
    bloco.showModal();
  }
  ))
})

//const exemplo = data.Exemplo(filmes,crescente)

//teste modal-dialog:

const fechar = document.querySelector(".fechar")
const bloco = document.getElementById("bloco")
const informacoes = document.querySelector(".informacoes")

fechar.addEventListener("click",function(){
  bloco.close();
})

