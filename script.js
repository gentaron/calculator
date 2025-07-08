const resultInput = document.getElementById('result');
const historyList = document.getElementById('history-list');

let history = [];

function appendToDisplay(value) {
    resultInput.value += value;
}

function clearScreen() {
    resultInput.value = '';
}

function backspace() {
    resultInput.value = resultInput.value.slice(0, -1);
}

function calculate() {
    try {
        const expression = resultInput.value;
        const result = eval(expression);

        if (result === 123456789) {
            resultInput.value = '>_<';
        } else {
            resultInput.value = result;
        }

        addToHistory(expression, result);
    } catch (error) {
        resultInput.value = 'Error';
    }
}

function sin() {
    resultInput.value = Math.sin(eval(resultInput.value));
}

function cos() {
    resultInput.value = Math.cos(eval(resultInput.value));
}

function tan() {
    resultInput.value = Math.tan(eval(resultInput.value));
}

function log() {
    resultInput.value = Math.log10(eval(resultInput.value));
}

function sqrt() {
    resultInput.value = Math.sqrt(eval(resultInput.value));
}

function addToHistory(expression, result) {
    const historyItem = document.createElement('li');
    historyItem.textContent = `${expression} = ${result}`;
    historyList.appendChild(historyItem);
    history.push({ expression, result });
}