import { searchBar, filterAncestry, filterHouse} from '../src/data.js';

const characters = [
  {
    "id": 0,
    "name": "Harry Potter",
    "species": "Human",
    "ancestry": "Half-blood",
    "gender": "Male",
    "house": "Gryffindor"
  },
  {
    "id": 1,
    "name": "Gregory Goyle",
    "species": "Human",
    "ancestry": "Pure-blood",
    "gender": "Male",
    "house": "Slytherin"
  },
  {
    "id":2,
    "name": "Hannah Abbott",
    "species": "Human",
    "ancestry": "Half-blood",
    "gender": "Female",
    "house": "Hufflepuff"
  },
  {
    "id":3,
    "name": "Myrtle Warren",
    "species": "Human",
    "ancestry": "Nascido-Trouxa",
    "gender": "Female",
    "house": "Ravenclaw"
  },
  {
    "id":4,
    "name": "Dobby",
    "species": "House-elf",
    "ancestry": null,
    "gender": "Male",
    "house": null
  },
  {
    "id":5,
    "name": "Gornuk",
    "species": "Goblin",
    "ancestry": null,
    "gender": "Male",
    "house": null
  },
  {
    "id":6,
    "name": "Magorian",
    "species": "Centaur",
    "ancestry": null,
    "gender": "Male",
    "house": null
  },
  {
    "id":7,
    "name": "Dennis",
    "species": "Human",
    "ancestry": "Muggle",
    "gender": "Male",
    "house": null
  }
]

describe('searchBar', () => {
  it('deveria ser uma função', () => {
    expect(typeof searchBar).toBe('function');
  });
  
  it('deveria retornar "Harry Potter" para "Harry Potter"', () => {
    expect(searchBar(characters, "Harry Potter")).toEqual([characters[0]]);
  });
});

describe('filterAncestry', () => {
  it('deveria ser uma função', () => {
    expect(typeof filterAncestry).toBe('function');
  });

  it('deveria retornar "Harry Potter" e "Hannah Abbott" para "Half-blood"', () => {
    expect(filterAncestry(characters, "Half-blood")).toEqual([characters[0],characters[2]]);
  });

  it('deveria retornar "Gregory Goyle" para "Pure-blood"', () => {
    expect(filterAncestry(characters, "Pure-blood")).toEqual([characters[1]]);
  });

  it('deveria retornar "Myrtle Warren" para "Nascido-Trouxa"', () => {
    expect(filterAncestry(characters, "Nascido-Trouxa")).toEqual([characters[3]]);
  });

  it('deveria retornar "Dennis" para "Muggle"', () => {
    expect(filterAncestry(characters, "Muggle")).toEqual([characters[7]]);
  });
});

describe('filterHouse', () => {
  it('deveria ser uma função', () => {
    expect(typeof filterHouse).toBe('function');
  });

  it('deveria retornar "Hannah Abbott" para "Hufflepuff"', () => {
    expect(filterHouse(characters, "Hufflepuff")).toEqual([characters[2]]);
  });

  it('deveria retornar "Harry Potter" para "Gryffindor"', () => {
    expect(filterHouse(characters, "Gryffindor")).toEqual([characters[0]]);
  });

  it('deveria retornar "Gregory Goyle" para "Slytherin"', () => {
    expect(filterHouse(characters, "Slytherin")).toEqual([characters[1]]);
  });

  it('deveria retornar "Myrtle Warren" para "Ravenclaw"', () => {
    expect(filterHouse(characters, "Ravenclaw")).toEqual([characters[2]]);
  });
});

// describe('filterSpecie', () => {
//   it
// })

