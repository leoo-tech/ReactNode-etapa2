import Postagem from "./Postagem";
import "./Blog.css";
import Mensagem from "./Mensagem";
function Blog() {
  return (
    <div className="blog">
      <h2>Posts do dia</h2>
      <Postagem
        titulo="Porque você deveria ouvir: The Killers"
        desc="Descrição da postagem 1"
        linkImagem="https://picsum.photos/200"
        legenda="Imagem 1"
        nomeAutor="Claire Redfield"
      />
      <Postagem
        titulo="Porque você deveria ouvir: Maneskin"
        desc="Descrição da postagem 1"
        linkImagem="https://picsum.photos/200"
        legenda="Imagem 1"
        nomeAutor="Claire Redfield"
      />
      <Mensagem
        textoTitulo="Hoje tem Mengão!"
        textoMensagem="Vencer é bom, vencer o Minusculo-MG é melhor ainda!"
        linkImagem="https://picsum.photos/200"
        legenda="Imagem 2"
      />
    </div>
  );
}

export default Blog;
