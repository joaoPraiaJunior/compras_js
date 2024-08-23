function textoCapitalizado(itemDeCompra) {
    const palavras = itemDeCompra.split(' ');

    const palavrasCapitalizadas = palavras.map(function (palavra) {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
    });

    return palavrasCapitalizadas.join(' ');
}

export default textoCapitalizado;