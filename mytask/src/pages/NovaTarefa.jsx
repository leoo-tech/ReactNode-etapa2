import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addTarefa } from "../firebase/tarefas";
import toast from "react-hot-toast";
import { Link } from 'react-router-dom';

export default function NovaTarefa() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function salvarTarefa(data) {

    addTarefa(data).then(() => {
      toast.success("Tarefa adicionada com sucesso!");
      // redirecionar para a página de tarefas após adicionar a tarefa
    })
      .catch((error) => {
        toast.error("Erro ao adicionar tarefa");
        console.error(error);
      });
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
            className="form-control"
            {...register("titulo", {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
          />
          {errors.titulo && <small className="invalid">minimo de 5 caracteres!</small>}
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
            {...register("data", { required: true })}
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
            id="concluida"
            className="form-check-input"
            {...register("concluida")}
          />
          <label htmlFor="concluida" className="form-check-label">
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
