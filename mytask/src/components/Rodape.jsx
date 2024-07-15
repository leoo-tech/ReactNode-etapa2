import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="mt-5 py-1 bg-dark text-white">
            <Container fluid>
                <Row>
                    <Col md={12} className="text-center text-md-center">
                        <p>Desenvolvido por: Leonardo</p>
                        <p>&copy;React Bootstrap - 2024</p>
                        <Link to='/privacidade' style={{ textDecoration: 'none', color: 'whitesmoke' }}>
                            Política de Privacidade
                        </Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;