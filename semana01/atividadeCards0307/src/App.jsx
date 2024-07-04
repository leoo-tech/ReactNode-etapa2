import CardUnido from "./components/CardUnido";
import Footer from "./components/Footer";
import './index.css';

function App() {
    return (
        <div className="container">
            <main className="card-container">
                <CardUnido />
            </main>
            <Footer />
        </div>
    );
}

export default App;
