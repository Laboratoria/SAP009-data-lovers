import data from './data/ghibli/ghibli.js';

const mostrarCardPai = document.querySelector(".mostrar-card-pai");

function showPeople() {
  for (let i = 0; i < data.films.length; i++) {
    for (let j = 0; j < data.films[i].people.length; j++) {
      const div = document.createElement("div");
      div.classList.add("cards");

      const img = document.createElement("img");
      img.classList.add("card_image");
      img.setAttribute("src", data.films[i].people[j].img);

      const nomePersonagem = document.createElement("h3");
      nomePersonagem.classList.add("card_nome");
      const nome = document.createTextNode(data.films[i].people[j].name);
      nomePersonagem.appendChild(nome);


      div.appendChild(img);
      div.appendChild(nomePersonagem);

      mostrarCardPai.appendChild(div);

    
    }
  }
}

showPeople();

const genero = function filtrarPorGenero(listaPersonagens, genero) {
  return listaPersonagens.filter(personagem => personagem.gender === genero);
}





