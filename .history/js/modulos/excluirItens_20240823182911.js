

const excluirItens = (liDaLista, botaoExcluir) => {

    botaoExcluir.addEventListener('click', function () {
        console.log(liDaLista);
        const confirmaExclusao = confirm('Deseja realmente excluir este item da lista?');

        if (confirmaExclusao) {
            liDaLista.remove();
        }

    });
};


export { excluirItens };
