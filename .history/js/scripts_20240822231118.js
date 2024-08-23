const elementos = {
    formCompras: '[data-js="form-compras"]',
    inputDoItem: '[data-js="input-do-item"]',
    botaoAdicionarItem: '[data-js="botao-adicionar-item"]',
}

const inputDoItem = document.querySelector(elementos.inputDoItem);
const botaoAdicionarItem = document.querySelector(elementos.botaoAdicionarItem);
const formCompras = document.querySelector(elementos.formCompras);


function pegarItemDeCompra(evento) {
    evento.preventDefault();
    const itemDeCompra = inputDoItem.value;
    console.log(itemDeCompra);
    inputDoItem.value = '';
}

botaoAdicionarItem.addEventListener('submit', pegarItemDeCompra);