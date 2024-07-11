import { useState } from "react";
import "../css/Carrosel.css";
const slides = [
    {
        imagem:
            "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        titulo: "Aproveite cada segundo",
    },
    {
        imagem:
            "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        titulo: "Respire e inspire",
    },
    {
        imagem:
            "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80",
        titulo: "Valorize a vida",
    },
    {
        imagem:
            "https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        titulo: "Esteja com quem te faz bem",
    },
];

export default function Carrosel() {
    const [index, setIndex] = useState(0);

    function handleAvanco() {
        if (index === slides.length - 1) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    };

    function handleRetrocesso() {
        if (index === 0) {
            setIndex(slides.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    };

    return (
        <section>

            <article className="imgSubtitle">
                <img src={slides[index].imagem} alt={slides[index].titulo} width={200} />
                <h3>{slides[index].titulo}</h3>
            </article>

            <div className="botoes">
                <button onClick={handleRetrocesso} >
                    Anterior ⬅️
                </button>
                <button onClick={handleAvanco} >
                    Próximo ➡️
                </button>
                {/* botao para o ultimo indice direto */}
                <button onClick={() => setIndex(slides.length - 1)} >
                    Ultimo 🚗
                </button>
                {/* botao para o primeiro indice direto */}
                <button onClick={() => setIndex(0)} >
                    Primeiro 🚕
                </button>
            </div>

            <p>Indice: {index}</p>
            <p>total de fotos vistas: {index + 1}</p>

        </section>
    )
}