// jsx => Javascript Extended
// Vai permitir escrever código "HTML"
// dentro do js
// Declarativa

// Componente principal da aplicação
import Titulo from "./components/Titulo";
import Mensagem from "./components/Mensagem";
function App() {

    return (
       <main>
        <Titulo />
        <Mensagem />
        <Mensagem />
        <Mensagem />
       </main>
    );
}

export default App;