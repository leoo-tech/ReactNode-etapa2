import CardAluno from "./CardAluno";
import CardProduto from "./CardProduto";
import './CardUnido.css';

function CardUnido() {
    return (
        <div className="container">
            <main className="card-container">
                <CardAluno
                    nome="João"
                    serie="9º ano"
                    media={8.5}
                    imagem="https://cdn.unasp.br/blog/wp-content/uploads/2018/08/shutterstock_329800397-e1534265413437.jpg"
                    legenda="Foto do João"
                />
                <CardProduto
                    nome="Camiseta"
                    preco={25.00}
                    desconto={10}
                    imagem="https://img.ltwebstatic.com/images3_spmp/2023/10/26/c5/1698297474d2cd0826a8fa5e1bd56e9795bb77b873_thumbnail_720x.webp"
                    legenda="Camiseta branca"
                />
            </main>
        </div>
    );
}

export default CardUnido;