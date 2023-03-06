import {filtrarPersonagens} from '../src/data.js';

describe('filtrar nome do personagem', () => {
  it('deve retornar Harry', () => {
    const nomesFiltrados = filtrarPersonagens('harry')
    expect(nomesFiltrados.length).toBe(1)
    expect(nomesFiltrados[0].name).toBe("Harry Potter")
  })
})
