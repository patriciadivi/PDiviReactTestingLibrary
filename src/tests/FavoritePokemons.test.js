import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './Helpers/renderWithRouter';
import App from '../App';

describe('Testando a Página FAVORITE POKEMONS', () => {
  test('Teste se é exibido na tela a mensagem No favorite pokemon found',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/favorites');
      const NotFavorite = screen
        .getByText(/No favorite pokemon found/i);
      expect(NotFavorite).toBeDefined();
    });
});
