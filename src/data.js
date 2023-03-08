import data from './data/ghibli/ghibli.js';

export default function getNamesAndImages() {
  const NameAndImages = []
  for (let i = 0; i < data.films.length; i++) {
    for (let j = 0; j < data.films[i].people.length; j++) {
      NameAndImages.push({name: `${data.films[i].people[j].name}`, image: `${data.films[i].people[j].img}`})
    }
  }
  return NameAndImages
}

//Como separar Male de Female
//Usar um filter dentro do gender.push()
//function getGender() {
//const gender = []
//for (let i = 0; i < data.films.length; i++) {
//for (let j = 0; j < data.films[i].people.length; j++) {
//if (data.films[i].people[j].gender == "male") {
//gender.push({name: data.films[i].people[j].name})
//}
      
//}
//}