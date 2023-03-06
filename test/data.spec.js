import {filtrarNome} from '../src/data.js';

const pokeNomes =  [
  {
    name: "pikachu",
  },
];

describe('Filtrar nomes Pokémons', () => {
  it('e uma funcao', () => {
    expect(typeof filtrarNome).toBe('function');
  });


  it('deve retornar um pokemon', () => {
    const resultname = filtrarNome (pokeNomes, "pikachu");
    expect(resultname).toEqual(pokeNomes)
  })
});
