/* pagina inicial sobre serviços gerais terceirizados. usando react bootstrap, terá cards, buttons e tabs */

import { Container, Card, Button, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <main>
      <Container>
        <h1>Serviços Gerais Terceirizados</h1>
        <Tabs defaultActiveKey="servicos" id="uncontrolled-tab-example" className="mb-3" justify>
          <Tab eventKey="servicos" title="Serviços">
            <Card style={{ width: '20rem', margin: 'auto' }} border="dark">
              <Card.Img style={{ width: '10rem', margin: 'auto' }} className="mt-4" variant="top" src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png" alt='Logo' />

              <Card.Header as='h5'>Novos serviços adicionados!</Card.Header>
              <Card.Body>
                <Card.Title>Serviços</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>
                  Oferecemos uma ampla gama de serviços terceirizados, incluindo limpeza, segurança, portaria, jardinagem, entre outros.
                </Card.Text>
                <Button variant="primary">Saiba mais</Button>
              </Card.Body>

            </Card>
          </Tab>
          <Tab eventKey="clientes" title="Clientes">
            <Card border="dark" style={{ width: '20rem', margin: 'auto' }}>
              <Card.Img style={{ width: '10rem', margin: 'auto' }} className="mt-4" variant="top" src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png" alt='Logo' />
              <Card.Body>
                <Card.Title>Clientes</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }} >
                  Atendemos empresas de diversos segmentos, como indústrias, comércios, condomínios, escolas, hospitais, entre outros.
                </Card.Text>
                <Button variant="primary">Saiba mais</Button>
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey="contato" title="Contato">
            <Card border="dark" style={{ width: '20rem', margin: 'auto' }}>
              <Card.Img style={{ width: '10rem', margin: 'auto' }} className="mt-4" variant="top" src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png" alt='Logo' />
              <Card.Body>
                <Card.Title>Contato</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>
                  Entre em contato conosco para solicitar um orçamento ou esclarecer dúvidas sobre nossos serviços.
                </Card.Text>
                <Button variant="primary">Saiba mais</Button>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
        <Button className="mt-5" variant="outline-dark" as={Link} to='/bla'>Testando a página de erro</Button>
      </Container>
    </main>
  );
}
