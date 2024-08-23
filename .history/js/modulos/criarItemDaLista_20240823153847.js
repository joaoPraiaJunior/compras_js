import checkboxMarcado from "./checkboxMarcado.js";
import dataHora from "./dataHora.js";
import textoCapitalizado from "./textoCapitalizado.js";

function criarItemDaLista(itemDeCompra, contadorDeItens) {
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
    paragrafoData.classList.add('lista__data');

    labelDoCheckbox.setAttribute('for', `item-${contadorDeItens++}`);
    labelDoCheckbox.dataset.js = 'label-do-checkbox';
    inputCheckbox.setAttribute('type', 'checkbox');
    inputCheckbox.dataset.js = 'input-do-checkbox';
    inputCheckbox.setAttribute('id', `item-${contadorDeItens++}`);
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
    liDaLista.appendChild(dataHora(paragrafoData, data, horas));

    checkboxMarcado(labelDoCheckbox, liDaLista);

    return liDaLista;
}

export default criarItemDaLista;