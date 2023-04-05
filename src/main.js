
// import data from './data/ghibli/ghibli.js';

// function NomeEImagem(){
//   const InfoCard = []
//   for (let i = 0; i < data.films.length; i++) {
//     for (let j = 0; j < data.films[i].people.length; j++) {
//       InfoCard.push({name: `${data.films[i].people[j].name}`, img: `${data.films[i].people[j].img}`, specie:`${data.films[i].people[j].specie}`, title: `${data.films[i].title}` })
//     }
//   }
//   return InfoCard
// }

// const MostrarNoCard = document.querySelector(".background-cards");
// const InfoCard = NomeEImagem()

// function MostrarPersonagem(InfoCard){
//   while (MostrarNoCard.firstChild) {
//     MostrarNoCard.removeChild(MostrarNoCard.firstChild);
//   }
//   for (let i = 0; i < InfoCard.length; i++){
//     const div = document.createElement("div");
//     div.classList.add("background-cards")
//     const img = document.createElement("img");
//     img.classList.add("card-image");
//     img.setAttribute("src",InfoCard[i].img);
//     const NomePersonagem = document.createElement("h1");
//     NomePersonagem.classList.add("card-name");
//     const nome = document.createTextNode(InfoCard[i].name);
//     div.appendChild(img);
//     div.appendChild(nome);
//     MostrarNoCard.appendChild(div);
//   }
// }
// MostrarPersonagem(InfoCard)
