import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import { UsuarioContext } from './contexts/UsuarioContext';
import Menu from './components/Menu';
import Footer from './components/Rodape';
import Ajuda from './pages/Ajuda';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import Privacidade from './pages/Privacidade';
import NovaTarefa from './pages/NovaTarefa';
import Tarefas from './pages/Tarefas';
import EditarTarefa from './pages/EditarTarefa';
import NotFound from './pages/NotFound';

// browserrouter -> roteamento de páginas
// route -> rota de página
// routes -> conjunto de rotas
// menu -> componente de menu

export default function App() {
  // o estado do usuario indica se ele esta logado ou não
  // null = não sabemos se está logado
  // objeto = está logado
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  useEffect(() => {
    // monitorar o estado de autenticação do usuário
    onAuthStateChanged(auth, (usuario) => {
      // se o usuário estiver logado, o objeto usuário é retornado
      // se o usuário não estiver logado, o valor é null
      setUsuarioLogado(usuario);
    });
  }, []);

  return (
    <main className='conteudo'>
      <UsuarioContext.Provider value={{ usuarioLogado }}>
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
            <Route path='/tarefas/editar/:id' element={<EditarTarefa />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <hr />
          <Footer />
        </BrowserRouter>
        <Toaster position='bottom-right' />
      </UsuarioContext.Provider>
    </main>
  );
}
