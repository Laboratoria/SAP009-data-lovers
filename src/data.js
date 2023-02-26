import data from './data/ghibli/ghibli.js';

export const ordenar = (ordem) => {
  let posteresOrdenados = ''

  if(ordem === 'deAZ') {
    const deAZ = data.films.sort((a,b) => a.title.localeCompare(b.title))
    deAZ.map(function(item) {
      posteresOrdenados += `<img class="filme" src="${item.poster}">`;  // mapeando o array filmes e devolve na let posteres todos os itens com nome poster dentro do arquivo ghibli.js
    })
  }

  if(ordem === 'deZA') {
    const deZA = data.films.sort((a,b) => b.title.localeCompare(a.title))
    deZA.map(function(item) {
      posteresOrdenados += `<img class="filme" src="${item.poster}">`;
    })
  }

  if(ordem === 'crescente') {
    const crescente = data.films.sort((a,b) => a.release_date.localeCompare(b.release_date));
    crescente.map(function(item) {
      posteresOrdenados += `<img class="filme" src="${item.poster}">`;
    })
  }

  if(ordem === 'decrescente') {
    const decrescente = data.films.sort((a,b) => b.release_date.localeCompare(a.release_date));
    decrescente.map(function(item) {
      posteresOrdenados += `<img class="filme" src="${item.poster}">`;  // mapeando o array filmes e devolve na let posteres todos os itens com nome poster dentro do arquivo ghibli.js
    })
  }

  if(ordem === 'score') {
    const score = data.films.sort((a,b) => Number(b.rt_score) - Number(a.rt_score));
    score.map(function(item) {
      posteresOrdenados += `<img class="filme" src="${item.poster}">`;
    })
  }

  const todosOsFilmes = document.querySelectorAll(".filme")
  console.log(todosOsFilmes)
  todosOsFilmes.forEach((filme)=> filme.addEventListener("click",(event)=>{
    console.log(filme)
  }
  ))
  
  return posteresOrdenados

  

};

export const Exemplo = {
  ordenado : function (todosFilmes,ordem) {
    todosFilmes.sort((a,b) => b.parametro.localeCompare(a.parametro))
    ordem.map(function(item){
      return item.poster;
    })}
};
