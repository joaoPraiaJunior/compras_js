function alteracaoVisualDoCheckbox(checkboxAlvo, checkboxCustomizadoAlvo) {
    
    if (checkboxAlvo.checked) {
        checkboxCustomizadoAlvo.classList.add('checkbox__customizado--checked');
    } else {
        checkboxCustomizadoAlvo.classList.remove('checkbox__customizado--checked');
    }
}

export default alteracaoVisualDoCheckbox;