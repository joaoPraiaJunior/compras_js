import textoCapitalizado from "./textoCapitalizado.js";

const editarItem = (liDaLista, botaoEditar) => {
    const elementos = {
        labelDoCheckbox: '[data-js="label-do-checkbox"]',
    }
    const etiqueta = liDaLista.querySelector(elementos.labelDoCheckbox);

    botaoEditar.addEventListener('click', function () {
        const novoItem = prompt('Digite o novo nome do item:');

        if (novoItem !== null && novoItem.trim() !== '') {
            etiqueta.innerText = textoCapitalizado(novoItem);
        }
    });
}

export { editarItem };
