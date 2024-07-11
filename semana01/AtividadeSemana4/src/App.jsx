import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";
import Footer from "./components/Footer";
import './App.css';

/* 1. Estado de Login no Componente Principal (App.jsx):

Em vez de gerenciar o estado de login no Navbar, vamos centralizar essa informação no componente pai (App.jsx). Isso facilita o compartilhamento do estado entre diferentes componentes, caso necessário. */


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nomeUser, setNomeUser] = useState(''); // Estado para o nome do usuário

  const handleLogin = (nome) => {
    if (nome.trim() !== ''){
    setIsLoggedIn(true);
    setNomeUser(nome); // Define o nome do usuário ao fazer login
    alert(`Bem vindo(a), ${nome}! Aqui você irá acessar seu processo de adoção`);
  } else {
    alert('Por favor, digite seu nome para entrar');
  }
};

  const handleLogout = () => {
    setIsLoggedIn(false);
    setNomeUser(''); // Limpa o nome do usuário ao fazer logout
    alert("Você saiu da sua conta");
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} nomeUser={nomeUser} handleLogin={handleLogin} handleLogout={handleLogout} />
      <Banner />
      <Galeria />
      <Footer />
    </>
  )
}

export default App

/* Funcionamento:

O estado isLoggedIn começa como false (usuário não logado).

Ao clicar em "Entrar", a função handleLogin no App é chamada, definindo isLoggedIn para true e o nome do usuário.

O Navbar re-renderiza, mostrando a mensagem de boas-vindas e o link "Perfil".

Ao clicar em "Logout", handleLogout é chamado, definindo isLoggedIn para false e limpando o nome do usuário.

O Navbar atualiza novamente, exibindo a mensagem de não logado. */