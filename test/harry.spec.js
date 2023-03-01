import { example, anotherExample } from '../src/data.js';


describe('cardDrawing', () => {
  it('deveria ser uma função', () => {
    expect(typeof cardDrawing).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
