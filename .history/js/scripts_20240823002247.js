const elementos = {
    formCompras: '[data-js="form-compras"]',
    inputDoItem: '[data-js="input-do-item"]',
    listaDeCompras: '[data-js="lista-de-compras"]',
    labelDoCheckbox: '[data-js="label-do-checkbox"]',
    inputDoCheckbox: '[data-js="input-do-checkbox"]',
}

const formCompras = document.querySelector(elementos.formCompras);
const inputDoItem = document.querySelector(elementos.inputDoItem);
const listaDeCompras = document.querySelector(elementos.listaDeCompras);
let contadorDeItens = 0;



function adicionarItemDeCompra(evento) {
    evento.preventDefault();
    const itemDeCompra = inputDoItem.value;
    inputDoItem.value = '';
    contadorDeItens++;
    listaDeCompras.appendChild(criarItemDaLista(itemDeCompra));
}

function criarItemDaLista(itemDeCompra) {
    const liDaLista = document.createElement('li');
    const divContainer = document.createElement('div');
    const divListaDeCompras = document.createElement('div');
    const labelDoCheckbox = document.createElement('label');
    const inputCheckbox = document.createElement('input');
    const checkBoxCustomizado = document.createElement('span');
    const divBotao = document.createElement('div');
    const botaoExcluir = document.createElement('button');
    const botaoEditar = document.createElement('button');
    const iconeExcluir = document.createElement('img');
    const iconeEditar = document.createElement('img');
    const paragrafoData = document.createElement('p');
    const data = document.createElement('time');
    const horas = document.createElement('time');

    liDaLista.classList.add('lista__item');
    divContainer.classList.add('lista__container');
    divListaDeCompras.classList.add('lista__compra');
    labelDoCheckbox.classList.add('checkbox');
    inputCheckbox.classList.add('checkbox__input');
    checkBoxCustomizado.classList.add('checkbox__customizado');
    divBotao.classList.add('botao');
    botaoExcluir.classList.add('botao__excluir');
    botaoEditar.classList.add('botao__editar');

    labelDoCheckbox.setAttribute('for', `item-${contadorDeItens}`);
    labelDoCheckbox.dataset.js = 'label-do-checkbox';
    inputCheckbox.setAttribute('type', 'checkbox');
    inputCheckbox.dataset.js = 'input-do-checkbox';
    inputCheckbox.setAttribute('id', `item-${contadorDeItens}`);
    iconeExcluir.setAttribute('src', './img/delete.svg');
    iconeEditar.setAttribute('src', './img/edit.svg');

    liDaLista.appendChild(divContainer);
    divContainer.appendChild(divListaDeCompras);
    divListaDeCompras.appendChild(labelDoCheckbox);
    labelDoCheckbox.textContent = `${itemDeCompra}`;
    labelDoCheckbox.appendChild(inputCheckbox);
    labelDoCheckbox.appendChild(checkBoxCustomizado);
    divContainer.appendChild(divBotao);
    divBotao.appendChild(botaoExcluir);
    divBotao.appendChild(botaoEditar);
    botaoExcluir.appendChild(iconeExcluir);
    botaoEditar.appendChild(iconeEditar);

    checkboxMarcado(labelDoCheckbox, inputCheckbox);

    return liDaLista;
}

function checkboxMarcado(labelDoCheckbox, inputCheckbox) {
    labelDoCheckbox.addEventListener('click', function (evento) {
        if (inputCheckbox.checked) {
            labelDoCheckbox.classList.add('checked');
        } else {
            labelDoCheckbox.classList.remove('checked');
        }
    });

}

formCompras.addEventListener('submit', adicionarItemDeCompra);