import {filtrarFeiticos} from "./data.js"
document.querySelector('#botao-feiticos').onclick = () => {
  const valorFeiticos = document.querySelector('#input-feiticos').value
  const elementosDaListaFeiticos = []
  filtrarFeiticos(valorFeiticos).forEach((feitico) => {
    //O método forEach é usado para percorrer arrays é indicado para quando todos os 
    //elementos de um array precisam passar pela ação definida na função callback.
    //Isso porque uma vez que o loop é iniciado, ele só será encerrado após o processamento 
    //do último elemento.
    //O método push() adiciona um ou mais elementos ao final de um array e
    //retorna o novo comprimento desse array.
  // var linguagem = "pt-br";
  // function mudarLinguagem() {
  // linguagem = linguagem == "pt-br" ? "en" : "pt-br";
  // }
  
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
