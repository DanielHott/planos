import { Header } from "../components/header"
import { ModalAdd } from '../components/modalAdd';
import { AddContextProvider } from '../hooks/useAddContext';
import { InsertName } from '../components/modalInsertName';
import { Cards } from '../components/cards';
import { Footer } from '../components/footer';
import { Container } from "../components/footer/styles";

export function Main() {
  return (
    <Container>
    <AddContextProvider>

      <Header />
      <ModalAdd />
      <InsertName />
      <Cards />
      <Footer />
    </AddContextProvider>
    </Container>
  );
}

export default Main;
