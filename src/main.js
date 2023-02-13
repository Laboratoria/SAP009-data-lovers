// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

const botaoPersonagem = document.getElementById("btn-personagem")
botaoPersonagem.addEventListener("click", mostrar)


function mostrar(){
  const root = document.getElementById('container-personagens')
  root.innerHTML = data.results.map((personagemAtual) => 
    `<div>
        <img src="${personagemAtual.image}" alt="Imagem do Personagem">
        <ul class="listaDados">
          <li class="linhaEscura">NOME:</li>
          <li class="linhaEscura">${personagemAtual.name}</li>
          <li class="linhaClara">ESTADO DE VIDA:</li>
          <li class="linhaClara">${personagemAtual.status}</li>
          <li class="linhaEscura">GÊNERO:</li>
          <li class="linhaEscura">${personagemAtual.gender}</li>
          <li class="linhaClara">LOCAL DE ORIGEM:</li>
          <li class="linhaClara">${personagemAtual.origin.name}</li>
          <li class="linhaEscura">LUGAR ONDE VIVE:</li>
          <li class="linhaEscura">${personagemAtual.location.name}<li>
          <li class="linhaClara">EPISÓDIOS EM QUE APARECE:</li>
        </ul>
      </div>
  `)
}
  
export default mostrar

