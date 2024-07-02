import "./Mensagem.css";
function Mensagem() {
    const textoTitulo = "KitKat supremacy"
  const nomeAutor = "Fabio Carille";
  const linkImagem = "https://picsum.photos/200/300";
    return (
        <section className="mensagem-corpo">
            <h2 className="mensagem-titulo">{textoTitulo.toUpperCase()}</h2>
            <img src={linkImagem} alt="imagem da mensagem" />
            <p className="paragrafo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, quis.</p>
            <small>criado por: {nomeAutor}</small>
        </section>
)}

export default Mensagem;