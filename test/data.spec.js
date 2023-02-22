
import { buscaNome, buscaTag, ordenarCampeoes } from "../src/data.js"


describe('buscaNome', () => {
  it('função de filtrar campeão por nome existente', () => {
    const campeoes = [
      { name: "Aatrox" },
      { name: "Morgana" },
      { name: "Annie" },
    ]
    const nome = "an";

    const resultadoEsperado = [
      { name: "Morgana" },
      { name: "Annie" }
    ]

    expect(buscaNome(campeoes, nome)).toEqual(resultadoEsperado);
  });

  it('função de filtrar campeão por nome não existente', () => {
    const campeoes = [
      { name: "Aatrox" },
      { name: "Morgana" },
      { name: "Annie" },
    ]
    const nome = "luigi";

    const resultadoEsperado = []
    
    expect(buscaNome(campeoes, nome)).toEqual(resultadoEsperado);
  });
});


describe('buscaTag', () => {
  it('função de filtrar campeão pelo tipo selecionado', () => {
    const campeoes = [
      { tags: ["Assassin", "Fighter"] },
      { tags: ["Tank"] },
      { tags: ["Mage"] },
    ]
    const tag = "Assassin"
  
    const resultadoEsperado = [
      { tags: ["Assassin", "Fighter"] },
    ]
    expect(buscaTag(campeoes, tag)).toEqual(resultadoEsperado);
  });
});


describe('ordenarCampeoes', () => {
  it('função de ordenar ataque do campeao do maior para o menor', () => {
    const campeoes = [
      { name: "Fiora",
        tags: [
          "Fighter", "Assassin"
        ],
        info: {[
          attack: 10,
          defense: 4,
          magic: 2,
          difficulty: 3
        ]}
      },
      { name: "Fizz",
        tags: [
          "Assassin", "Fighter"
        ],
        info: {[
          attack: 6,
          defense: 4,
          magic: 7,
          difficulty: 6
        ]}
      },
      { name: "Galio",
        tags: [
          "Tank", "Mage"
        ],
        info: {[
          attack: 3,
          defense: 7,
          magic: 6,
          difficulty: 3
        ]}
      }
    ]
  
    const resultadoEsperado = [
      { name: "Fiora",
        tags: [
          "Fighter", "Assassin"
        ],
        info: {[
          attack: 10,
          defense: 4,
          magic: 2,
          difficulty: 3
        ]}
      },
    ]
    expect(ordenarCampeoes(campeoes, maior-ataque)).toStrictEqual(resultadoEsperado);
  });
});






// it('retornar tipo do campeao', () => {
//   expect(buscaTag('Assassin')).toBe('Assassino');
// });



// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
