import mensagemListaVazia from "./mensagemListaVazia.js";


const excluirItens = (liDaLista, botaoExcluir) => {

    botaoExcluir.addEventListener('click', function () {
        mensagemListaVazia(liDaLista.parentElement);
        const confirmaExclusao = confirm('Deseja realmente excluir este item da lista?');

        if (confirmaExclusao) {
            liDaLista.remove();
        }

    });
};


export { excluirItens };
