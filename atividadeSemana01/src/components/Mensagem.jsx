import "./Mensagem.css";

function Mensagem(props) {
  return (
    <div className="mensagem-corpo">
      <h3 className="mensagem-titulo">{props.textoTitulo.toUpperCase()}</h3>
      <img src={props.linkImagem} alt={props.legenda} />
      <p className="paragrafo">
        {props.textoMensagem}
      </p>
    </div>
  );
}

export default Mensagem;
