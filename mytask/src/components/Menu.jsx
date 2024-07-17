import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase/auth";

export default function Menu({ usuario }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    logout().then(() => {
      navigate("/login");
    });
  }

  return (
    <header>
      <Navbar
        expanded={expanded}
        className="sticky py-1 px-1"
        bg="dark"
        variant="dark"
        expand="md"
        onToggle={() => setExpanded(!expanded)}
      >
        <Container fluid>
          <Link to="/" onClick={() => setExpanded(false)}>
            <img
              src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png"
              width="32"
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ms-auto">
              {usuario && <Nav.Link as={Link} to="/tarefas" onClick={() => setExpanded(false)}>Tarefas</Nav.Link>}
              {!usuario && <Nav.Link as={Link} to="/login" onClick={() => setExpanded(false)}>Login</Nav.Link>}
              {!usuario && <Nav.Link as={Link} to="/cadastro" onClick={() => setExpanded(false)}>Cadastro</Nav.Link>}
              <Nav.Link as={Link} to="/ajuda" onClick={() => setExpanded(false)}>Ajuda</Nav.Link>
              {usuario && <span className="text-light me-2">Olá, {usuario.displayName}</span>}
              {usuario && <Button variant="outline-light" onClick={handleLogout}>Logout</Button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}