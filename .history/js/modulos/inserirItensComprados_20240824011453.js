import dataHora from "./dataHora.js";

function inserirItensComprados(checkboxAlvo, liDaLista, paragrafoData, data, horas) {

    const elementos = {
        listaDeCompras: '[data-js="lista-de-compras"]',
        itensComprados: '[data-js="itens-comprados"]',
    }

    const itensComprados = document.querySelector(elementos.itensComprados);
    const listaDeCompras = document.querySelector(elementos.listaDeCompras);

    if (checkboxAlvo.checked) {
        debugger;
        itensComprados.appendChild(liDaLista);
        liDaLista.classList.add('lista__item--comprado');
    } else {
        listaDeCompras.appendChild(liDaLista);
        liDaLista.classList.remove('lista__item--comprado');
    }

    liDaLista.appendChild(dataHora(paragrafoData, data, horas));
}

export default inserirItensComprados;