import { sortDataByAthleteName , filterCountry , filterMedal , filterSport } from '../src/data.js'; // Importa as funções que serão testadas.

// verifica se a função "sortDataByAthleteName" é uma função, e testa se ela classifica corretamente os nomes dos atletas em ordem crescente e decrescente:
describe("sortDataByAthleteName", () => { // DESCRIÇÃO, com o nome da função
  const athletes = [ // Cria variável que usa um conjunto de dados de exemplo, que inclui três objetos com o campo "name" preenchido:
    { name: "Rafael Carlos da Silva" },
    { name: "Amanda Polk" },
    { name: "Bianca Farella" }
  ];

  it("should be a function", () => { // ISSO, diz o que é. Neste caso, "deveria ser uma função".
    expect(typeof sortDataByAthleteName).toBe("function"); // É ESPERADO, que o tipo de "sortDataByAthleteName" SEJA uma função.
  });

  it("should sort athlete names in ascending order", () => { // ISSO, verifica se a classificação em ordem crescente está correta.

    const sorted = sortDataByAthleteName(athletes, "a-z"); //Cria variável para receber a função descrita, o array de athletes e a ordenação de A-Z
    expect(sorted[0].name).toBe("Amanda Polk"); // É ESPERADO, que a 1ª posição do array athletes, SEJA o nome que começa com a letra "A".
    expect(sorted[1].name).toBe("Bianca Farella"); // É ESPERADO, que a 2ª posição do array athletes, SEJA o nome que começa com a letra "B".
    expect(sorted[2].name).toBe("Rafael Carlos da Silva"); //É ESPERADO, que a 3ª posição do array athletes, SEJA o nome que começa com a letra "R"
  });

  it("should sort athlete names in descending order", () => { // ISSO, verifica se a classificação em ordem decrescente está correta.

    const sorted = sortDataByAthleteName(athletes, "z-a"); // Reatríbui a variável acima, para receber a função descrita, mas com ordenação de Z-A
    expect(sorted[0].name).toBe("Rafael Carlos da Silva"); //É ESPERADO, que a 1ª posição do array athletes, SEJA o nome que começa com a letra "R"
    expect(sorted[1].name).toBe("Bianca Farella"); // É ESPERADO, que a 2ª posição do array athletes, SEJA o nome que começa com a letra "B".
    expect(sorted[2].name).toBe("Amanda Polk"); // É ESPERADO, que a 3ª posição do array athletes, SEJA o nome que começa com a letra "A".
  });
});