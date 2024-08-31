import alteracaoVisualDoCheckbox from "./alteracaoVisualDoCheckbox.js";
import inserirItensComprados from "./inserirItensComprados.js";

function checkboxMarcado(labelDoCheckbox, liDaLista, paragrafoData, data, horas) {

    const elementos = {
        inputDoCheckbox: '[data-js="input-do-checkbox"]',
        checkBoxCustomizado: '[data-js="checkbox-customizado"]',
    }

    labelDoCheckbox.addEventListener('click', function (evento) {
        const checkboxAlvo = evento.currentTarget.querySelector(elementos.inputDoCheckbox);
        const checkboxcustomizadoAlvo = evento.currentTarget.querySelector(elementos.checkBoxCustomizado);

        alteracaoVisualDoCheckbox(checkboxAlvo, checkboxcustomizadoAlvo);
        inserirItensComprados(checkboxAlvo, liDaLista, paragrafoData, data, horas);
    });
}

export default checkboxMarcado;