import './styles/Button.css';

/* 3. Simplificação do Componente Button:

O componente Button pode ser simplificado, já que a lógica de login/logout agora está no App */

function Button({ text, onClick }) {

  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;