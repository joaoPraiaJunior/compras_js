import criarItemDaLista from './criarItemDaLista.js';

let contadorDeItens = 0;

function adicionarItemDeCompra(evento) {

    const elementos = {
        inputDoItem: '[data-js="input-do-item"]',
        listaDeCompras: '[data-js="lista-de-compras"]',
    }

    const inputDoItem = document.querySelector(elementos.inputDoItem);
    const listaDeCompras = document.querySelector(elementos.listaDeCompras);

    evento.preventDefault();
    const itemDeCompra = inputDoItem.value;
    inputDoItem.value = '';
    contadorDeItens++;
    listaDeCompras.appendChild(criarItemDaLista(itemDeCompra, contadorDeItens));
}

export default adicionarItemDeCompra;
