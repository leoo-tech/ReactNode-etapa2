import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Rodape';
import Ajuda from './pages/Ajuda';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import Privacidade from './pages/Privacidade';
import NovaTarefa from './pages/NovaTarefa';
import Tarefas from './pages/Tarefas';
import { Toaster } from 'react-hot-toast';
import NotFound from './pages/NotFound';

// browserrouter -> roteamento de páginas
// route -> rota de página
// routes -> conjunto de rotas
// menu -> componente de menu

export default function App() {
  return (
    <main className='conteudo'>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path='/privacidade' element={<Privacidade />} />
          <Route path="/tarefas" element={<Tarefas />} />
          <Route path='/tarefas/adicionar' element={<NovaTarefa />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster position='bottom-right' />
    </main>
  );
}
