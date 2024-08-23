import mensagemListaVazia from './mensagemListaVazia.js';

const excluirItem = (liDaLista, botaoExcluir) => {

    const elementos = {
        listaDeCompras: '[data-js="lista-de-compras"]',
    }

    const listaDeCompras = document.querySelector(elementos.listaDeCompras);

    botaoExcluir.addEventListener('click', function () {
        const confirmaExclusao = confirm('Deseja realmente excluir este item da lista?');

        if (confirmaExclusao) {
            liDaLista.remove();
        }

        mensagemListaVazia(listaDeCompras);

    });
};


export { excluirItem };
