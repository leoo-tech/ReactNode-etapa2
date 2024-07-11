import './styles/Card.css';

function Card({ nome, foto, genero, corOlhos, cor, tipoPelagem }) {
    return (
        <article className='card'>
            <img src={foto} alt="Foto do gato" width={200} />
            <h3>{nome}</h3>
            <p>Gênero: {genero}</p>
            <p>Cor dos olhos: {corOlhos}</p>
            <p>Cor: {cor}</p>
            <p>Tipo de pelagem: {tipoPelagem}</p>

        </article>
    );
}

export default Card;