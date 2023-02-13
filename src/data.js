//import lolData from "./data/lol/lol.js"

function buscaTag(campeoes, tag) {
  //filterData(data, condition)
  const campeoesTag = campeoes.filter((campeao) => {
    if (campeao.tags.includes(tag)) {
      return true;
    }
    return false;
  });

  return campeoesTag;
}

function buscaNome(campeoes, nome) {
  console.log(campeoes);
  console.log(nome);
  const filtraCampeoes = (campeao) => {
    console.log(campeao)
    if (campeao.name.toLowerCase().includes(nome)) {
      return true;
    }
    return false;
  }
  const campeoesFiltrados = campeoes.filter(filtraCampeoes);
  console.log(campeoesFiltrados);
  return campeoesFiltrados
}
function textoMinusculo(event) {
  const texto = event.target.value
  event.target.value = texto.toLowerCase();
}
document.querySelector("#txt-busca").addEventListener("input", textoMinusculo);

function ordenarNomes(dados, ordem, valor) {
  if (ordem === "Nome") {
    dados.sort((primeiroCampeao, segundoCampeao) => {
      if (primeiroCampeao.name > segundoCampeao.name) {
        return 1;
      } else {
        return -1;
      }
    });
  } else {
    dados.sort(
      (primeiroCampeao, segundoCampeao) =>
        primeiroCampeao.name - segundoCampeao.name
    );
  }
  if (valor === "ordem-decrecente") {
    dados.reverse();
  }
  return dados;
}

export {
  buscaTag,
  ordenarNomes,
  buscaNome,
}