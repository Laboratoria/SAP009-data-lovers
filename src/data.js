export const ordenar = (films, ordem,) => {

  if(ordem === 'deAZ') {
    return films.sort((a,b) => a.title.localeCompare(b.title))
  }

  if(ordem === 'deZA') {
    return films.sort((a,b) => b.title.localeCompare(a.title)) 
  }

  if(ordem === 'crescente') {
    return films.sort((a,b) => a.release_date.localeCompare(b.release_date));  
  }

  if(ordem === 'decrescente') {
    return films.sort((a,b) => b.release_date.localeCompare(a.release_date));
  }

  if(ordem === 'score') {
    return films.sort((a,b) => Number(b.rt_score) - Number(a.rt_score));
  }
};

export const preencherModal = (filmes, posterClicado) => {
  const idDoFilmeClicado = posterClicado.getAttribute('data-id')  // pegando o id do poster (que está num data-attribute) para identificar exatamente qual é o filme

  const [informacoesDoFilmeCLicado] = filmes.filter((filme) => filme.id === idDoFilmeClicado)
  let personagens = ''
  informacoesDoFilmeCLicado.people.forEach((personagem, index) => {
    if (index === informacoesDoFilmeCLicado.people.length - 1) {
      personagens += personagem.name
    } else {
      personagens += `${personagem.name}, `
    }
  })
  return `<br><h1>${informacoesDoFilmeCLicado.title}</h1><br>
  <p>${informacoesDoFilmeCLicado.description}</p>
  <p><strong>Director:</strong> ${informacoesDoFilmeCLicado.director}</p>
  <p><strong>Producer:</strong> ${informacoesDoFilmeCLicado.producer}</p>
  <p><strong>Release Year:</strong> ${informacoesDoFilmeCLicado.release_date}</p>
  <p><strong>RT Score:</strong> ${informacoesDoFilmeCLicado.rt_score}</p>
  <p><strong>Personagens:</strong> ${personagens}</p>`
}

export function filtroProdutor (filmes, nome) {
  const filmesFiltradosPorProdutor = filmes.filter((item) => filtrarPorProdutor(item, nome))
  return filmesFiltradosPorProdutor
}
function filtrarPorProdutor(item, nome) {
  return item.producer === nome
}

export function filtroDiretor (filmes, nome) {
  const filmesFiltradosPorDiretor = filmes.filter((item) => filtrarPorDiretor(item, nome))
  return filmesFiltradosPorDiretor
}
function filtrarPorDiretor(item, nome) {
  return item.director === nome
}

export function calculo(filmes){
  const somaScore = filmes.reduce((a,b) => a + Number(b.rt_score),0)
  return somaScore / filmes.length
}
