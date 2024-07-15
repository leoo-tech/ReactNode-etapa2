import { Badge, Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getTarefas } from "../firebase/tarefas";
import Loader from "../components/Loader";

function Tarefas() {
    // Exemplo de mapeamento de categorias para cores
    const categoriaCores = {
        'pessoal': 'primary',
        'trabalho': 'success',
        'urgente': 'danger',
        'estudos': 'warning',
        'lazer': 'info',
        // Adicione mais categorias e cores conforme necessário
    };
    const [tarefas, setTarefas] = useState(null);

    function carregarDados() {
        // then devolve a lista de tarefas da coleção
        getTarefas().then((tarefas) => {
            setTarefas(tarefas);
        });
    }

    // executar uma função quando o componente é renderizado pela primeira vez

    useEffect(() => {
        carregarDados();
    }, []);

    return (
        <main>
            <Container className="mt-5">
                <h1>suas tarefas</h1>
                <hr />
                {tarefas ? <section className="mt-2">
                    {tarefas.map((tarefa) => {
                        return <Card key={tarefa.id} className="mb-2">
                            <Card.Body>
                                <Card.Title>{tarefa.titulo}</Card.Title>
                                <Card.Text>{tarefa.descricao}</Card.Text>
                                <Card.Text>Data limite: {tarefa.data}</Card.Text>
                                <div className="mb-2">
                                    {tarefa.completa ? <Badge bg='success'>Tarefa concluída</Badge> : <Badge bg='warning'>Tarefa pendente</Badge>
                                    }
                                    <Badge bg={categoriaCores[tarefa.categoria] || 'secondary'}>
                                        {tarefa.categoria}
                                    </Badge>
                                </div>
                                <div className="ms-2 g-3">
                                    <Button variant='dark'>Editar</Button>
                                    <Button variant='danger'>Excluir</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    })}
                </section> : <Loader />}

                <Link to='/tarefas/adicionar'>
                    <Button variant='dark'>Adicionar tarefa</Button>
                </Link>

            </Container>

        </main>
    );
}

export default Tarefas;
