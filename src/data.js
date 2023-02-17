const dataJs = {

  searchByName: function (characters, name) {
    const filterName = characters.filter(function(character) {
      const filteredSearch = character.name.toLowerCase().includes(name);//***toLowerCase() O método toLowerCase() retorna o valor da string que foi chamada convertido para minúsculo
      //***includes() O método includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false
      return filteredSearch;
    });
    return filterName;
  },    
  
  searchByGender: function (characters, gender) {
    const filterGender = characters.filter(function(character) {
      const filteredSearch = character.gender.toLowerCase() === gender;
      return filteredSearch;
    });
    return filterGender;
  },    

  searchByStatus: function(characters, status){
    const filterStatus = characters.filter((character)=>{
      const filteredSearch = character.status.toLowerCase() === status;
      return filteredSearch;
    })
    return filterStatus;
  },
  
  alphabeticalOrder: function(characters){
    const filterOrder = characters.sort(function(a,b){
      if (a.name > b.name){
        return 1
      }
      if(a.name < b.name){
        return -1
      }   
    })
    return filterOrder   

  },

  caululatePercentage: function(dataList, dataListFiltered) {    
    // return (( parseInt(dataListFiltered).length)/(parseInt(dataList).length)*100).toFixed(2) 
    return (parseInt((dataListFiltered*100)/dataList)  )
  }
  


  
};  

export default dataJs;

