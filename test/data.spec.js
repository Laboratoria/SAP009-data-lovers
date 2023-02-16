
import { buscaNome, buscaTag } from "../src/data.js"


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

it('retornar campeão digitado', () => {
  expect(buscaNome('Aatrox', 'Morgana', 'Annie')).toBe('aa', 'mor', 'ann');
});

// describe('buscaTag', () => {
//   it('função de filtrar campeão pelo tipo', () => {
//     const campeao = [
//       { name: "Shaco" },
//     ]
//     const tag = [
//       { tags: "Assassin" },
//     ]
//     const resultadoEsperado = [
//       {
//         campeao
//       }
//     ]
//     expect(buscaTag(campeao, tag)).toBe(resultadoEsperado);
//   });
// });
it('retornar tipo do campeao', () => {
  expect(buscaTag('Shaco')).toBe('Assassin');
});
//});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
