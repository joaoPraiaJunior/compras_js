function inserirItensComprados(checkboxAlvo, liDaLista) {

    const elementos = {
        itensComprados: '[data-js="itens-comprados"]',
    }

    const itensComprados = document.querySelector(elementos.itensComprados);

    if (checkboxAlvo.checked) {
        itensComprados.appendChild(liDaLista);
        liDaLista.classList.add('lista__item--comprado');
    } else {
        listaDeCompras.appendChild(liDaLista);
        liDaLista.classList.remove('lista__item--comprado');
    }
}

export default inserirItensComprados;