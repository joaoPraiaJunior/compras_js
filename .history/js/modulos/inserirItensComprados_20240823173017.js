import mensagemListaVazia from "./mensagemListaVazia";

function inserirItensComprados(checkboxAlvo, liDaLista) {

    const elementos = {
        listaDeCompras: '[data-js="lista-de-compras"]',
        itensComprados: '[data-js="itens-comprados"]',
    }

    const itensComprados = document.querySelector(elementos.itensComprados);
    const listaDeCompras = document.querySelector(elementos.listaDeCompras);

    if (checkboxAlvo.checked) {
        itensComprados.appendChild(liDaLista);
        liDaLista.classList.add('lista__item--comprado');
    } else {
        listaDeCompras.appendChild(liDaLista);
        liDaLista.classList.remove('lista__item--comprado');
    }

    mensagemListaVazia(listaDeCompras, itensComprados);
}

export default inserirItensComprados;