import { sortByOrderFilms} from '../src/data.js';

const castle = { 
  title: "Castle in the Sky", 
  director: "Hayao Miyazaki", 
  release_date: 1986,
  people: [
    {name: "Pazu"}
  ]
}

const whisper = { 
  title: "Whisper of the Heart", 
  director: "Yoshifumi Kondō", 
  release_date: 1995,
  people: [
    {name: "Shizuku Tsukishima"} 
  ]
}

const testMovies = [castle, whisper]

// testar se a const testMovies realmente é um objeto
describe('testMovies', () => {
  it('should be an object', () => {
    expect(typeof testMovies).toBe('object')
  })
});

//testar se a função sortByOrder realmente é uma função
describe('sort by order', () => {
  it('should be a function', () => {
    expect(typeof sortByOrderFilms).toBe('function')
  })

  //testar a ordenação de A-Z 
  it('should sort by AZ', () => {
    const order = sortByOrderFilms(testMovies, 'az')
    expect(order[0].title).toEqual("Castle in the Sky")
  });

  //testar a ordenação de Z-A 
  it('should sort by ZA', () => {
    const order = sortByOrderFilms(testMovies, 'za')
    expect(order[0].title).toEqual("Whisper of the Heart")
  });
});

