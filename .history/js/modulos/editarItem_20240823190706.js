import textoCapitalizado from "./textoCapitalizado.js";

const editarItem = (idlista, botaoEditar) => {
    const elementos = {
        labelDoCheckbox: '[data-js="label-do-checkbox"]',
    }
    const etiqueta = idlista.querySelector(elementos.labelDoCheckbox);

    botaoEditar.addEventListener('click', function () {
        const novoItem = prompt('Digite o novo nome do item:');

        if (novoItem !== null && novoItem.trim() !== '') {
            etiqueta.textContent = textoCapitalizado(novoItem);
        }
    });
}

export { editarItem };
