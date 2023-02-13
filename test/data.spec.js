import { films } from "../src/data.js";

describe("films", () => {
  it("is a object", () => {
    expect(typeof films).toBe("object");
  });
});

describe('films.alphabeticOrderFilter', () => {
  it('is a function', () => {
    expect(typeof films.alphabeticOrderFilter).toBe('function');
  });

  it('returns an array in alphabetical order by title', () => {
    const input = [
      { title: 'hope', year: 2023 },
      { title: 'chaos', year: 2018 },
      { title: 'star', year: 2003 },
      { title: 'coup', year: 2016 },
      
    ];
    const expectedOutput = [
      { title: 'chaos', year: 2018 },
      { title: 'coup', year: 2016 },
      { title: 'hope', year: 2023 },
      { title: 'star', year: 2003 },
    ];
    expect(films.alphabeticOrderFilter(input)).toEqual(expectedOutput);
  });
});
