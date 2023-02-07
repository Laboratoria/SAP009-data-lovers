
import lolData from "./data/lol/lol.js"
import {allFilters }from "./data.js"
console.log(allFilters);
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
                        <h2 class="nome-do-card">${campeao.name.toUpperCase()}</h2>
                        <p class="titulo-do-card">${campeao.title}</p>
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

