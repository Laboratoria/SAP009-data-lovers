import { filtrarPorFuncao, ordenacaoAz, ordenacaoZa } from "../src/data.js";


const exampleChampions = [
  {
    name: "Aatrox",
    tags: "Fighter",
  },
  {
    name: "Fiora",
    tags:"Assassin",
  },
  {
    name: "Rumble",
    tags:  "Mage",
  }
]

describe("filtrarPorFuncao", () => {
  it("is a function", () => {
    expect(typeof filtrarPorFuncao).toBe("function");
  });

  it("must filter by role of champion", () => {
    expect(filtrarPorFuncao(exampleChampions,"Mage")).toStrictEqual([exampleChampions[2]]);
  });
});

describe("ordenacaoAz", () => {
  it("is a function", () => {
    expect(typeof ordenacaoAz).toBe("function");
  });

  it("Sort the characters from A to Z", () => {
    expect(ordenacaoAz(exampleChampions)).toStrictEqual(exampleChampions);
  });
});

describe("ordenacaoZa", () => {
  it("is a function", () => {
    expect(typeof ordenacaoZa).toBe("function");
  });

  it("Sort the characters from Z to A", () => {
    expect(ordenacaoZa(exampleChampions)).toStrictEqual([exampleChampions[2],exampleChampions[1],exampleChampions[0]]);
  });
});

