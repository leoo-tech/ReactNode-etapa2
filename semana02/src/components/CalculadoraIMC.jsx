import { useState } from "react";

export default function CalculadoraIMC() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(0);

    // Dentro do evento tem informações sobre o input
    function handlePeso(evento) {
        const input = evento.target;
        // Pega o valor dentro do input
        const valor = input.value;

        setPeso(valor);
    }

    function handleAltura(evento) {
        const input = evento.target;
        const valor = input.value;

        setAltura(valor);
    }

    function calcular() {
        const imc = peso / (altura * altura);
        setImc(imc);
    }

    return (
        <section>
            <h3>Calculadora IMC</h3>
            <input
                type="number"
                placeholder="Digite seu peso"
                onChange={handlePeso}
            />
            <input
                type="number"
                placeholder="Digite sua altura"
                onChange={handleAltura}
            />
            <p>peso: {peso}</p>
            <p>altura: {altura}</p>
            <br />
            <button onClick={calcular}>Calcular</button>
            <hr />
            <h3>IMC: {imc.toFixed(2)}</h3>
        </section>
    );
}