function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">
          Email
          <input type="email" id="email" />
        </label>
        <label htmlFor="password">
          Senha
          <input type="password" id="password" />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
