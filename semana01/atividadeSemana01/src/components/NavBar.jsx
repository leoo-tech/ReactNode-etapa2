import "./NavBar.css";
// renderização condicional
// props.logado ? props.nomeUser : "Visitante"
// props.logado ? "Sair" : "Entrar"
// props.logado ? "Perfil" : "Login"

// operador &&
// ternário
// AND (&&) *
// console.log(true && true) // true
// console.log(true && true) // false
// console.log(true && true && false) // false
// console.log(false && true) // false


function NavBar(props) {
  const handleLogoutClick = (event) => {
    event.preventDefault();
    props.toggleLogin();
  };

  // let mensagem;
  // if (props.logado) {
  //   mensagem = `olá, ${props.nomeUser}`;
  // } else {
  //   mensagem = "Welcome, Stranger!";
  // }
  return (
    <header>
      <hr />
      {props.logado && <img width="25" src="https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-1024x1024.png" />}
      <h2>
        {props.logado ?
          `OLÁ, ${props.nomeUser}`
          :
          "Bem-vindo, Estranho!"
        }
      </h2>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Postagem</a></li>
          {props.logado && <li><a href="#">Perfil</a></li>}
          <li>
            <a href="" onClick={handleLogoutClick}>
              {props.logado ? "Sair" : "Entrar"}
            </a>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  )

}

export default NavBar;
