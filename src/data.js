export const example = () => {
  return 'example';
};


export const buscarTipo = (data,selectValue) => {
 const resultadoBusca = data.filter((pokemon) => pokemon.type.includes(selectValue));
return resultadoBusca
};


export function order(data, selectValue) {
  const copia = [...selectValue]
  if (data === "a-z") {
    copia.sort(function(a,b){
      if(a.name < b.name){
        return -1;
      }
        return 1;
    });
  }
  else if (data === "z-a") {
    copia.sort(function(a,b){
      if(a.name < b.name){
        return 1;
      }
        return -1;
    })
  }
  return copia
}

//export 

