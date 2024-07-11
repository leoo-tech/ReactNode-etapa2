import { useState } from 'react';
import '../css/Contador.css';
/* para definir um estado, usamos: useState 
// useState é um hook que retorna um array com 2 elementos: o estado atual e uma função que atualiza esse estado.
// o estado inicial é 0.    
// o estado é um número inteiro.
// a função setCount é uma função que atualiza o estado.
*/

export default function Contador({ inicial = 0, final = inicial - 1 }) {
    const [count, setCount] = useState(inicial);

    return (
        <div>
            <h1 className={count % 2 === 0 ? 'par' : 'impar'}>Contador atual: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count - 1)}>Decremento</button>
            <button onClick={() => setCount(count + 100)}>centena</button>
            <button onClick={() => setCount(inicial)}>valor inicial</button>
            <button onClick={() => setCount(final)}>valor final</button>

        </div>
    )
}