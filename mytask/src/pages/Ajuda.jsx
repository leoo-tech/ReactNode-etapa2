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
                        <Accordion.Header>Por que Contratar a nossa empresa de Serviços Gerais?</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Contratar uma empresa de serviços gerais terceirizados é uma excelente opção para quem deseja terceirizar serviços de limpeza, segurança, portaria, jardinagem, entre outros. Além de contar com profissionais qualificados e treinados, você terá mais tempo para se dedicar ao seu negócio e à sua família.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>É seguro contratar uma terceirizada?</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Sim, é seguro contratar uma empresa de serviços gerais terceirizados. Nossos profissionais são devidamente treinados e qualificados para realizar os serviços com eficiência e segurança. Além disso, contamos com seguro de responsabilidade civil para garantir a segurança dos nossos clientes e colaboradores.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Quem são nossos clientes?</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Atendemos empresas de diversos segmentos, como indústrias, comércios, condomínios, escolas, hospitais, entre outros. Nossos clientes confiam em nossos serviços e nos recomendam para outras empresas. Entre em contato conosco e solicite um orçamento sem compromisso.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Onde posso contatá-los?</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Você pode entrar em contato conosco através do formulário de contato do nosso site, por e-mail, telefone ou pessoalmente em nossa sede. Estamos à disposição para esclare
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <section className="botoes ms-auto">
                    <Button className="mt-1 me-1" variant="dark" as={Link} to='/' >Inicio</Button>
                    <Button className="mt-1 me-1" variant="outline-dark" as={Link} to='/contato' >Entre em contato</Button>
                </section>
                <Alert className="mt-1 me-1 pt-10" variant="warning">Estamos em manutenção</Alert>

            </Container>
        </main>
    );
}