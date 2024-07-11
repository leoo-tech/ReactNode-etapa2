import { Button } from "react-bootstrap";

export default function NovaTarefa() {
  return (
    <main>
      <form className="form-section">
        <h1>Adicionar Tarefa</h1>
        <hr />

        <div>
          <label htmlFor="titulo">Título</label>
          <input type="text" id="titulo" className="form-control" />
        </div>

        <div>
          <label htmlFor="descricao">Descrição</label>
          <textarea id="descricao" className="form-control" rows="3"></textarea>
        </div>

        <div>
          <label htmlFor="data">Prazo</label>
          <input type="date" id="data" className="form-control" />
        </div>

        <div>
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria" className="form-control">
            <option value="estudos">Estudos</option>
            <option value="trabalho">Trabalho</option>
            <option value="projetos">Projetos</option>
            <option value="lazer">Lazer</option>
            <option value="outros">Outros</option>
          </select>
        </div>

        <div>
          <label htmlFor="prioridade">Prioridade</label>
          <select id="prioridade" className="form-control">
            <option value="baixa">Baixa</option>
            <option value="media">Média</option>
            <option value="alta">Alta</option>
          </select>
        </div>

        <div className="form-check">
          <input type="checkbox" id="concluida" className="form-check-input" />
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
