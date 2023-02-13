import { computerType, searchData, filterPokemon, order } from '../src/data.js';

const bulbasaur =   {
  "num": "001",
  "name": "bulbasaur",
  "type": [
    "grass",
    "poison"
  ],
}
const ivysaur = {
  "num": "002",
  "name": "ivysaur",
  "type": [
    "grass",
    "poison"
  ],
}
const charmander ={
  "num": "004",
  "name": "charmander",
  "type": [
    "fire"
  ],
}
const charmeleon = {
  "num": "005",
  "name": "charmeleon",
  "type": [
    "fire"
  ],
}
const weedle = {
  "num": "013",
  "name": "weedle",
  "type": [
    "bug",
    "poison"
  ],
}
const pokemonTest = [bulbasaur,ivysaur,charmander,charmeleon,weedle]

//Teste de do cálculo agregado
describe('Percentual itens filtrados', () => {
  test('is a function', () => {
    expect(typeof computerType).toBe('function');
  });

  it('returnar a porcentagem do array filtrado', () => {
    const filterPokemon = [bulbasaur]
    expect(computerType(filterPokemon, pokemonTest)).toBe("20.00");
  });
});

//Teste do buscar por nome do Personagem
describe('Buscar por nome dos personagens', () => {
  test('is a function', () => {
    expect(typeof searchData).toBe('function');
  });

  it('retornar os personagens que possui a letra inserida', () => {
    const valueInput1 = "bu"
    const valueInput2 = "ch"

    expect(searchData(valueInput1, pokemonTest)).toEqual([bulbasaur]);
    expect(searchData(valueInput2, pokemonTest)).toEqual([charmander, charmeleon]);
  });
});

//Teste do botão Filtrar 
describe('Buscar personagens por tipo', () => {
  test('is a function', () => {
    expect(typeof filterPokemon).toBe('function');
  });

  it('retornar os personagens do tipo selecionado', () => {
    const value1 = "grass"
    const value2 = "fire"

    expect(filterPokemon(value1, pokemonTest)).toStrictEqual([bulbasaur, ivysaur]);
    expect(filterPokemon(value2, pokemonTest)).toEqual([charmander, charmeleon ]);
  });
});

//Teste do botão Ordenar 
describe('Ordenar a lista de personagens', () => {
  test('is a function', () => {
    expect(typeof order).toBe('function');
  });

  it('ordenar de a-z', () => {
    const valueAZ = "a-z"
    

    expect(order(valueAZ, pokemonTest)).toEqual([bulbasaur, charmander, charmeleon, ivysaur, weedle]);
  });


  it('ordenar de z-a', () => {
    const valueZA = "z-a"
    

    expect(order(valueZA, pokemonTest)).toEqual([weedle,ivysaur,charmeleon,charmander,bulbasaur]);
  });
})