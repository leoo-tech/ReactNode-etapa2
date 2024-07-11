/* 1. Crie um componente Post que possui um titulo e uma descrição. Ao clicar no botão de curtir deve aparecer no componente que o post está curtido, e ao clicar novamente no botão ele faz a ação de "descurtir" o post. Dica: o estado alterna entre true e false. */

import { useState } from "react";
import React from "react";
import '../css/Posts.css';

export default function Post({ titulo, descricao }) {

    const [curtido, setCurtido] = useState(false);
    const [amei, setAmei] = useState(false);

    function curtir() {
        setCurtido(!curtido);
    }

    function amar() {
        setAmei(!amei);
    }


    return (
        <section className="posts">

            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <button onClick={curtir}>{curtido ? "Descurtir😒" : "Curtir😘"}</button>
            <button onClick={amar}>{amei ? "💩" : "❤️"}</button>

            <p className={curtido ? 'like' : 'dislike'}>{curtido ? "Curtido" : "Descurtido"}</p>
            <p className={amei ? 'like' : 'dislike'}>{amei ? "Amei" : "Desamei"}</p>


            <hr />
        </section>
    );

}

