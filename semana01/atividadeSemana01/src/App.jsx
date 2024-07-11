import React, { useState } from "react";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  const [logado, setLogado] = useState(false);
  const toggleLogin = () => {
    setLogado(!logado);
  }
  return (
    <>
      <main>
        <NavBar logado={logado} nomeUser="Batista" toggleLogin={toggleLogin} />
        <Blog />
        <Footer />
      </main>
    </>
  );
}

export default App;
