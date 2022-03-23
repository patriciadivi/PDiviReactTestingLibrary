import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './Helpers/renderWithRouter';
import App from '../App';

describe('Testando a Página NOT FOUND', () => {
  test('Teste se página contém um heading h2 com o texto Page requested not found 😭',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/notfound');
      const headingNotFound = screen
        .getByRole('heading', { name: /Page requested not found/i, level: 2 });
      expect(headingNotFound).toBeDefined();
    });

  test('Teste se página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/notfound');

    const imgCompGif = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const verImgGif = screen
      .getByRole('img',
        {
          name: /Pikachu crying because the page requested was not found/i,
        });

    expect(verImgGif.src).toBe(imgCompGif);
  });
});
