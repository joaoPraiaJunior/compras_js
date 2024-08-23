const elementos = {
    formCompras: '[data-js="form-compras"]',
    inputDoItem: '[data-js="input-do-item"]',
}

const inputDoItem = document.querySelector(elementos.inputDoItem);
const formCompras = document.querySelector(elementos.formCompras);


function pegarItemDeCompra(evento) {
    evento.preventDefault();
    const itemDeCompra = inputDoItem.value;
    inputDoItem.value = '';
    criarItemDaLista(itemDeCompra);
}

formCompras.addEventListener('submit', pegarItemDeCompra);