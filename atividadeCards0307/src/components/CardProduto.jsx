import './CardProduto.css';

function CardProduto(props) {
    // Correção: Extrair preco e desconto das props
    const { preco, desconto } = props;

    const valorDesconto = (preco * desconto) / 100;
    const precoFinal = preco - valorDesconto;

    return (
        <div className="card-produto">
            <h3>{props.nome}</h3>
            <img src={props.imagem} alt={props.legenda} className='imagem-produto' />
            {desconto > 0 && (
                <div className="preco-desconto">
                    <p className="desconto">{desconto}% off!</p>
                    <p className="preco-original">R$ {preco.toFixed(2)}</p>
                    <p className="preco-final">R$ {precoFinal.toFixed(2)}</p>
                </div>
            )}
            {desconto === 0 && (
                <p>R$ {preco.toFixed(2)}</p>
            )}
        </div>
    );
}

export default CardProduto;