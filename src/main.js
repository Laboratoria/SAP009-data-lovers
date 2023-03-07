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

      const idadePersonagem = document.createElement("h4");
      idadePersonagem.classList.add("card_idade");
      const idade = document.createTextNode(data.films[i].people[j].age);
      idadePersonagem.appendChild(idade);

      const generoPersonagem = document.createElement("h4");
      generoPersonagem.classList.add("card_genero");
      const genero = document.createTextNode(data.films[i].people[j].gender);
      generoPersonagem.appendChild(genero);

      const especiePersonagem = document.createElement("h4");
      especiePersonagem.classList.add("card_especie");
      const especie = document.createTextNode(data.films[i].people[j].specie);
      especiePersonagem.appendChild(especie);

      

      div.appendChild(img);
      div.appendChild(nomePersonagem);
      div.appendChild(idadePersonagem);
      div.appendChild(generoPersonagem);
      div.appendChild(especiePersonagem);

      mostrarCardPai.appendChild(div);
    }
  }
}

showPeople();

const genero = function filtrarPorGenero(listaPersonagens, genero) {
  return listaPersonagens.filter(personagem => personagem.gender === genero);
}





