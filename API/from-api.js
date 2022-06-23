const validationBtn = document.getElementById('btn');

validationBtn.addEventListener('click', () => {
    const inputObj = document.getElementById('id-1');
    if (inputObj.validity.rangeOverflow) {
        inputObj.setCustomValidity("Please give a under 300");
    }
    else if (inputObj.validity.rangeUnderflow) {
        inputObj.setCustomValidity("Please give a over 100");
    } else if (inputObj.validity.valueMissing) {
        inputObj.setCustomValidity("Missing valid value!")
    }
    if (!inputObj.checkValidity()) {
        document.getElementById('demo').innerHTML = inputObj.validationMessage;
    }
});