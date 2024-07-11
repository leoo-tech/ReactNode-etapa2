// import { useState } from 'react';
// import Contador from './components/Contador';
// import Eventos from './components/Eventos';
// import Abas from './components/Abas';
// import Carrosel from './components/Carrosel';~
// import CalculadoraIMC from './components/CalculadoraIMC';
import ConversorTemp from './components/ConversorTemp';
import Posts from './components/Posts';

function App() {

  return (
    <>
      <h1>Eventos: 08/07</h1>
      <Posts 
      titulo={"Matuto x Loira do banheiro"}
      descricao={"Consegue dizer 'não' para a loira do banheiro? e para o matuto?"}
      />
      <Posts 
      titulo={"Drift com o Titanic"}
      descricao={"Desafio da semana: fazer drift com o Titanic"}
      />
      <Posts
      titulo={"Franquia Velozes e Furiosos... no espaço?"}
      descricao={"Sim, Toretto e sua 'family' vão para o espaço. O que você acha disso?"}
      />
      <ConversorTemp />
    </>
  )
}

export default App
