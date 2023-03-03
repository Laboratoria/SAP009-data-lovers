import {filtrarFeiticos} from "./data.js"

document.querySelector('#botaoFeiticos').onclick = () => {
  const valorFeiticos = document.querySelector('#letraInicial').value
  const elementosFeiticos = []
  filtrarFeiticos (valorFeiticos).forEach ((feitico) => {
    //O método forEach é usado para percorrer arrays. o objetivo do método forEach() é executar 
    //uma função callback em todos os elementos de um array. Por isso, ela é passada como parâmetro 
    //para a execução do loop.
    //push é a função que joga itens pro nosso array vazio (elementos da lista)
    elementosFeiticos.push(`
      <div class="card-feiticos">
      <div class="card-info-feiticos">
        <h2>${feitico.name}</h2>
        <p>Pronúncia: ${feitico.pronunciation}</p>
        <p>Tipo do Feitiço: ${feitico.spell_type}</p>
        <p>Descrição: ${feitico.description}</p>
      <div class="back-feiticos"></div>
      </div>
      </div>
    `)
    document.querySelector('.card-container-feiticos').innerHTML = elementosFeiticos.join('')
    })
}

