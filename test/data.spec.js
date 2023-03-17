import { calculo, getPeople, filterByGender, filterBySpecies, filterByName } from '../src/data.js';


// função getPeople
describe('getPeople', () => {
  it('is a function', () => {
    expect(typeof getPeople).toBe('function');
  });

  it('should return an array with all people', () => {
    const films = [
      { people: ['Pazu', 'Kiki'] },
      { people: ['Toto', 'Totoro'] },
    ];
    const allPeople = ['Pazu', 'Kiki', 'Toto', 'Totoro'];
    expect(getPeople(films)).toEqual(allPeople);
  });
});


//função filterByGender
describe('filterByGender', () => {
  it('is a function', () => {
    expect(typeof filterByGender).toBe('function');
  });

  it('should return an array with the gender female', () => {
    const people = [
      { name: 'Kiki', gender: 'female' }, 
      { name: 'Pazu', gender: 'male' }, 
    ];
    const gender = 'female';
    expect(filterByGender(people, gender)).toEqual([{ name: 'Kiki', gender: 'female' }]);
  });
});

//função filterBySpecies
describe('filterBySpecies', () => {
  it('is a function', () => {
    expect(typeof filterBySpecies).toBe('function');
  });

  it('should return an array with the species', () => {
    const people = [
      { name: 'Kiki', specie: 'human' }, 
      { name: 'Catbus', specie: 'cat' }, 
    ];
    const specie = 'cat';
    expect(filterBySpecies(people, specie)).toEqual([{ name: 'Catbus', specie: 'cat' }]);
  });
});

//função filterByName
describe('filterByName', () => {
  it('is a function', () => {
    expect(typeof filterByName).toBe('function');
  });

  it('should return an array with the name', () => {
    const people = [
      { name: 'Kiki' }, 
      { name: 'Pazu' }, 
    ];
    const name = 'Kiki';
    expect(filterByName(people, name)).toEqual([{ name: 'Kiki'}]);
  });
});

//calculo agregado
describe('calculo', () => {
  it('is a function', () => {
    expect(typeof calculo).toBe('function');
  });

  it('should return a string with the percentage', () => {
    const tipo = 10;
    const total = 100;
    expect(calculo(tipo, total)).toEqual('10.0');
  });
});


