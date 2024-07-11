import Card from './Card';
import './styles/Galeria.css';


const gatosAdocao = [
    { cod: 1, nome: "Alex", genero: "macho", corOlhos: "Verdes", cor: "Branco", tipoPelagem: "Pelagem Curta", foto: "gatoalex.jpg" },
    { cod: 2, nome: "Líder", genero: "macho", corOlhos: "Verdes", cor: "Tigrado e branco", tipoPelagem: "Pelagem Curta", foto: "gatolider.jpg" },
    { cod: 3, nome: "Cuscuz", genero: "macho", corOlhos: "Verdes", cor: "Branco", tipoPelagem: "Pelagem Longa", foto: "gatocuscuz.jpg" },
]


function Galeria() {

    const cardsGatos = gatosAdocao.map((gato) => {
        return (
            <Card
                key={gato.cod}
                nome={gato.nome}
                foto={gato.foto}
                genero={gato.genero}
                corOlhos={gato.corOlhos}
                cor={gato.cor}
                tipoPelagem={gato.tipoPelagem}
            />
        );
    });

    return (
        <section className='cardsGatos'>
            {cardsGatos}
        </section>
    );
}

export default Galeria;