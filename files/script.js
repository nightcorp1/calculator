let display = document.getElementById('display');
let currentValue = '';
let previousValue = '';
let operator = null;

function appendNumber(num) {
    if (num === '.' && currentValue.includes('.')) return;
    currentValue += num;
    updateDisplay();
}

function appendOperator(op) {
    if (currentValue === '') return;
    if (previousValue !== '') {
        calculate();
    }
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate() {
    if (previousValue === '' || currentValue === '' || operator === null) return;
    
    let result;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    
    switch(operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current === 0 ? 'Error' : prev / current;
            break;
        default:
            return;
    }
    
    currentValue = result.toString();
    previousValue = '';
    operator = null;
    updateDisplay();
}

function clearDisplay() {
    currentValue = '';
    previousValue = '';
    operator = null;
    updateDisplay();
}

function updateDisplay() {
    display.value = currentValue || '0';
}

updateDisplay();