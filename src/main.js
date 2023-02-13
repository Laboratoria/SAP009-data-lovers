
import lolData from "./data/lol/lol.js"
import { buscaTag, ordenarNomes, buscaNome, } from "./data.js"
// pegando os dados do lol.js e salvando na var lolData

const campeoes = Object.values(lolData.data);
// essa const atribuiu valor dos objetos do lol.js, para acessá-los incluir o nome da var da linha 1.data (pq   estão dentro do atributo com nome data)
function mostraCards(campeoes) {
    document.getElementById('exibirCards').innerHTML = campeoes.map((campeao) =>
        // aqui começa a interpolação da string
        ` 
            <div class="cards">
                <div class="card">
                    <div class="card-frente">
                    <img src="${campeao.splash}" class="imagem-do-card">
                        <h2 id="nome-do-card">${campeao.name.toUpperCase()}</h2>
                    </div>
                    <div class="card-verso">
                    <h3 class="nome-verso">${campeao.name.toUpperCase()}</h3>
                        <ul class="info-do-card">
                            <li>ATAQUE: ${campeao.info.attack}</li>
                            <li>DEFESA: ${campeao.info.defense}</li>
                            <li>MAGIA: ${campeao.info.magic}</li>
                            <li>DIFICULDADE: ${campeao.info.difficulty}</li>
                        </ul>
                        <li class="info-do-card">TIPO: ${campeao.tags}</li> 
                    </div>
                </div>
            </div>
        `
    ).join('')
}

window.addEventListener('load', () => mostraCards(campeoes));


const liAssassino = document.querySelector(".li-assassino");
liAssassino.addEventListener('click', function () {
    const assassinos = buscaTag(campeoes, "Assassin");
    mostraCards(assassinos);
});

// const buscaNome = document.querySelector("#txtBusca").value;
// const btnBusca = document.querySelector("#btn-busca");
// btnBusca.addEventListener('click', function(){
// const resultado = ordenarNomes(buscaNome, parseInt);
// document.querySelector("#exibirCards").innerHTML = resultado;

// });

const buscaCampeao = document.querySelector("#txt-busca");
buscaCampeao.addEventListener("input", function () {
    const nomeInput = buscaCampeao.value;
    const arrayNome = buscaNome(campeoes, nomeInput);
    mostraCards(arrayNome);
});
// testar charCode  ou return toUpperCase ou toLowerCase ou includes()

// para pesquisar no console nome e poder console.log(campeoes[2].name + campeoes[2].info.attack)

//- testar esse aqui se funciona na classificação, change ao invés de click
