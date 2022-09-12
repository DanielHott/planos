import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Cards } from './index';
import { AddContextProvider } from "../../hooks/useAddContext";

test('1.1 - Testa textos', () => {
  render(
  <AddContextProvider>
        <Cards />
  </AddContextProvider>
  );
  const titulo = screen.getByText(/Vazio/i);
  expect(titulo).toBeInTheDocument();
});