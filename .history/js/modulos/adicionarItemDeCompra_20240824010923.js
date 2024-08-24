import criarItemDaLista from './criarItemDaLista.js';
import mensagemListaVazia from './mensagemListaVazia.js';

let contadorDeItens = 0;

function adicionarItemDeCompra(evento) {

    const elementos = {
        inputDoItem: '[data-js="input-do-item"]',
        listaDeCompras: '[data-js="lista-de-compras"]',
    }

    const inputDoItem = document.querySelector(elementos.inputDoItem);
    const listaDeCompras = document.getElementsByClassName('lista')[0];

    evento.preventDefault();

    const itemDeCompra = inputDoItem.value;
    inputDoItem.value = '';
    contadorDeItens++;
    listaDeCompras.appendChild(criarItemDaLista(itemDeCompra, contadorDeItens));
    mensagemListaVazia(listaDeCompras);
}

export default adicionarItemDeCompra;
