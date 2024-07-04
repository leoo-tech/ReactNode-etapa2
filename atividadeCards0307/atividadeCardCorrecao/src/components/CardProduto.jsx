import './CardProduto.css'

function CardProduto(props) {
    const valorDesconto = props.precoUnitario - props.precoUnitario * (props.desconto / 100);
    return (
        <article className='card-produto'>
            <p>{props.nome}</p>
            {props.desconto > 0 && <p className='grifado'>R$ {props.precoUnitario}</p>}
            {props.desconto > 0 ? <h4>{valorDesconto.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h4> : <h4>{props.precoUnitario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h4>}
            {props.desconto > 0 && <p className='desconto'>Desconto de {props.desconto}% OFF!</p>}
        </article>
    )
}

export default CardProduto;