import { example } from './data.js';

const selectChampion = document.getElementById('selectChampion'); 
const selectOrder = document.getElementById('selectOrder');

selectChampion.addEventListener("change", () => {   //pegar o select do Html pra adicionar um evento de Alterar ou escolher 
    const selectedChampion = selectChampion.value;
}

selectOrder.addEventListener("change", () => { 
    const selectedOrder = selectOrder.value;
}

