import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <p>Desenvolvido por: Leonardo</p>
            <p>&copy;React Bootstrap - 2024</p>
            <Link style={{textDecoration:'none', color:'whitesmoke'}} to='/privacidade'>Política de Privacidade</Link>
        </footer>

    );
}

export default Footer;