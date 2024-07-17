/* pagina inicial sobre serviços gerais terceirizados. usando react bootstrap, terá cards, buttons e tabs */

import { Container, Card, Button, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <main>
      <Container>
        <h1>My To-do!</h1>
        <Tabs defaultActiveKey="gerenciador" id="uncontrolled-tab-example" className="mb-3" justify>
          <Tab eventKey="gerenciador" title="Gerenciador">
            <Card style={{ width: '20rem', margin: 'auto' }} border="dark">
              <Card.Img style={{ width: '10rem', margin: 'auto' }} className="mt-4" variant="top" src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png" alt='Logo' />

              <Card.Header as='h5'>Novos recursos!</Card.Header>
              <Card.Body>
                <Card.Title>gerenciamento de tarefas</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>
                  Organize suas tarefas de forma simples e prática, com a possibilidade de adicionar, editar e excluir tarefas.
                </Card.Text>
                <Button as={Link} to='/login' variant="primary">Entrar</Button>
              </Card.Body>

            </Card>
          </Tab>
          <Tab eventKey="publico" title="Publico">
            <Card border="dark" style={{ width: '20rem', margin: 'auto' }}>
              <Card.Img style={{ width: '10rem', margin: 'auto' }} className="mt-4" variant="top" src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png" alt='Logo' />
              <Card.Body>
                <Card.Title>Público Alvo</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }} >
                  Para quem este gerenciador é recomendado? Para aqueles que desejam organizar suas tarefas diárias de forma prática e eficiente.
                </Card.Text>
                <Button as={Link} to='/ajuda' variant="primary">Saiba mais</Button>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </Container>
    </main>
  );
}
