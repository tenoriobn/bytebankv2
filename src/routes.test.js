import { render, screen } from "@testing-library/react";
import App from './paginas/Principal/App';
import { BrowserRouter } from "react-router-dom";

describe('Rotas', () => {
  test('Deve renderizar a rota principal', () => {
    render(<App />, {wrapper: BrowserRouter});

    const usuario = screen.getByText('Olá, Joana :)!')
    expect(usuario).toBeInTheDocument();
  })
})