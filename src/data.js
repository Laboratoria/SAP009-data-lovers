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
       //O método toLocaleLowerCase() retorna o valor da string em minúsculas, de acordo 
       //com qualquer mapeamento de caixa de texto específico da localidade
       //O método startsWith() determina se uma string começa com os caracteres especificados,
       //retornando true ou false
      return true
    }
    return false
  } )
}

