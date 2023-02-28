import data from './data/harrypotter/data.js';
export const filtrarPersonagens = (valor) => {
  return data.characters.filter((personagem) => {
    if (personagem.name.toLocaleLowerCase().startsWith(valor.toLocaleLowerCase())) {
      return true
    }
    return false
  } )
};
export const filtrarPocoes = (valorPocoes) => {
  return data.potions.filter((pocao) => {
    if (pocao.name.toLocaleLowerCase().startsWith(valorPocoes.toLocaleLowerCase())) {
      return true
    }
    return false
  } )
}
