import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function Menu() {
  const [expanded, setExpanded] = useState(false);

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
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
              <Nav.Link as={Link} to="/login" onClick={() => setExpanded(false)}>Login</Nav.Link>
              <Nav.Link as={Link} to="/cadastro" onClick={() => setExpanded(false)}>Cadastro</Nav.Link>
              <Nav.Link as={Link} to="/tarefas" onClick={() => setExpanded(false)}>Suas tarefas</Nav.Link>
              <Nav.Link as={Link} to="/ajuda" onClick={() => setExpanded(false)}>Ajuda</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}