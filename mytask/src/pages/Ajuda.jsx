import { Accordion, Alert, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Ajuda() {

    return (
        <main className="mt-4">
            <Container>
                <h1>Ajuda</h1>
                <hr />
                <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Por que preciso de um gerenciador de tarefas?</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Um gerenciador de tarefas é uma ferramenta essencial para organizar e otimizar o seu tempo. Com ele, você pode criar, editar e excluir tarefas de forma simples e prática, garantindo que nada seja esquecido ou deixado para trás. Além disso, um gerenciador de tarefas permite que você acompanhe o progresso das suas atividades e priorize as mais importantes. Experimente agora mesmo o nosso gerenciador de tarefas e torne o seu dia a dia mais produtivo
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Posso usar para quais ocasiões?</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Nosso gerenciador de tarefas é indicado para qualquer pessoa que deseja organizar suas atividades diárias, sejam elas pessoais ou profissionais. Com ele, você pode criar listas de tarefas, definir prazos, adicionar lembretes e muito mais. Seja para organizar o seu dia a dia, planejar um evento ou gerenciar um projeto, o nosso gerenciador de tarefas é a ferramenta ideal para você.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Qual o perfil do público que utiliza um gerenciador de tarefas?</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                O nosso gerenciador de tarefas é indicado para qualquer pessoa que deseja organizar suas atividades diárias, sejam elas pessoais ou profissionais. Com ele, você pode criar listas de tarefas, definir prazos, adicionar lembretes e muito mais. Seja para organizar o seu dia a dia, planejar um evento ou gerenciar um projeto, o nosso gerenciador de tarefas é a ferramenta ideal para você.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <section className="botoes ms-auto">
                    <Button className="mt-1 me-1" variant="outline-dark" as={Link} to='/' >Inicio</Button>
                    <Button className="mt-1 me-1" variant="outline-dark" as={Link} to='/contato' >Entre em contato</Button>
                </section>
                <Alert className="mt-5 me-1 pt-10 text-center" variant="warning">Estamos em manutenção</Alert>

            </Container>
        </main>
    );
}