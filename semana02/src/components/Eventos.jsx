// manipulador de eventos (handleClick) e eventos (onClick, onMouseDown
// confirm e alert são funções do javascript que exibem mensagens de confirmação e alerta, respectivamente.
// confirm exibe uma caixa de diálogo com botões de OK e Cancelar.
// alert exibe uma caixa de diálogo com um botão de OK.
// o evento onClick é acionado quando o usuário clica no elemento.
// o evento onMouseDown é acionado quando o usuário pressiona o botão do mouse.

export default function Eventos() {

    // manipulador de eventos
    function handleClick() {
        confirm('Deseja realmente excluir?');
        alert('Excluído com sucesso!');
    }


    return (
        <section>
            <button type="button" onClick={handleClick}>Clique Aqui!</button>
            <button onClick={() => {
                confirm('Deseja realmente excluir?');
                alert('para com isso!');
            }}>Novamente!</button>
            <h1 onMouseDown={() => {
                alert('pronto, agora vc clicou!');

            }}>clica aqui tbm...</h1>
        </section>
    )
}

