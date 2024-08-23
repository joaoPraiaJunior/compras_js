

const excluirItens = (liDaLista, botaoExcluir) => {
    botaoExcluir.addEventListener('click', function () {
        const confirmaExclusao = confirm('Deseja realmente excluir este item da lista?');

        if (confirmaExclusao) {
            liDaLista.remove();
        }

        console.log(liDaLista.parentElement.children.length);

    });
};


export { excluirItens };
