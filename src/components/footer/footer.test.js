import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Footer } from './index';
import { useAddContext, AddContextProvider } from "../../hooks/useAddContext";

test('1.1 - Testa título', () => {
  render(
  <AddContextProvider>
        <Footer />
  </AddContextProvider>
  );
  const titulo = screen.getByText(/Salve e organize seus processos seletivos!/i);
  expect(titulo).toBeInTheDocument();
});

test('1.2 - Testa botão', () => {
    render(
    <AddContextProvider>
        <Footer />
    </AddContextProvider>);
    const botao = screen.getByText(/Desenvolvido por Daniel Hott/i);
    expect(botao).toBeInTheDocument();
    userEvent.click(botao);
  });