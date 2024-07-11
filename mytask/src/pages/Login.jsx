import { Button } from "react-bootstrap"; // importando o componente Button do react-bootstrap
import { useForm } from "react-hook-form"; // importando o hook useForm do react-hook-form

function Login() {
  const { register, handleSubmit } = useForm(); // desestruturando o objeto retornado pelo hook useForm

  function entrar(data) {
    console.log("Formulário submetido");
    console.log(data);
  }

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(entrar)}>
        <h1 className="text-center">Login</h1>
        <hr />
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
        <Button variant="outline-dark" className="mt-1 w-100" type="submit">
          Entrar
        </Button>
        <Button variant="outline-danger" className="mt-1 w-100" type="button">
          Entrar com o Google
        </Button>
      </form>
    </main>
  );
}

export default Login;
