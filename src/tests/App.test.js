import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './Helpers/renderWithRouter';
import App from '../App';

describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação',

  () => {
    test('O primeiro link deve possuir o texto HOME', () => {
      renderWithRouter(<App />);

      const linkHome = screen.getByRole('link', { name: /Home/i }); // RTH
      expect(linkHome).toBeDefined();
    });

    test('O primeiro link deve possuir o texto ABOUT', () => {
      renderWithRouter(<App />);

      const linkAbout = screen.getByRole('link', { name: /About/i });
      expect(linkAbout).toBeDefined();
    });

    test('O primeiro link deve possuir o texto FAVORITE POKÉMONS', () => {
      renderWithRouter(<App />);

      const linkAFavoritePokemons = screen.getByRole('link',
        { name: /Favorite Pokémons/i });
      expect(linkAFavoritePokemons).toBeDefined();
    });
  });
