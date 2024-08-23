import alteracaoVisualDoCheckbox from "./alteracaoVisualDocheckBox.js";

function checkboxMarcado(labelDoCheckbox, liDaLista) {
    labelDoCheckbox.addEventListener('click', function (evento) {
        const checkboxAlvo = evento.currentTarget.querySelector(elementos.inputDoCheckbox);
        const checkboxcustomizadoAlvo = evento.currentTarget.querySelector(elementos.checkBoxCustomizado);

        alteracaoVisualDoCheckbox(checkboxAlvo, checkboxcustomizadoAlvo);
        inserirItensComprados(checkboxAlvo, liDaLista);

    });
}

export default checkboxMarcado;