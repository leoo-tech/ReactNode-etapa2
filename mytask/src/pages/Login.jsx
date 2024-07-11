import { Button } from "react-bootstrap"; // importando o componente Button do react-bootstrap
import { useForm } from "react-hook-form"; // importando o hook useForm do react-hook-form

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // desestruturando o objeto retornado pelo hook useForm

  function entrar(data) {
    // data é um objeto com os valores dos campos do formulário
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
            {...register("email", {
              required: "email obrigatorio",
              pattern: {
                value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/,
                message: "email invalido",
              },
            })}
          />
          {errors.email && (
            <small className="invalid">{errors.email.message}</small>
          )}
        </div>

        <div>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            className="form-control"
            {...register("senha", {
              required: "senha obrigatória",
              minLength: { value: 6, message: "minimo de 6 caracteres" },
              maxLength: { value: 20, message: "maximo de 20 caracteres" },
            })}
          />
        </div>

        {errors.senha && (
          <small className="invalid">{errors.senha.message}</small>
        )}

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
