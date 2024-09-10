let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let previousInput = '';

function appendNumber(number) {
    if (currentInput.length < 10) {
        if (currentInput === '0' && number === '0') return;  // Impede múltiplos zeros
        currentInput += number;
        display.innerText = currentInput;
    }
}

function appendOperator(operator) {
    if (currentInput === '' && previousInput === '') return;
    if (currentInput !== '') {
        previousInput = currentInput;
        currentInput = '';
    }
    currentOperator = operator;
}

function calculate() {
    if (previousInput === '' || currentInput === '' || currentOperator === '') return;

    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (currentOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error';  // Verifica divisão por zero
            break;
        default:
            return;
    }

    // Atualiza o display com resultado ou mensagem de erro
    display.innerText = (result === 'Error') ? 'Error' : result.toString().slice(0, 10);
    previousInput = '';
    currentInput = (result === 'Error') ? '' : result.toString();
    currentOperator = '';
}

function clearDisplay() {
    display.innerText = '0';
    currentInput = '';
    previousInput = '';
    currentOperator = '';
}

function deleteDigit() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}
