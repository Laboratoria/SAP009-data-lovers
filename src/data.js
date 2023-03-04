import data from './data/harrypotter/data.js';
export const filtrarPersonagens = (valor) => {
  return data.characters.filter((personagem) => {
    if (personagem.name.toLocaleLowerCase().startsWith(valor.toLocaleLowerCase())) {
      return true
    }
    return false
  } )
};
export const filtrarFeiticos = (valorFeiticos) => {
  return data.spells.filter((feitico) => {
    if (feitico.name.toLocaleLowerCase().startsWith(valorFeiticos.toLocaleLowerCase())) {
      return true
    }
    return false
  } )
}
export const filtrarPocoes = (valorPocoes) => {
  return data.potions.filter((pocao) => {
    if (pocao.name.toLocaleLowerCase().startsWith(valorPocoes.toLocaleLowerCase())) {
      return true
    }
    return false
  } )
}
export const filtrarLivros = (valorLivros) => {
  return data.books.filter((livro) => {
    if (livro.title.toLocaleLowerCase().startsWith(valorLivros.toLocaleLowerCase())) {
      return true
    }
    return false
  } )
}
//toLocalLowerCase() é usada para converter os caracteres em uma string em minúsculas, 
//respeitando o local atual.
//O método startsWith() determina se uma string começa com os caracteres especificados, 
//retornando true ou false .

