import criarItemDaLista from './criarItemDaLista.js';


function adicionarItemDeCompra(evento, contadorDeItens) {

    const elementos = {
        formCompras: '[data-js="form-compras"]',
        inputDoItem: '[data-js="input-do-item"]',
        listaDeCompras: '[data-js="lista-de-compras"]',
    }

    const inputDoItem = document.querySelector(elementos.inputDoItem);
    const listaDeCompras = document.querySelector(elementos.listaDeCompras);

    evento.preventDefault();
    const itemDeCompra = inputDoItem.value;
    inputDoItem.value = '';
    listaDeCompras.appendChild(criarItemDaLista(itemDeCompra, contadorDeItens));
}

export default adicionarItemDeCompra;
