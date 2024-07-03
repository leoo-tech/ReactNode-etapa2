import "./Postagem.css";
function Postagem(props) {
  return (
    <div className="postagem">
      <h3 className="postagem-titulo">{props.titulo}</h3>
      <img src={props.linkImagem} alt={props.legenda} />
      <p>{props.desc}</p>
      <small>Escrito por: {props.nomeAutor}</small>
    </div>
  );
}

export default Postagem;
