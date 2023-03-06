import { ordenar  } from '../src/data.js';

const castle = {
  title: 'Castle in the Sky',
  release_date:"1986"
}
const totoro = {
  title: 'My neighbor Totoro',
  release_date:"1988"
}
const spirited ={
  title: 'Spirited Away',
  release_date: "2001"

}
const filmes = [totoro, castle, spirited]

it('deve ordenar filmes de A a Z',() =>{
  const resultado = ordenar(filmes,'deAZ')
  expect(resultado).toEqual([castle,totoro,spirited])
})


it('deve ordenar filmes de Z a A',() =>{
  const resultado = ordenar(filmes,'deZA')
  expect(resultado).toEqual([spirited, totoro, castle])
})

it('deve ordenar data de maior para menor',() =>{
  const resultado = ordenar(filmes,'deZA')
  expect(resultado).toEqual([spirited, totoro, castle])
})


