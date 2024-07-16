import { Badge, Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { deleteTarefa, getTarefas } from "../firebase/tarefas";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

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

    const navigate = useNavigate();

    function carregarDados() {
        // then devolve a lista de tarefas da coleção
        getTarefas().then((tarefas) => {
            setTarefas(tarefas);
        });
    }

    function formatarData(dataString) {
        // Extrai ano  mês e dia da string de data assumindo formato 'YYYY-MM-DD'
        const [ano, mes, dia] = dataString.split('-').map(num => parseInt(num, 10));

        // Cria uma data no fuso horário local
        const data = new Date();
        data.setFullYear(ano, mes - 1, dia); // Ajusta mês porque Date() usa índice 0 para janeiro
        data.setHours(0, 0, 0, 0); // Zera a hora para evitar problemas com mudança de dia devido a horas
        // Formata a data para o formato local desejado
        return data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }

    function deletarTarefa(id) {
        // deletar a tarefa
        // atualizar a lista de tarefas
        // exibir um toast de sucesso
        const deletar = confirm('Deseja realmente deletar a tarefa?');

        if (deletar) {
            // deletar a tarefa
            // atualizar a lista de tarefas
            // exibir um toast de sucesso
            deleteTarefa(id).then(() => {
                toast.success('Tarefa deletada com sucesso!');
                carregarDados();
            }
            );
        }
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
                <Link to='/tarefas/adicionar'>
                    <Button variant='dark'>Adicionar tarefa</Button>
                </Link>
                {tarefas ? <section className="mt-2">
                    {tarefas.map((tarefa) => {
                        return <Card key={tarefa.id} className="mb-2">
                            <Card.Body>
                                <Card.Title>{tarefa.titulo}</Card.Title>
                                <Card.Text>{tarefa.descricao}</Card.Text>
                                <div className="mb-2">
                                    {tarefa.concluido ? <Badge bg='success'>Tarefa concluída</Badge> : <Badge bg='warning'>Tarefa pendente</Badge>
                                    }
                                    <Badge className="ms-2" bg={categoriaCores[tarefa.categoria] || 'secondary'}>
                                        {tarefa.categoria}
                                    </Badge>
                                    {/* data de conclusao */}
                                    {tarefa.dataConclusao ? (
                                        <Badge className="ms-2" bg='info'>{formatarData(tarefa.dataConclusao)}</Badge>
                                    ) : (
                                        <Badge className="ms-2" bg='secondary'>Data não informada</Badge>
                                    )}
                                </div>
                                <div className="ms-2">
                                    <Button className="me-2" variant='outline-dark' onClick={() => {
                                        navigate(`/tarefas/editar/${tarefa.id}`);
                                    }}>Editar</Button>
                                    <Button variant='outline-danger' onClick={() => deletarTarefa(tarefa.id)}>Excluir</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    })}
                </section> : <Loader />}

            </Container>

        </main>
    );
}

export default Tarefas;
