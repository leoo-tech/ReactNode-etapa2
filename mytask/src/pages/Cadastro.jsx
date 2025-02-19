import { Button } from "react-bootstrap"; // importando o componente Button do react-bootstrap
import { useForm } from "react-hook-form"; // importando o hook useForm do react-hook-form
import { cadastrarUsuario, entrarGoogle } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; // importando o toast do react-hot-toast

export default function Cadastro() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // desestruturando o objeto retornado pelo hook useForm

  function cadastrar({ nome, email, senha }) {
    cadastrarUsuario(nome, email, senha)
      .then(() => {
        toast.success(`Bem-vindo, ${nome}!`);
        navigate("/tarefas");
      })
      .catch((error) => {
        toast.error("Email e/ou Senha incorreta!", error, { duration: 2000 });
      });
  }

  function handleEntrarGoogle({}) {
    entrarGoogle().then(() => {
      toast.success("Bem-vindo!");
      navigate("/tarefas");
    })
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
          {errors.nome && <small className="invalid">Nome inválido!</small>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors.email && <small className="invalid">email inválido</small>}
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            className="form-control"
            {...register("senha", { required: true, minLength: 6 })}
          />
          {errors.senha && errors.senha.type === "required" && (
            <small className="invalid">Senha obrigatória!</small>
          )}
          {errors.senha && errors.senha.type === "minLength" && (
            <small className="invalid">
              A senha deve ter no mínimo 6 caracteres!
            </small>
          )}
        </div>

        <div className="mt-2">
          <Button
            className="w-100"
            variant="outline-dark" type="submit">
            Cadastrar
          </Button>
          <Button
            className="mt-2 w-100"
            onClick={handleEntrarGoogle}
            variant="outline-danger" type="button">
            Cadastrar com o Google
          </Button>
        </div>
      </form>
    </main>
  );
}
