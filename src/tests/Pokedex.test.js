import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './Helpers/renderWithRouter';
import pokemons from '../data';
import App from '../App';

describe('Testando a Página POKEDEX', () => {
  test('Teste se página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);

    const pokedexHeading = screen
      .getByRole('heading', { name: /Encountered pokémons/i, level: 2 });
    expect(pokedexHeading).toBeInTheDocument();
  });

  test(`Teste se é exibido o próximo Pokémon da lista quando o botão Próximo
   pokémon é clicado`,
  () => {
    renderWithRouter(<App />);
    const clickToButton = screen.getByRole('button', { name: /próximo pokémon/i });
    const clickOK = userEvent.click(clickToButton);
    // screen.logTestingPlaygroundURL();
    // expect(clickToButton).toBeInTheDocument();
    expect(clickOK).toBe();

    const mapPoke = pokemons.map((ele) => ele.name);
    mapPoke.forEach((e) => (e === 'Charmander') && expect(e).toBeDefined());
  });

  test('O botão deve conter o texto Próximo pokémon', () => {
    renderWithRouter(<App />);
    const showButton = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(showButton).toBeInTheDocument();
  });

  test('O texto do botão deve corresponder ao nome do tipo, ex. Psychic', () => { // 100
    renderWithRouter(<App />);
    const NAME_POKE_ID = 'pokemon-name';
    const buttonDragon = screen.getByRole('button', { name: /dragon/i });
    const clickLastButton = userEvent.click(buttonDragon);
    expect(buttonDragon).toBeInTheDocument(clickLastButton);

    const containerPikachu = screen.getByTestId(NAME_POKE_ID);
    const buttonIdPikachu = screen.getAllByTestId('pokemon-type-button');
    userEvent.click(buttonIdPikachu[0]);
    expect(containerPikachu.innerHTML).toBe('Pikachu');

    // screen.logTestingPlaygroundURL();
  });

  test('O texto do botão deve ser All', () => {
    renderWithRouter(<App />);
    const textToButtonAll = screen.getByRole('button', { name: /all/i });
    expect(textToButtonAll).toBeInTheDocument();
  });

  test('O botão All precisa estar sempre visível.', () => { // 60
    renderWithRouter(<App />);
    const textToButtonAll = screen.getByRole('button', { name: /all/i });
    userEvent.click(textToButtonAll);
    expect(textToButtonAll).toBeInTheDocument();
  });
});
