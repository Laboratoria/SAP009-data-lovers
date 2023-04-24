import {filtroGenero, filtroEspecie} from '../src/data.js';
const Pazu = {
  "name": "Pazu",
  "gender": "Male",
  "specie": "Human"
}

const Catbus  = {
  "name": "Catbus",
  "gender": "Male",
  "specie": "Cat"
}

const Kiki = {
  "name": "Kiki",
  "gender": "Female",
  "specie": "Witch"
}

const personagensGhibli = [Pazu,Catbus,Kiki]
it ("Deve filtrar personagens por gênero", ( ) => {
  const resultFiltrado = filtroGenero(personagensGhibli, "Female")
  expect(resultFiltrado).toEqual([Kiki])
});
it ("Deve filtrar personagens por espécie", ( ) => {
  const resultadoFiltrado = filtroEspecie(personagensGhibli, "Cat")
  expect(resultadoFiltrado).toEqual([Catbus])
});































// //describe recebe um título e uma função;
// describe('exemplo', () => {
//   it('is a function', () => {
//     expect(typeof exemplo).toBe('function');
//   });

//   it('return `exemplo`', () => {
//     expect(exemplo()).toBe("exemplo");
//   });
// });

// describe('outroExemplo', () => {
//   it('is a function', () => {
//     expect(typeof outroExemplo).toBe('function');
//   });

//   it('return `outroExemplo`', () => {
//     expect(outroExemplo()).toBe("OMG");
//   });
// });

