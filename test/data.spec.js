import {
  selectNameAz,
  selectNameZa,
  orderName,
  harryFunçoes,
  filterHouse,
  calcPercentage,
  filtroCasa,
} from "../src/data.js";

const harry = {
  name: "Harry Potter",
  house: "Gryffindor",
};

const ron = {
  name: "Ronald Weasley",
  house: "Gryffindor",
};

const hermione = {
  name: "Hermione Granger",
  house: "Gryffindor",
};

const avery = {
  name: "Avery I",
  house: "Slytherin",
};

const stewart = {
  name: "Stewart Ackerley",
  house: "Ravenclaw",
};

const cedric = {
  name: "Cedric Diggory",
  house: "Hufflepuff",
};

const albino = {
  name: "Albino peacock",
  house: null,
};

const personagens = [harry, ron, hermione, avery, stewart, cedric, albino];

describe("orderName é uma função", () => {
  it("is a function", () => {
    expect(typeof orderName).toBe("function");
  });

  describe("selectNameAz é uma função", () => {
    it("is a function", () => {
      expect(typeof selectNameAz).toBe("function");
    });

    it("Deve ordernar de A-Z", () => {
      const resultado = selectNameAz(personagens);
      expect(resultado).toEqual([
        albino,
        avery,
        cedric,
        harry,
        hermione,
        ron,
        stewart,
      ]);
      //expect(resultado[0]).toBe(["Albino peacock"]);
    });
  });

  describe("selectNameZa é uma função", () => {
    it("is a function", () => {
      expect(typeof selectNameZa).toBe("function");
    });
    it("Deve ordernar de Z-A", () => {
      const resultado = selectNameZa(personagens);
      expect(resultado).toEqual([
        stewart,
        ron,
        hermione,
        harry,
        cedric,
        avery,
        albino,
      ]);
      //expect(resultado[0]).toBe(["Stewart Ackerley"]);
    });
  });

  //harryFunçoes é uma função ? retorna array com todos nomes?
  describe("harryFunçoes", () => {
    it("harryFunçoes deveria ser uma função", () => {
      expect(typeof harryFunçoes).toBe("function");
    });
  });

  //harryFunções retorna um array de nome ?
  describe("harryFunçoes", () => {
    it("shold be an array com TODOS os nomes dos personagens", () => {
      expect(typeof harryFunçoes).toBe([]);
    });
  });

  //const casaFiltro = character.house.includes(house); return casaFiltro; se for === a seleção retorna //determina se a condição pode ser encontrado dentro da string    return resultadoCasas; se for null é falso

  //filterhouse é uma função ? retorna array com personagens que tem a propriedades casa com valor?
  describe("filterHouse é uma função", () => {
    it("is a function", () => {
      expect(typeof filterHouse).toBe("function");
    });
  });

  //filtro casa é uma função ? é um boleano? retorna false para null? retorna array com todas as casas? retorna array com personagens que tem a propriedades casa com valor igual ao value do select, descarta null ou todas as casas ( tem casas com outros valores 707?
  describe("filtroCasa é uma função", () => {
    it('is a true para ""', () => {
      expect(typeof filtroCasa).toBe("function");
    });

    it('is a true para "Hufflepuff"', () => {
      expect(filtroCasa("Hufflepuff")).toBe(true);
    });

    it('is a true para "Ravenclaw"', () => {
      expect(filtroCasa("Ravenclaw")).toBe(true);
    });

    it('is a retornar false para "Slytherin"', () => {
      expect(filtroCasa("Slytherin")).toBe(true);
    });

    it('is a retornar false para "Gryffindor"', () => {

      expect(filtroCasa("Gryffindor")).toBe(true);
    });

    it('is a retornar false para "null"', () => {
      expect(filtroCasa(null)).toBe(false);
    });
  });

  //calculo é uma função que pega 100% das casas sem null e retorna o % das casas selecionadas ? todos === hogwarts partes é  "Hufflepuff", "Ravenclaw", Slytherin", "Gryffindor", //const todas as casas = [Hufflepuff", "Ravenclaw", Slytherin", "Gryffindor", null] = 100%

  describe("calcPercentage", () => {
    it("is a  function ", () => {
      expect(typeof calcPercentage).toBe("function");
    });
  });

  //it("retorna % de personagens de cada casa selecionadas , quanto é o total?", () => {
  //const totalDEcasasCasaSelecionada = //calculodeparte/todos*100(["Gryffindor"]);
  //expect(totalDEcasasCasaSelecionada).toBe("x % são da casa Gryffindor");
  //});
//});