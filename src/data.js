//FILTRO VER TODOS personagens
export function harryFunçoes(nome, listaPersonagensFiltrados) {
  return listaPersonagensFiltrados.filter((harry) => harry.name.includes(nome));
}
//FILTRO VER TODOS
export function filtrarCasa(casa, personagens) {
  return personagens.filter((harry) => harry.house === casa);
}
//ORDENAÇÃO
export const ordemNome = (a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
};
export const selecionaNomeAz = (personagens) => {
  return personagens.sort(ordemNome);
};
export const selecionaNomeZa = (personagens) => {
  return personagens.sort(ordemNome).reverse();
};
//FILTRO POR CASAS
export const filtrarPersonagemCasa = (personagens, casa) => {
  const resultadoCasas = personagens.filter(function (personagem) {
    if (personagem.house === null) {
      return false;
    }
    const casaFiltro = personagem.house.includes(casa); //determina se a condição pode ser encontrado dentro da string
    return casaFiltro;
  });
  return resultadoCasas;
};
//CÁLCULO AGREGADO
export const calcPorcentagem = (todos, parte) => {
  return (parte / todos).toFixed(2);
};
