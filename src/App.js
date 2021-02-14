import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import './App.css'
import Produtos from './Components/Produtos/Produtos';
import Contato from './Components/Contato/Contato';
import Produto from './Components/Produtos/Produto';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Produtos />} />
              <Route path="produto/:id" element={<Produto />} />
              <Route path="contato" element={<Contato />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
