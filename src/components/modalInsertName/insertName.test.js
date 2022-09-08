import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { InsertName } from './index';
import { AddContextProvider } from "../../hooks/useAddContext";

test('1.1 - Testa textos', () => {
  render(
  <AddContextProvider>
        <InsertName />
  </AddContextProvider>
  );
  const titulo = screen.getByText(/Qual o seu nome?/i);
  expect(titulo).toBeInTheDocument();
});

test('1.2 - Testa botão', () => {
    render(
    <AddContextProvider>
        <InsertName />
    </AddContextProvider>);
    const botao = screen.getByText(/Salvar/i);
    expect(botao).toBeInTheDocument();
  });

  test('1.3 - Testa salvar nome', async () => {
    render(
    <AddContextProvider>
        <InsertName />
    </AddContextProvider>);
    const inputName = screen.getByTestId(/name/i);
    fireEvent.change(inputName, {target: {value: 'Teste'}})
    const botao = screen.getByText(/Salvar/i);
    fireEvent.click(botao);
    expect(botao).toBeInTheDocument();
    await waitFor(() => {
        const local = localStorage.getItem('myName');
        expect(local).toBe('Teste');
    })
    await waitFor(() => {
        expect(botao && inputName).not.toBeInTheDocument();
    })
  });