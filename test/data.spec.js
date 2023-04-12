import { filtrarPorFuncao } from "../src/data.js";


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
