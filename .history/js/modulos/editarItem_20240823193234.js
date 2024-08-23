import textoCapitalizado from "./textoCapitalizado.js";

const editarItem = (liDaLista, botaoEditar) => {
    const elementos = {
        spanDoLabel: '[data-js="span-do-label"]',
    }
    const etiqueta = liDaLista.querySelector(elementos.spanDoLabel);

    botaoEditar.addEventListener('click', function () {
        const novoItem = prompt('Digite o novo nome do item:');

        if (novoItem !== null && novoItem.trim() !== '') {
            etiqueta.textContent = textoCapitalizado(novoItem);
        }
    });
}

export { editarItem };
