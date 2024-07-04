// jsx => Javascript Extended
// Vai permitir escrever código "HTML"
// dentro do js
// Declarativa

// Componente principal da aplicação
import Titulo from "./components/Titulo";
import Mensagem from "./components/Mensagem";
import Footer from "./components/Footer";

function App() {

    return (
        <main>
            <Titulo />
            <Mensagem />
            <Footer />
        </main>
    );
}

export default App;