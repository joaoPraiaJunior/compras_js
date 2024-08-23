import verificarListaVazia from './verificarListaVazia.js';

const excluirItens = (liDaLista, botaoExcluir) => {

    const elementos = {
        listaDeCompras: '[data-js="lista-de-compras"]',
    }

    const listaDeCompras = document.querySelector(elementos.listaDeCompras);

    botaoExcluir.addEventListener('click', function () {
        const confirmaExclusao = confirm('Deseja realmente excluir este item da lista?');

        if (confirmaExclusao) {
            liDaLista.remove();
        }

        verificarListaVazia(listaDeCompras);

    });
};


export { excluirItens };
