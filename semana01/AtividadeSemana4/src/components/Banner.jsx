import './styles/Banner.css';
function Banner(){
    return(
        <section className="banner-container">
        <img src="/banner.png" alt="Banner do site: gato laranja deitado" className="imagem-banner"/>
        <h1 className="banner-text">Seu novo melhor amigo está aqui!</h1>
        </section>
    )
}

export default Banner;