//import  lolData  from "./main.js"

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



function ordenarCampeoes(campeoes, ordem) {
  const campeoesOrdenados = campeoes.sort((campeaoA, campeaoB) => {
    if (ordem === "maior-defesa") {
      return campeaoB.info.defense - campeaoA.info.defense;
    } else if (ordem === "menor-defesa") {
      return campeaoA.info.defense - campeaoB.info.defense;
    }
    if (ordem === "maior-ataque") {
      return campeaoB.info.attack - campeaoA.info.attack;
    } else if (ordem === "menor-ataque") {
      return campeaoA.info.attack - campeaoB.info.attack;
    }
    if (ordem === "maior-magia") {
      return campeaoB.info.magic - campeaoA.info.magic;
    } else if (ordem === "menor-magia") {
      return campeaoA.info.magic - campeaoB.info.magic;
    }
    if (ordem === "maior-dificuldade") {
      return campeaoB.info.difficulty - campeaoA.info.difficulty;
    } else if (ordem === "menor-dificuldade") {
      return campeaoA.info.difficulty - campeaoB.info.difficulty;
    }
  });
  return campeoesOrdenados;
}

function calculoAgragado(campeoes, campeoesFiltrados) {
  const numeroCampeoesFiltrados = campeoesFiltrados.length;
  const totalDeCampeoes = campeoes.length;
  return `O tipo selecionado corresponde à ${((numeroCampeoesFiltrados / totalDeCampeoes) * 100).toFixed(2)}% do total de campeões.`;
}

export {
  buscaTag,
  buscaNome,
  ordenarCampeoes,
  calculoAgragado
}