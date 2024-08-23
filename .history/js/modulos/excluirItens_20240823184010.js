

const excluirItens = (liDaLista, botaoExcluir) => {
    console.log(liDaLista.parentNode);
    botaoExcluir.addEventListener('click', function () {
        const confirmaExclusao = confirm('Deseja realmente excluir este item da lista?');

        if (confirmaExclusao) {
            liDaLista.remove();
        }



    });
};


export { excluirItens };
