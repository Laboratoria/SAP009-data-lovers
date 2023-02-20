import lolData from "./data/lol/lol.js";
import { buscaTag, buscaNome, ordenarCampeoes } from "./data.js";
// pegando os dados do lol.js e salvando na var lolData
const campeoes = Object.values(lolData.data);
let campeoesNaTela = [];

const traduz = (tag) => {
  switch (tag) {
  case "Assassin":
    return "Assassino";
  case "Fighter":
    return "Lutador";
  case "Mage":
    return "Mago";
  case "Marksman":
    return "Atirador";
  case "Support":
    return "Suporte";
  case "Tank":
    return "Tanque";
  }
};

function mostraCards(campeoes) {
  campeoesNaTela = campeoes;
  document.getElementById("exibirCards").innerHTML = campeoes.map((campeao) =>
    ` 
		 	<div class="cards">
				<div class="card">
			 		<div class="card-frente">
						<img src="${campeao.splash}" class="imagem-do-card">
						<h2 id="nome-do-card">${campeao.name.toUpperCase()}</h2>
					</div>
						<div class="card-verso">
							<ul class="info-do-card">
								<li>${campeao.name.toUpperCase()}</li> 
								<li>ATAQUE: ${campeao.info.attack}</li>
								<li>DEFESA: ${campeao.info.defense}</li>
								<li>MAGIA: ${campeao.info.magic}</li>
								<li>DIFICULDADE: ${campeao.info.difficulty}</li>
								<li> TIPO: ${campeao.tags.map(traduz)} </li> 
							</ul>
						</div>
				</div>
		 	</div>
		`
  )
    .join("");
}
window.addEventListener("load", () => mostraCards(campeoes));

const botoesTiposCampeoes = document.querySelectorAll(".filtra-campeoes");
botoesTiposCampeoes.forEach(function (tipoCampeao) {
  tipoCampeao.addEventListener("click", function () {
    const tag = tipoCampeao.id;
    if (tag === "filtra-todos") {
      mostraCards(campeoes);
    } else {
      const campeoesFiltrados = buscaTag(campeoes, tag);
      mostraCards(campeoesFiltrados);
      const calculoAgregadoTela = document.getElementById("calculo-agregado");
      const numeroCampeoesFiltrados = campeoesFiltrados.length;
      const totalDeCampeoes = campeoes.length;
      calculoAgregadoTela.innerHTML =
        ((numeroCampeoesFiltrados / totalDeCampeoes) * 100).toFixed(2) +
        "% dos campeões possuem esse tipo.";
    }
  });
});
const buscaCampeao = document.querySelector("#txt-busca");
buscaCampeao.addEventListener("input", function () {
  const nomeInput = buscaCampeao.value;
  const arrayNome = buscaNome(campeoes, nomeInput);
  mostraCards(arrayNome);
});

function textoMinusculo(event) {
  const texto = event.target.value;
  event.target.value = texto.toLowerCase();
}
document.querySelector("#txt-busca").addEventListener("input", textoMinusculo);

// //Função para desaparecer cabeçalho quando rola a página
// const conteudoFixo = document.querySelector('.ocultar');
// window.addEventListener('scroll', function () {
//   if (window.scrollY >1) {
//     conteudoFixo.classList.add('ocultar');
//   } else {
//     conteudoFixo.classList.remove('ocultar');
//   }
// });

const poderes = document.querySelector(".selecione");
poderes.addEventListener("change", function () {
  const ordemSelecionada = poderes.value;
  const ordenadosPoderCampeao = ordenarCampeoes(
    campeoesNaTela,
    ordemSelecionada
  );
  mostraCards(ordenadosPoderCampeao);
});
