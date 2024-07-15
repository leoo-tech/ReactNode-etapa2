import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";


export default function Menu() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand='md'>
        <Container fluid>
          <Link to='/'>
            <img src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png" width="32" />
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/cadastro">Cadastro</Nav.Link>
              <Nav.Link as={Link} to="/tarefas">Suas tarefas</Nav.Link>
              <Nav.Link as={Link} to="/ajuda">Ajuda</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}