function inserirItensComprados(checkboxAlvo, liDaLista) {

    const elementos = {
        itensComprados: '[data-js="itens-comprados"]',
    }

    if (checkboxAlvo.checked) {
        itensComprados.appendChild(liDaLista);
        liDaLista.classList.add('lista__item--comprado');
    } else {
        listaDeCompras.appendChild(liDaLista);
        liDaLista.classList.remove('lista__item--comprado');
    }
}