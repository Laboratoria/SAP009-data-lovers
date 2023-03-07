import {filtrarNome} from '../src/data.js';

const pokeNomes = [
  {"num": "025", "name": "pikachu", "type":["electric"], "generationName": "kanto"},
  {"num": "001", "name": "bulbasaur", "type":["grass", "poison"], "generationName": "kanto"},
  {"num": "007", "name": "squirtle", "type":["water"], "generationName": "kanto"},
  {"num": "004", "name": "charmander", "type":["fire"], "generationName": "kanto"},
];


describe('Filtrar nomes Pokémons', () => {
  it('e uma funcao', () => {
    expect(typeof filtrarNome).toBe('function');
  });


  it('deve retornar um pokemon', () => {
    const resultName = filtrarNome(pokeNomes, "bulbasaur");
    expect(resultName.length).toBe(1)
    expect(resultName[0].name).toBe("bulbasaur")
  })
});

