function mensagemListaVazia(listaDeCompras, itensComprados) {
const elementos = {
    mensagem: '[data-js="mensagem"]',
}

const mensagem = document.querySelector(elementos.mensagem);

    if(listaDeCompras.childElementCount === 0) {
        mensagem.style.display = 'block';
    } else {
        mensagem.style.display = 'none';
    }

console.log('teste')

}

export default mensagemListaVazia;