const elementos = {
    inputDoItem: '[data-js="input-do-item"]',
    botaoAdicionarItem: '[data-js="botao-adicionar-item"]',
}

const inputDoItem = document.querySelector(elementos.inputDoItem);
const botaoAdicionarItem = document.querySelector(elementos.botaoAdicionarItem);




function pegarItemDeCompra(evento) {
    evento.preventDefault();

}

botaoAdicionarItem.addEventListener('click', pegarItemDeCompra);