export {filtroGenero, filtroEspecie};
function filtroGenero(personagens, generoEscolhido) {
  return personagens.filter((personagem) => {
    return personagem.gender === generoEscolhido
  })
}

function filtroEspecie(personagens, especieEscolhida) {
  return personagens.filter((personagem) => {
    return personagem.specie === especieEscolhida
  })
}
