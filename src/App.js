import logo from './logo.svg';
import { Main } from './pages/main';
import { Header } from './components/header';
import { ModalAdd } from './components/modalAdd';
import './App.css';
import { AddContextProvider } from './hooks/useAddContext';
import { InsertName } from './components/modalInsertName';

function App() {
  return (
    <AddContextProvider>
      <Header />
        <ModalAdd />
      <InsertName />
    </AddContextProvider>
  );
}

export default App;
