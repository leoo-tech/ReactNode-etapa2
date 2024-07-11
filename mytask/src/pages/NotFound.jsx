import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';

export default function NotFound() {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Alert variant="danger">
                        <Alert.Heading>404 - Página Não Encontrada</Alert.Heading>
                        <p>
                            Ooops! Parece que a página que você está procurando não existe.
                        </p>
                        <hr />
                        <p className="mb-0">
                            Talvez você tenha digitado o endereço errado ou a página foi movida para outro lugar.
                        </p>
                    </Alert>
                </Col>
            </Row>
        </Container>
    );
}