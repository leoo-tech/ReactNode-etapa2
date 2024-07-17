import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addTarefa } from "../firebase/tarefas";
import toast from "react-hot-toast";
import { useNavigate, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

export default function NovaTarefa() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const usuario = useContext(UsuarioContext);
  const navigate = useNavigate();

  function salvarTarefa(data) {
    data.idUsuario = usuario.usuarioLogado.uid;

    addTarefa(data).then(() => {
      toast.success("Tarefa adicionada com sucesso!");
      // redirecionar para a página de tarefas após adicionar a tarefa
      navigate("/tarefas");
    })
      .catch((error) => {
        toast.error("Erro ao adicionar tarefa");
        console.error(error);
      });
  }

  // se o usuario for nulo, vai pra outra pagina
  if (!usuario.usuarioLogado) {
    return <Navigate to='/login' />;
  }

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(salvarTarefa)}>
        <h1>Adicionar Tarefa</h1>
        <hr />

        <div>
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            className={`form-control ${errors.titulo ? 'is-invalid' : ''}`}
            {...register("titulo", {
              required: "O título é obrigatório",
              minLength: {
                value: 5,
                message: "O título deve ter no mínimo 5 caracteres",
              },
              maxLength: {
                value: 20,
                message: "O título deve ter no máximo 20 caracteres",
              },
            })}
          />
          {errors.titulo && <small className="invalid">{errors.titulo.message}</small>}
        </div>

        <div>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            className="form-control"
            rows="3"
            {...register("descricao", {
              required: true,
              minLength: 10,
              maxLength: 200,
              message: "A descrição deve ter entre 10 e 200 caracteres",
            })}
          ></textarea>
          {errors.descricao && (
            <small className="invalid">A descrição deve ter entre 10 e 200 caracteres</small>
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

        <div>
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            className="form-control"
            {...register("categoria", { required: true })}
          >
            <option value="estudos">Estudos</option>
            <option value="trabalho">Trabalho</option>
            <option value="projetos">Projetos</option>
            <option value="lazer">Lazer</option>
            <option value="outros">Outros</option>
          </select>
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            id="concluido"
            className="form-check-input"
            {...register("concluido")}
          />
          <label htmlFor="concluido" className="form-check-label">
            Concluída?
          </label>
        </div>

        <Button variant="outline-dark" className="mt-1 w-100" type="submit">
          Adicionar
        </Button>
      </form>
    </main>
  );
}
