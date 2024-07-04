import "./Mensagem.css";

const textoTitulo = "Aprendendo React";
const nomeAutor = "Arda Guler";
const linkImagem = "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png";

function Mensagem() {
  return (
    <section className="mensagem-corpo">
      <h2>{textoTitulo}</h2>
      <p>Por: {nomeAutor}</p>
      <img src={linkImagem} alt={textoTitulo} width={100} />
    </section>
  )
}

export default Mensagem;