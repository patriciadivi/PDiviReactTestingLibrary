import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './Helpers/renderWithRouter';
import App from '../App';

describe('Testando a Página ABOUT', () => {
  test('Teste se a página contém as informações sobre a Pokédex.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');
    // console.log(history);
    const headingHome = screen.getByRole('heading', { name: /Pokédex/i, level: 1 });
    expect(headingHome).toBeDefined();
  });

  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');
    const headingHome = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });
    expect(headingHome).toBeDefined();
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');
    const paragraphPrimary = screen
      .getByText(/This application simulates a Pokédex/i);
    expect(paragraphPrimary).toBeDefined();

    const paragraphSecundy = screen
      .getAllByText(/One can filter Pokémons by type/i);
    expect(paragraphSecundy).toBeDefined();
  });

  test('Teste se a página contém a seguinte imagem de uma Pokédex:', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');

    const imgComp = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const verImg = screen.getByRole('img', { src: imgComp });

    expect(verImg.src).toBe(imgComp);
  });
});
