/* 2. Crie um componente ConversorTemperatura, que converte o valor do input de celsius e mostra na tela a conversão para Fahrenheit. F = C x 1.8 + 32 ao clicar no botão de converter. */

import { useState } from "react";
import React from "react";
import "../css/ConversorTemp.css";

export default function ConversorTemp() {

    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);

    function converter() {
        setFahrenheit(celsius * 1.8 + 32);
    }

    return (
        <section className="conversor">
            <h3>Conversor de Temperatura</h3>
            <input type="number" value={celsius} onChange={(e) => setCelsius(e.target.value)} />
            <button onClick={converter}>Converter</button>
            <div className="result">
                <p>graus em celsius: {celsius} C°</p>
                <p>graus em fahrenheit: {fahrenheit} °F</p>
            </div>
        </section>
    );

}
