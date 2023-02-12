import data from "./data/ghibli/ghibli.js";

const dataFilms = data.films;

export const films = {

  alphabeticOrderFilter: function alphabeticOrderFilter(dataFilms) {    
    return dataFilms.sort(function(a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;      
    });
    
  }, 

  inverseAlphabeticOrderFilter: function inverseAlphabeticOrderFilter(dataFilms) {

    return dataFilms.sort((a, b) => b.title.localeCompare(a.title));    
    
  } 
};