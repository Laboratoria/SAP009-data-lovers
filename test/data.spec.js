import {filtrarNome} from '../src/data.js';



describe('Filtrar nomes Pokémons', () => {
  it('e uma funcao', () => {
    expect(typeof filtrarNome).toBe('function');
  });

  const pokemons = [
    {name: 'Raichu'},
    {name: 'Zubat'},
  ];

  it('deve filtrar pokemons por nome', () => {
    const pokemonsFiltrados = filtrarNome( 'Raichu');
    expect (pokemonsFiltrados.length).toBe(1)
    expect(pokemonsFiltrados.name[0]).toBe('Raichu');
  });

});