import adicionarItemDeCompra from './modulos/adicionarItemDeCompra.js';

const elementos = {
    formCompras: '[data-js="form-compras"]',
}

const formCompras = document.querySelector(elementos.formCompras);


formCompras.addEventListener('submit', function(evento) {
    adicionarItemDeCompra(evento);
});