import data from './data/ghibli/ghibli.js';

export const ordenar = (ordem) => {
  let posteresOrdenados = ''

  if(ordem === 'deAZ') {
    const deAZ = data.films.sort((a,b) => a.title.localeCompare(b.title))
    deAZ.map(function(item) {
      posteresOrdenados += `<img class="filme" src="${item.poster}" data-id="${item.id}">`;  // mapeando o array filmes e devolve na let posteres todos os itens com nome poster dentro do arquivo ghibli.js
    })
  }

  if(ordem === 'deZA') {
    const deZA = data.films.sort((a,b) => b.title.localeCompare(a.title))
    deZA.map(function(item) {
      posteresOrdenados += `<img class="filme" src="${item.poster}" data-id="${item.id}">`;
    })
  }

  if(ordem === 'crescente') {
    const crescente = data.films.sort((a,b) => a.release_date.localeCompare(b.release_date));
    crescente.map(function(item) {
      posteresOrdenados += `<img class="filme" src="${item.poster}" data-id="${item.id}">`;
    })
  }

  if(ordem === 'decrescente') {
    const decrescente = data.films.sort((a,b) => b.release_date.localeCompare(a.release_date));
    decrescente.map(function(item) {
      posteresOrdenados += `<img class="filme" src="${item.poster}" data-id="${item.id}">`;  // mapeando o array filmes e devolve na let posteres todos os itens com nome poster dentro do arquivo ghibli.js
    })
  }

  if(ordem === 'score') {
    const score = data.films.sort((a,b) => Number(b.rt_score) - Number(a.rt_score));
    score.map(function(item) {
      posteresOrdenados += `<img class="filme" src="${item.poster}" data-id="${item.id}">`;
    })
  }
  
  return posteresOrdenados
};

export const preencherModal = (posterClicado) => {
  const idDoFilmeClicado = posterClicado.getAttribute('data-id')  // pegando o id do poster (que está num data-attribute) para identificar exatamente qual é o filme

  const [informacoesDoFilmeCLicado] = data.films.filter((filme) => filme.id === idDoFilmeClicado)

  let personagens = ''
  informacoesDoFilmeCLicado.people.forEach((personagem, index) => {
    if (index === informacoesDoFilmeCLicado.people.length - 1) {
      personagens += personagem.name
    } else {
      personagens += `${personagem.name}, `
    }
  })

  return `<h1>${informacoesDoFilmeCLicado.title}</h1>
  <p>${informacoesDoFilmeCLicado.description}</p>
  <p>Director: ${informacoesDoFilmeCLicado.director}</p>
  <p>Producer: ${informacoesDoFilmeCLicado.producer}</p>
  <p>Release Year: ${informacoesDoFilmeCLicado.release_date}</p>
  <p>RT Score: ${informacoesDoFilmeCLicado.rt_score}</p>
  <p>Personagens: ${personagens}</p>`
}

// export const Exemplo = {
//   ordenado : function (todosFilmes,oque,ordem) {
//     todosFilmes.sort((a,b) => a.oque - b.oque)
//     ordem.map(function(item){
//       console.log(item.poster)
//       return item.poster;
//     })}
// };

// export const Filtro ={
//   filtrar : function (arrayPrincipal,nomeDesejado){
//   const result = arrayPrincipal.filter(filtrarPeloNome)
//   },
//   function : filtrarPeloNome(nome){
//     return nome;
//   }
//   console.log(result)
// }
