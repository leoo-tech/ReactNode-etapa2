import './CardAluno.css';

function CardAluno(props) {
    const media = parseFloat(props.media);
    const status = media >= 7 ? 'Aprovado!' : 'Reprovado!';
    const statusClass = media >= 7 ? 'aprovado' : 'reprovado';

    return (
        <div className={`card-aluno ${statusClass}`}>
            <h3>{props.nome}</h3>
            <img src={props.imagem} alt={props.legenda} className='foto-aluno' />
            <p>Série: {props.serie}</p>
            <p>Média: {media}</p>
            <p className="status">{status}</p>
        </div>
    );
}

export default CardAluno;
