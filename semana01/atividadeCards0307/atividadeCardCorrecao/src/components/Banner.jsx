import './Banner.css';
import Imagem from '../assets/foto.jpg';

function Banner() {
    return (
        <section className="fundo-imagem">
            <img src={Imagem} alt="Banner" width={200} />
            {/* <div className="teste" style={{ backgroundImage: `url(${Imagem})` }}></div> */} <br />
            <img src="/vite.svg" alt="Logo do Vite" />
            <br />
            <img src="/foto.jpg" alt="Banner" width={150} />
            <button>Clica...</button>
        </section>
    )
}

export default Banner