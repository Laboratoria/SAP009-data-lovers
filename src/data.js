//Função para ordenar por A-Z/Z-A
export function sortByOrderFilms(films, orderBy){
  const newArray = [...films]

  if(orderBy === "az") {
    newArray.sort(function(a,b){
      if(a.title < b.title){
        return -1;
      }
    })
  } else {
    newArray.sort(function(a,b){
      if(a.title > b.title){
        return -1;
      }
    })
  }
  return newArray;
}

// Função filtrar mais/menos avaliados
export function sortByRelease(films, orderBy){
  const newArray = [...films]

  if(orderBy === "highScore") {
    newArray.sort(function(highScore, lowScore){
      if(highScore.release_date < lowScore.release_date){
        return -1;
      }
    })
  } else{
    newArray.sort(function(highScore, lowScore){
      if(highScore.release_date > lowScore.release_date){
        return -1;
      }
    })
  }
  return newArray;
}