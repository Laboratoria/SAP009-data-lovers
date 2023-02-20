

import { buscaNome, buscaTag, ordenarCampeoes } from "../src/data.js";

describe("buscaNome", () => {
  it("função de filtrar campeão por nome existente", () => {
    const campeoes = [
      { name: "Aatrox" },
      { name: "Morgana" },
      { name: "Annie" },
    ];
    const nome = "an";

    const resultadoEsperado = [{ name: "Morgana" }, { name: "Annie" }];

    expect(buscaNome(campeoes, nome)).toEqual(resultadoEsperado);
  });

  it("função de filtrar campeão por nome não existente", () => {
    const campeoes = [
      { name: "Aatrox" },
      { name: "Morgana" },
      { name: "Annie" },
    ];
    const nome = "luigi";

    const resultadoEsperado = [];

    expect(buscaNome(campeoes, nome)).toEqual(resultadoEsperado);
  });
});

describe("buscaTag", () => {
  it("função de filtrar campeão pelo tipo selecionado", () => {
    const campeoes = [
      { tags: ["Assassin", "Fighter"] },
      { tags: ["Tank"] },
      { tags: ["Mage"] },
    ];
    const tag = "Assassin";

    const resultadoEsperado = [{ tags: ["Assassin", "Fighter"] }];
    expect(buscaTag(campeoes, tag)).toEqual(resultadoEsperado);
  });
});

describe("ordenarCampeoes", () => {
  it("função de ordenar ataque do campeao do maior para o menor", () => {
    const campeoes = [
      {
        info: {
          attack: 5,
        },
      },
      {
        info: {
          attack: 2,
        },
      },
    ];
    const ataque = "maior-ataque";

    const resultadoEsperado = [
      {
        info: {
          attack: 5,
        },
      },
    ];
    expect(ordenarCampeoes(campeoes, ataque)).toEqual(resultadoEsperado);
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
