import {filtrarNome, ordemCompletaNome, ordemCompletaNumero, filtrarTipo, filtrarRegiao, calcPorcentagem} from '../src/data.js';

const pokeNomes = [
  {"num": "025", "name": "pikachu", "type":["electric"], "generation": {"name": "kanto"}},
  {"num": "026", "name": "raichu", "type":["electric"], "generation": {"name": "kanto"}},
  {"num": "001", "name": "bulbasaur", "type":["grass", "poison"], "generation": {"name": "kanto"}},
  {"num": "007", "name": "squirtle", "type":["water"], "generation": {"name": "kanto"}},
  {"num": "004", "name": "charmander", "type":["fire"], "generation": {"name": "kanto"}},
];


/* const pikachu = {"num": "025", "name": "pikachu", "type":["electric"], "generationName": "kanto"};
const bulbasaur = {"num": "001", "name": "bulbasaur", "type":["grass", "poison"], "generationName": "kanto"};
const squirtle = {"num": "007", "name": "squirtle", "type":["water"], "generationName": "kanto"};
const charmander = {"num": "004", "name": "charmander", "type":["fire"], "generationName": "kanto"};

const pokemonTest = [pikachu, bulbasaur, squirtle, charmander] */

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
    expect(ordemDecrescente[0].num).toBe("026")
  })
});

describe('Filtrar pokémons por tipo', () => {
  it('É uma função', () => {
    expect (typeof filtrarTipo).toBe('function')
  });

  it ('Deve retornar um tipo de pokemon', () => {
    const resultadoFiltro = filtrarTipo(pokeNomes, "fire");
    const tiposPokes = ["fire"];
    expect(resultadoFiltro[0].type).toEqual(tiposPokes)
  })  
});

describe ('Filtrar pokémon por região', () => {
  it('É uma função', () => {
    expect (typeof filtrarRegiao).toBe('function')
  })

  it ('Deve retornar a região de um pokémon', () => {
    const resultadoRegiao = filtrarRegiao(pokeNomes, "kanto");
    const regiaoPoke = "kanto";
    expect(resultadoRegiao[0].generation.name).toEqual(regiaoPoke)  
  })
});

describe ('Calcular a porcentagem de um tipo de pokémon', () => {
  it('É uma função', () => {
    expect (typeof calcPorcentagem).toBe('function')
  })

  it ('Deve retornar a porcentagem de um tipo de pokémon', () => {
    const resultadoCalculo = calcPorcentagem(pokeNomes.length, 2);
    const porcentagemEletrico = 40;
    expect(resultadoCalculo).toBe(porcentagemEletrico)  
  })
});