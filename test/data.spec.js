import {filtrarNome, ordemCompletaNome, ordemCompletaNumero} from '../src/data.js';

const pokeNomes = [
  {"num": "025", "name": "pikachu", "type":["electric"], "generationName": "kanto"},
  {"num": "001", "name": "bulbasaur", "type":["grass", "poison"], "generationName": "kanto"},
  {"num": "007", "name": "squirtle", "type":["water"], "generationName": "kanto"},
  {"num": "004", "name": "charmander", "type":["fire"], "generationName": "kanto"},
];


describe('Filtrar nomes Pokémons', () => {
  it('É uma função', () => {
    expect(typeof filtrarNome).toBe('function');
  });

  it('Deve retornar um pokémon', () => {
    const resultName = filtrarNome(pokeNomes, "bulbasaur");
    expect(resultName.length).toBe(1)
    expect(resultName[0].name).toBe("bulbasaur")
  })
});


describe('Ordenar pokémons de forma alfabética', () => {
  it('É uma função', () => {
    expect(typeof ordemCompletaNome).toBe('function')
  });

  it('Deve ordenar pokémons de forma alfabética de a-z', () => {
    const ordenarNomesAZ = ordemCompletaNome(pokeNomes);
    expect(ordenarNomesAZ[0].name).toBe("bulbasaur")
  });

  it('Deve ordenar pokémons de forma alfabética de z-a', () => {
    const ordenarNomesZA = ordemCompletaNome(pokeNomes).reverse();
    expect(ordenarNomesZA[0].name).toBe("squirtle")
  });
});


describe('Ordenar pokémons de forma numérica', () => {
  it('É uma função', () => {
    expect(typeof ordemCompletaNumero).toBe('function')
  });

  it ('Deve ordernar pokémons de forma numérica crescente de 1 a 251', () => {
    const ordemCrescente = ordemCompletaNumero(pokeNomes);
    expect(ordemCrescente[0].num).toBe("001")
  });

  it ('Deve ordernar pokémons de forma numérica descrescente de 251 a 1', () => {
    const ordemDecrescente = ordemCompletaNumero(pokeNomes).reverse();
    expect(ordemDecrescente[0].num).toBe("025")
  })
});


