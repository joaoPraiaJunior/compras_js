
import verificaListaVazia from './verificaListaVazia.js';

const excluirItens = (liDaLista, botaoExcluir) => {

    botaoExcluir.addEventListener('click', function () {
        const confirmaExclusao = confirm('Deseja realmente excluir este item da lista?');

        if (confirmaExclusao) {
            liDaLista.remove();
            verificaListaVazia(liDaLista.closest('[data-js="lista-de-compras"]'));
        }
    });
};


export { excluirItens };
