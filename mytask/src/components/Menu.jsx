import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase/auth";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

export default function Menu() {
  const usuario = useContext(UsuarioContext);
  const navigate = useNavigate();

  function handleLogout() {
    logout().then(() => {
      navigate("/login");
    });
  }

  return (
    <header>
      <Navbar
        className="sticky py-1 px-1"
        bg="dark"
        variant="dark"
        expand="md"
      >
        <Container fluid>
          <Link to="/">
            <img
              src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png"
              width="32"
            />
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse >
            <Nav className="ms-auto">
              <Link to="/" className="nav-link">
                Início
              </Link>
              <Link to="/ajuda" className="nav-link">
                Ajuda
              </Link>
              {usuario.usuarioLogado ? (
                <>

                  <Link to="/tarefas" className="nav-link">
                    Tarefas
                  </Link>
                  <Link to="/tarefas/adicionar" className="nav-link">
                    Nova tarefa
                  </Link>
                  <span className="text-light nav-link">OLÁ, {usuario.usuarioLogado.displayName}!</span>
                  <Button onClick={handleLogout} variant="outline-light">
                    Sair
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                  <Link to="/cadastro" className="nav-link">
                    Cadastro
                  </Link>
                </>
              )}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}