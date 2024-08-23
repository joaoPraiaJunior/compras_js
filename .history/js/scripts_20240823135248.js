const elementos = {
    formCompras: '[data-js="form-compras"]',
    inputDoItem: '[data-js="input-do-item"]',
    listaDeCompras: '[data-js="lista-de-compras"]',
    labelDoCheckbox: '[data-js="label-do-checkbox"]',
    inputDoCheckbox: '[data-js="input-do-checkbox"]',
    checkBoxCustomizado: '[data-js="checkbox-customizado"]',
    itensComprados: '[data-js="itens-comprados"]',
}

const formCompras = document.querySelector(elementos.formCompras);
const inputDoItem = document.querySelector(elementos.inputDoItem);
const listaDeCompras = document.querySelector(elementos.listaDeCompras);
const itensComprados = document.querySelector(elementos.itensComprados);
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
    checkBoxCustomizado.dataset.js = 'checkbox-customizado';
    divBotao.classList.add('botao');
    botaoExcluir.classList.add('botao__excluir');
    botaoEditar.classList.add('botao__editar');

    labelDoCheckbox.setAttribute('for', `item-${contadorDeItens}`);
    labelDoCheckbox.dataset.js = 'label-do-checkbox';
    inputCheckbox.setAttribute('type', 'checkbox');
    inputCheckbox.dataset.js = 'input-do-checkbox';
    inputCheckbox.setAttribute('id', `item-${contadorDeItens}`);
    iconeExcluir.setAttribute('src', './img/delete.svg');
    iconeExcluir.setAttribute('alt', 'Botão de excluir item da lista de compras');
    iconeEditar.setAttribute('src', './img/edit.svg');
    iconeEditar.setAttribute('alt', 'Botão de editar item da lista de compras');

    liDaLista.appendChild(divContainer);
    divContainer.appendChild(divListaDeCompras);
    divListaDeCompras.appendChild(labelDoCheckbox);
    labelDoCheckbox.textContent = `${textoCapitalizado(itemDeCompra)}`;
    labelDoCheckbox.appendChild(inputCheckbox);
    labelDoCheckbox.appendChild(checkBoxCustomizado);
    divContainer.appendChild(divBotao);
    divBotao.appendChild(botaoExcluir);
    divBotao.appendChild(botaoEditar);
    botaoExcluir.appendChild(iconeExcluir);
    botaoEditar.appendChild(iconeEditar);

    dataHora(paragrafoData, data, horas);

    checkboxMarcado(labelDoCheckbox, liDaLista);

    return liDaLista;
}

function checkboxMarcado(labelDoCheckbox, liDaLista) {
    labelDoCheckbox.addEventListener('click', function (evento) {
        const checkboxAlvo = evento.currentTarget.querySelector(elementos.inputDoCheckbox);
        const checkboxcustomizadoAlvo = evento.currentTarget.querySelector(elementos.checkBoxCustomizado);

        alteracaoVisualDoCheckbox(checkboxAlvo, checkboxcustomizadoAlvo);
        inserirItensComprados(checkboxAlvo, liDaLista);

    });
}

function alteracaoVisualDoCheckbox(checkboxAlvo, checkboxCustomizadoAlvo) {
    if (checkboxAlvo.checked) {
        checkboxCustomizadoAlvo.classList.add('checkbox__customizado--checked');
    } else {
        checkboxCustomizadoAlvo.classList.remove('checkbox__customizado--checked');
    }
}

function dataHora(paragrafoData, data, horas) {
    data.textContent = new Date().toLocaleDateString();
    data.datetime = new Date().toISOString();
    console.log(data);
}

function inserirItensComprados(checkboxAlvo, liDaLista) {

    if (checkboxAlvo.checked) {
        itensComprados.appendChild(liDaLista);
        liDaLista.classList.add('lista__item--comprado');
    } else {
        listaDeCompras.appendChild(liDaLista);
        liDaLista.classList.remove('lista__item--comprado');
    }

}

function textoCapitalizado(itemDeCompra) {
    const palavras = itemDeCompra.split(' ');

    const palavrasCapitalizadas = palavras.map(function (palavra) {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
    });

    return palavrasCapitalizadas.join(' ');
}

formCompras.addEventListener('submit', adicionarItemDeCompra);