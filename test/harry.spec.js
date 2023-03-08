import { searchBar, filterAncestry, filterHouse, filterSpecie, filterGenero, qtdePersonByHouse, orderFilterA, orderFilterZ} from '../src/data.js';

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

const elfric = [
  {
    "name": "Elfric the Eager",
    "gender": null,
    "species": null
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
    expect(filterHouse(characters, "Ravenclaw")).toEqual([characters[3]]);
  });
});

describe('filterSpecie', () => {
  it('deveria ser uma função', () => {
    expect(typeof filterSpecie).toBe('function');
  });

  it('deveria retornar "Dennis", "Harry Potter", "Myrtle Warren", "Hannah Abbott" e "Gregory Goyle" para "Human"', () => {
    expect(filterSpecie(characters, "Human")).toEqual([characters[0],characters[1],characters[2],characters[3],characters[7]]);
  });

  it('deveria retornar "Dobby" para "House-elf"', () => {
    expect(filterSpecie(characters, "House-elf")).toEqual([characters[4]]);
  });

  it('deveria retornar "Magorian" para "Centaur"', () => {
    expect(filterSpecie(characters, "Centaur")).toEqual([characters[6]]);
  });

  it('deveria retornar "Gornuk" para "Goblin"', () => {
    expect(filterSpecie(characters, "Goblin")).toEqual([characters[5]]);
  });
  it('deveria retornar "elfric" para "null"', () => {
    expect(filterSpecie(elfric)).toEqual(elfric);
  });
});

describe('filterGenero', () => {
  it('deveria ser uma funcção', () => {
    expect(typeof filterGenero).toBe('function');
  });
  
  it('deveria retornar "Hannah Abbott", "Myrtle Warren" para "Female"', () => {
    expect(filterGenero(characters, "Female")).toEqual([characters[2],characters[3]]);
  });

  it('deveria retornar "Harry Potter", "Gregory Goyle", "Dobby", "Gornuk", "Magorian", "Dennis" para "Male"', () => {
    expect(filterGenero(characters, "Male")).toEqual([characters[0],characters[1],characters[4],characters[5],characters[6],characters[7]]);
  });

  it('deveria retornar "elfric" para "null"', () => {
    expect(filterGenero(elfric)).toEqual(elfric);
  });
});

describe('qtdePersonByHouse', () => {
  it('deveria ser uma função', () => {
    expect(typeof qtdePersonByHouse).toBe('function');
  });

  it('deveria retornar 1 para "Gryffindor"', () => {
    expect(qtdePersonByHouse(characters, "Gryffindor")).toBe(1);
  });
  
  it('deveria retornar 1 para "Ravenclaw"',() => {
    expect(qtdePersonByHouse(characters, "Ravenclaw")).toBe(1);
  });

  it('deveria retornar 1 para "Slytherin"',() => {
    expect(qtdePersonByHouse(characters, "Slytherin")).toBe(1);
  });

  it('deveria retornar 1 para "Hufflepuff"',() => {
    expect(qtdePersonByHouse(characters, "Hufflepuff")).toBe(1);
  });
});

describe('orderFilterA', () => {
  it('deveria ser uma função', () => {
    expect(typeof orderFilterA).toBe('function');
  });

  it('deveria retornar "Dennis", "Dobby", "Gornuk", "Gregory Goyle", "Hannah Abbott", "Harry Potter", "Magorian", "Myrtle Warren" para "name"' , () => {
    expect(orderFilterA(characters)).toEqual([characters[7],characters[4],characters[5],characters[1],characters[2],characters[0],characters[6],characters[3]]);
  });
});

describe('orderFilterZ', () => {
  it('deveria ser uma função', () => {
    expect(typeof orderFilterZ).toBe('function');
  });

  it('deveria retornar "Myrtle Warren", "Magorian", "Harry Potter", Hannah Abbott", "Gregory Goyle", "Gornuk", "Dobby", "Dennis" para "name"', () => {
    expect(orderFilterZ(characters)).toEqual([characters[3],characters[6],characters[0],characters[2],characters[1],characters[5],characters[4],characters[7]]);
  });
});