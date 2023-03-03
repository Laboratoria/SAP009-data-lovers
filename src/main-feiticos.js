import {filtrarFeiticos} from "./data.js"
document.querySelector('#botao-feiticos').onclick = () => {
  const valorFeiticos = document.querySelector('#input-feiticos').value
  const elementosDaListaFeiticos = []
  filtrarFeiticos(valorFeiticos).forEach((feitico) => {
    //push é a função que joga itens pro nosso array vazio (elemtos da lista)
    elementosDaListaFeiticos.push(`
    <div class="card">
        <div class="card-info">
          <h2>${feitico.name}</h2>
          <p>Pronúncia: ${feitico.pronunciation}</p>
          <p>Tipo do Feitiço: ${feitico.spell_type}</p>
          <p>Descrição: ${feitico.description}</p>
          <p>Menção: ${feitico.mention}</p>
        </div>
    </div>
     `)
  })
  document.querySelector('.card-container-feiticos').innerHTML = elementosDaListaFeiticos.join('')
}
