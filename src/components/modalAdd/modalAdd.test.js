import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ModalAdd } from './index';
import { AddContextProvider } from "../../hooks/useAddContext";

test('1.1 - Testa textos', () => {
  render(
  <AddContextProvider>
        <ModalAdd />
  </AddContextProvider>
  );
  const titulo = screen.getByText(/Empresa/i);
  expect(titulo).toBeInTheDocument();
});

test('1.2 - Testa botão', () => {
    render(
    <AddContextProvider>
        <ModalAdd />
    </AddContextProvider>);
    const botao = screen.getByText(/Salvar/i);
    expect(botao).toBeInTheDocument();
    userEvent.click(botao);
    expect(botao).toBeInTheDocument();
  });

  test('1.3 - Testa Submissão', async () => {
    render(
    <AddContextProvider>
        <ModalAdd />
    </AddContextProvider>);
    const inputEmpresa = screen.getByLabelText(/Empresa/i);
    const inputDataInscricao = screen.getByLabelText(/Data de inscrição:/i);
    fireEvent.change(inputEmpresa, {target: {value: 'Itambé'}})
    fireEvent.change(inputDataInscricao, {target: {value: '20/02/2022'}})
    const botao = screen.getByText(/Salvar/i);
    expect(botao).toBeInTheDocument();
    expect(inputEmpresa.value).toBe('Itambé');
    fireEvent.click(botao);
  });