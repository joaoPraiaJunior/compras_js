
const excluirItens = (liDaLista, botaoExcluir) => {
    const confirmaExclusao = confirm('Deseja realmente excluir este item da lista?');

    botaoExcluir.addEventListener('click', function () {
        if (confirmaExclusao) {
            liDaLista.remove();
        }
    });
};


export { excluirItens };
