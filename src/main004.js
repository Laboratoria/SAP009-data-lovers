import {filtrarFeiticos} from "./data.js"
document.querySelector('#button').onclick = () => {
    const valor = document.querySelector('#input').value

    filtrarFeiticos(valor).data.js.sort((a,b) => a.spells.name.localeCompare(b.spells.name))//
    
  }
//O método localeCompare() retorna um número que indica se uma string de referência vem antes ou depois,
//ou é a mesma que a string fornecida na ordem de classificação.