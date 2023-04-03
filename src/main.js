
import data from './data/pokemon/pokemon.js';
import { buscarTipo, order } from './data.js';

const cards = data.pokemon;
const showcards = document.getElementById('cards');
function pokeCards(listaPokemon) {
  const cardsHTML = listaPokemon.map((data)=> `
    <section class="box">
      <div class="card">
        <p>${data.num}</p>
        <h3>${data.name}</h3>
        <img src=${data.img} />
        <p><strong>Tipo:</strong> ${data.type}</p>
        <p><strong>Ovo:</strong> ${data.egg}</p>
      </div>
    </section>
  `).join('');
  showcards.innerHTML = cardsHTML;
}
pokeCards(cards);



const filtroSelect = document.querySelector("#Filtrar");
filtroSelect.addEventListener("change",(event) => {
  const parametroFiltro = filtroSelect.value;  
  const listfilter = buscarTipo(cards,parametroFiltro);
    pokeCards(listfilter);
});

const orderList = document.querySelector("#Ordenar");
orderList.addEventListener("change",(event) => {
  const parametroOrdenar = orderList.value;
   const ordenado = order(cards,parametroOrdenar);
  pokeCards(ordenado);
});




 