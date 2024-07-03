import Blog from "./components/Blog";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <main>
        <NavBar logado={true} nomeUser="Batista" />
        <Blog />
        <Footer />
      </main>
    </>
  );
}

export default App;
