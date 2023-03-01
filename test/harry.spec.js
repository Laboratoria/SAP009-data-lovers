import { data } from '../src/data.js';


describe('data', () => {
  it('deveria ser um objeto', () => {
    expect(typeof data).toBe('object');
  });
});


describe('filterAncestry', () => {
  it('deveria ser uma função', () => {
    expect(typeof data.filterAncestry).toBe('function');
  });
});

describe()