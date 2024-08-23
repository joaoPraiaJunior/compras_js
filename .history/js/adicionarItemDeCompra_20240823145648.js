function adicionarItemDeCompra(evento) {

    const elementos = {
        formCompras: '[data-js="form-compras"]',
        inputDoItem: '[data-js="input-do-item"]',
        listaDeCompras: '[data-js="lista-de-compras"]',
    }

    evento.preventDefault();
    const itemDeCompra = inputDoItem.value;
    inputDoItem.value = '';
    contadorDeItens++;
    listaDeCompras.appendChild(criarItemDaLista(itemDeCompra));
}
