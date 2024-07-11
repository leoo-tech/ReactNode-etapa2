export default function Cadastro() {
    return (
        <div>
            <h1>Cadastro</h1>
            <form>
                <label htmlFor="name">
                    Nome
                    <input type="text" id="name" />
                </label>
                <label htmlFor="email">
                    Email
                    <input type="email" id="email" />
                </label>
                <label htmlFor="password">
                    Senha
                    <input type="password" id="password" />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

