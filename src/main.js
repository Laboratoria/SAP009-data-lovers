import  getNamesAndImages  from "./data.js";

const mostrarCardPai = document.querySelector(".mostrar-card-pai");

const NamesAndImg = getNamesAndImages()

function showPeople(NamesAndImg) {
  for (let i = 0; i < NamesAndImg.length; i++) {
    
    const div = document.createElement("div");
    div.classList.add("cards");

    const img = document.createElement("img");
    img.classList.add("card_image");
    img.setAttribute("src", NamesAndImg[i].image);

    const nomePersonagem = document.createElement("p");
    nomePersonagem.classList.add("card_nome");
    const nome = document.createTextNode(NamesAndImg[i].name);
    nomePersonagem.appendChild(nome);

    div.appendChild(img);
    //div.appendChild(nomePersonagem);

    mostrarCardPai.appendChild(div);

  }
    
}
showPeople(NamesAndImg);

const flipcard = document.querySelector('.mostrar-card-pai');
flipcard.addEventListener('click', function() {
  flipcard.classList.toggle('flip');
});


//const generos = function showGender()

// //Fazer as funções = Filtrar e criar
// export default function filtrarPorGenero() {
//   console.log("deu certo")
//   //return listaPersonagens.filter(personagem => personagem.gender === genero);
// }

// const generoEscolhido = document.getElementById("genero")
// const nomePersonagem = document.getElementById("nome")
// const especieEscolhida = document.getElementById("especie")

// //Apenas chamar a função e passar o parâmetro.

// generoEscolhido.addEventListener('change', filtrarPorGenero)
// //Primeira Função
// //Criar nossos cards
// //1 - Nome e Imagem



