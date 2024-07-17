import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { getTarefa, updateTarefa } from "../firebase/tarefas";
import { useEffect } from "react";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { Navigate } from "react-router-dom";

function EditarTarefa() {
    // extrair o id na rota dinamica
    const { id } = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset // função para resetar o formulário
    } = useForm();
    const usuario = useContext(UsuarioContext);
    const navigate = useNavigate();

    function carregarDado() {
        // carregar os dados da tarefa
        // preencher os campos do formulário
        getTarefa(id).then((tarefa) => {
            if (tarefa) {
                reset(tarefa);
            }
            else {
                navigate("/tarefas");
            }
        });
    }

    function atualizarTarefa(data) {
        // atualizar a tarefa
        // exibir um toast de sucesso
        updateTarefa(id, data).then(() => {
            toast.success('Tarefa atualizada com sucesso!');
            navigate('/tarefas');
        });

    }

    useEffect(() => {
        carregarDado();
    }, []);

    // se o usuario for nulo, vai pra outra pagina
    if (!usuario.usuarioLogado) {
        return <Navigate to='/login' />;
    }

    return (
        <main>
            <form className="form-section gap-2 py-2 d-grid" onSubmit={handleSubmit(atualizarTarefa)} >
                <h1>Editar tarefa</h1>
                <hr />
                <div>
                    <label htmlFor="titulo">Título</label>
                    <input
                        type="text"
                        id="titulo"
                        className="form-control"
                        {...register("titulo", { required: true, maxLength: 200 })}
                    />
                    {errors.titulo && (
                        <small className="invalid">O título é inválido!</small>
                    )}
                </div>
                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <textarea
                        id="descricao"
                        className="form-control"
                        {...register("descricao", { required: true })}
                    ></textarea>
                    {errors.descricao && (
                        <small className="invalid">A descrição é inválida!</small>
                    )}
                </div>
                <div>
                    <label htmlFor="dataConclusao">Prazo</label>
                    <input
                        type="date"
                        id="dataConclusao"
                        className="form-control"
                        {...register("dataConclusao", { required: true })}
                    />
                </div>
                <div className="form-check">
                    <input
                        type="checkbox"
                        id="concluido"
                        className="form-check-input"
                        {...register("concluido")}
                    />
                    <label htmlFor="concluido" className="form-check-label">
                        Concluído?
                    </label>
                </div>
                <div>
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        id="categoria"
                        className="form-select"
                        {...register("categoria")}
                    >
                        <option value="trabalho">Trabalho</option>
                        <option value="estudos">Estudos</option>
                        <option value="projetos">Projetos</option>
                        <option value="lazer">Lazer</option>
                        <option value="outros">Outros</option>
                    </select>
                </div>
                <Button type="submit" variant="outline-dark">
                    Atualizar tarefa
                </Button>
            </form>
        </main>
    );
}

export default EditarTarefa;