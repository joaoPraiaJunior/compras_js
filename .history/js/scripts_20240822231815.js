const elementos = {
    formCompras: '[data-js="form-compras"]',
    inputDoItem: '[data-js="input-do-item"]',
}

const formCompras = document.querySelector(elementos.formCompras);
const inputDoItem = document.querySelector(elementos.inputDoItem);



function adicionarItemDeCompra(evento) {
    evento.preventDefault();
    const itemDeCompra = inputDoItem.value;
    inputDoItem.value = '';
    criarItemDaLista(itemDeCompra);
}

function criarItemDaLista(itemDeCompra) {
    const li = document.createElement('li');
}

formCompras.addEventListener('submit', adicionarItemDeCompra);