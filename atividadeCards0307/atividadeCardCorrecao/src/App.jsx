import CardAluno from "./components/CardAluno";
import CardProduto from "./components/CardProduto";
import './index.css';

function App() {
  return (
    <div className="container">
      <main className="card-container">
        <CardAluno
          nome="João"
          serie="9º ano"
          media={8}
        />

        <CardAluno
          nome="Maria"
          serie="8º ano"
          media={5}
        />
        <CardProduto
          nome="Camiseta"
          precoUnitario={200}
          desconto={85}
        />

        <CardProduto
          nome="Tênis"
          precoUnitario={350}
          desconto={35}
        />
        <CardProduto
          nome="Playstation 5"
          precoUnitario={3500}
          desconto={45}
        />
        <CardProduto
          nome="Camisa Seleção Brasileira"
          precoUnitario={350}
          desconto={55}
        />

      </main>
    </div>
  );
}

export default App;