import React, { useState } from 'react';
import './styles/Navbar.css';
import Button from './Button'; // Corrigido para importar o arquivo Button corretamente

/* 2. Atualização do Componente Navbar:

Agora, o Navbar receberá as props isLoggedIn, nomeUser, handleLogin e handleLogout do componente App. */

function Navbar({ isLoggedIn, nomeUser, handleLogin, handleLogout }) {
    const [inputNome, setInputNome] = useState(''); // Estado para o input de nome

    return (

        <header className='navbar'>
            <div className="logo-container">
                <img src="/logo-gatopoles.png" alt="Logo da Gatopoles" className="logo" />
            </div>

            <h3>
                {isLoggedIn &&
                    `Olá, ${nomeUser}!`
                }
            </h3>

            <ul className="nav-links">
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Apadrinhe</a></li>
                <li><a href="#"><strong>Adote</strong></a></li>
                {isLoggedIn && <li><a href="#">Perfil</a></li>}
            </ul>

            <div className="login-container">
                {!isLoggedIn && ( // Exibe o input apenas se não estiver logado
                    <input
                        type="text"
                        placeholder="Digite seu nome"
                        value={inputNome}
                        onChange={(e) => setInputNome(e.target.value)}
                        className='input-nome'
                    />
                )}
                <Button
                    text={isLoggedIn ? "Sair" : "Entrar"}
                    onClick={isLoggedIn ? handleLogout : () => handleLogin(inputNome)} // Passa o nome ao fazer login
                />
            </div>
        </header>
    );
}
export default Navbar;

/* O usuário digita algo no input.
O evento onChange é disparado.
A função de seta é executada, recebendo o evento (e).
A função obtém o novo valor do input (e.target.value).
A função setInputNome é chamada para atualizar o estado inputNome com o novo valor.
O componente React é re-renderizado, exibindo o novo valor no input.
Exemplo:

Se o usuário digitar "Maria" no input, o evento onChange será acionado. A função de seta obterá o valor "Maria" e o passará para setInputNome, que atualizará o estado inputNome para "Maria". O input então exibirá o texto "Maria". */