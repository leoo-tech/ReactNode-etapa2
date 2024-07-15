import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Tarefas() {
    return (
        <main>
            <Container className="mt-5">
                <h1>suas tarefas</h1>
                <hr />
                <Link to='/tarefas/adicionar'>
                    <Button variant='dark'>Adicionar tarefa</Button>
                </Link>
            </Container>

        </main>
    );
}

export default Tarefas;
