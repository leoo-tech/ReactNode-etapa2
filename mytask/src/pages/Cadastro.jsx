import { Button } from "react-bootstrap"; // importando o componente Button do react-bootstrap
import { useForm } from "react-hook-form"; // importando o hook useForm do react-hook-form

export default function Cadastro() {
  const { register, handleSubmit } = useForm(); // desestruturando o objeto retornado pelo hook useForm

  function cadastrar(data) {
    console.log("Formulário submetido");
    console.log(data);
  }

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(cadastrar)}>
        <h1 className="text-center">Cadastro</h1>
        <hr />
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            className="form-control"
            {...register("nome", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            className="form-control"
            {...register("senha", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="confirmar-senha">Confirmar senha</label>
          <input
            type="password"
            id="confirmar-senha"
            className="form-control"
          />
        </div>

        <div className="mt-2">
          <Button variant="outline-dark" className="mt-1 w-100" type="submit">
            Cadastrar
          </Button>
          <Button variant="outline-danger" className="mt-1 w-100" type="button">
            Cadastrar com o Google
          </Button>
        </div>
        
      </form>
    </main>
  );
}
