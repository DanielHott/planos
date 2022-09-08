import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './index';
import { useAddContext, AddContextProvider } from "../../hooks/useAddContext";

test('1.1 - Testa título', () => {
  render(
  <AddContextProvider>
        <Header />
  </AddContextProvider>
  );
  const titulo = screen.getByText(/Meus Processos Seletivos/i);
  expect(titulo).toBeInTheDocument();
});

test('1.2 - Testa botão', () => {
    render(
    <AddContextProvider>
        <Header />
    </AddContextProvider>);
    const botao = screen.getByText(/Adicionar >/i);
    expect(botao).toBeInTheDocument();
    userEvent.click(botao);
  });