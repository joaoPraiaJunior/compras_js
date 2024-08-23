import mensagemListaVazia from "./mensagemListaVazia";


const excluirItens = (liDaLista, botaoExcluir) => {

    botaoExcluir.addEventListener('click', function () {
        mensagemListaVazia(liDaLista.closest('[data-js="lista-de-compras"]'));
        const confirmaExclusao = confirm('Deseja realmente excluir este item da lista?');

        if (confirmaExclusao) {
            liDaLista.remove();
        }

    });
};


export { excluirItens };
