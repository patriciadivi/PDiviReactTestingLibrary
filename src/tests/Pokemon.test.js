import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './Helpers/renderWithRouter';
// import pokemons from '../data';
import App from '../App';

const LIKE_POKE_PIKACHU = '/pokemons/25';
const POKEMON_PRICE_ID = 'pokemon-weight';
const POKEMON_TYPE_ID = 'pokemon-type';
const POKEMON_NAME_ID = 'pokemon-name';

describe('Testando a Página POKEMON', () => {
  test('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);
    const cardToPokedex = screen.getByText(/pikachu/i);
    expect(cardToPokedex).toBeDefined();
  });

  // test('O nome correto do Pokémon deve ser mostrado na tela', () => {
  //   renderWithRouter(<App />);
  //   const buttonIdPikachu = screen.getAllByTestId('pokemon-type-button');
  //   userEvent.click(buttonIdPikachu[0]);
  //   expect(containerPikachu.innerHTML).toBe('Pikachu');
  // });

  test('O tipo correto do pokémon deve ser mostrado na tela.', () => {
    renderWithRouter(<App />);
    const typePokemon = screen.getByTestId(POKEMON_TYPE_ID);
    expect(typePokemon.innerHTML).toBe('Electric');
  });

  test('O tipo correto do pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);
    const typeToPokemon = screen.getByTestId(POKEMON_NAME_ID);
    expect(typeToPokemon.innerHTML).toBe('Pikachu');
  });

  test(`O peso médio do pokémon deve ser exibido com um texto no formato 
  Average weight: <value> <measurementUnit>; onde <value> e <measurementUnit> são,
  respectivamente, o peso médio do pokémon e sua unidade de medida`, () => {
    renderWithRouter(<App />);
    const typeToPokemon = screen.getByTestId(POKEMON_PRICE_ID);
    expect(typeToPokemon.innerHTML).toBe('Average weight: 6.0 kg');
  });

  test(`A imagem do Pokémon deve ser exibida.
  Ela deve conter um atributo src com a URL da
  imagem e um atributo alt com o texto <name> sprite,
   onde <name> é o nome do pokémon`, () => {
    renderWithRouter(<App />);
    const imgToPoke = screen.getByAltText(/Pikachu sprite/i);
    expect(imgToPoke).toBeDefined();

    const linkToImgPoke = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    expect(imgToPoke.src).toBe(linkToImgPoke);
  });

  test(`Teste se o card do Pokémon indicado na Pokédex
    contém um link de navegação para exibir detalhes deste Pokémon.
  O link deve possuir a URL /pokemons/<id>, onde <id> é o id do Pokémon exibido`, () => {
    const { history } = renderWithRouter(<App />);
    const linkPokeNave = screen.getByRole('link', { name: /more details/i });
    expect(linkPokeNave).toBeDefined();
    history.push(LIKE_POKE_PIKACHU);
    expect(history.location.pathname).toBe(LIKE_POKE_PIKACHU);
  });

  test(`Teste se ao clicar no link de navegação do Pokémon,
   é feito o redirecionamento da aplicação para a página de detalhes de Pokémo`, () => {
    const { history } = renderWithRouter(<App />);
    userEvent.click(screen.getByRole('link', { name: /more details/i }));
    expect(history.location.pathname).toBe(LIKE_POKE_PIKACHU);
  });

  test(`O ícone deve ser uma imagem com o atributo
  src contendo o caminho /star-icon.svg`, () => {
    const { history } = renderWithRouter(<App />);
    history.push(LIKE_POKE_PIKACHU);

    const checkboxPoke = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(checkboxPoke);

    // const linkIconPoke = 'http://localhost:3000/star-icon.svg';
    const iconPoke = screen.getByAltText(/Pikachu is marked as favorite/i);
    expect(iconPoke).toBeDefined();
    expect(iconPoke.src).toBe('http://localhost/star-icon.svg');
  });
});
