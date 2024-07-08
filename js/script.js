import { Modal } from './modal.js';
import { AlertError } from './alert-error.js'
import { calculateIMC, notNumber } from "./utils.js"

// variáveis
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = function(e) {
    e.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height); 

    if (weightOrHeightIsNotANumber) {
        AlertError.open();
        return;
    }

    AlertError.close();
    
    const result = calculateIMC(weight, height);

    displayResultMessage(result);
}

function displayResultMessage(result) {
    const message = `O seu IMC é de ${result}`;

    Modal.message.innerText = message;
    Modal.open();
}

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

