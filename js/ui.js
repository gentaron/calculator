// js/ui.js
export const UI = {
    resultInput: document.getElementById('result'),
    historyList: document.getElementById('history-list'),

    appendToDisplay: (value) => {
        UI.resultInput.value += value;
    },

    clearDisplay: () => {
        UI.resultInput.value = '';
    },

    backspaceDisplay: () => {
        UI.resultInput.value = UI.resultInput.value.slice(0, -1);
    },

    updateDisplay: (value) => {
        UI.resultInput.value = value;
    },

    addHistoryItem: (expression, result) => {
        const historyItem = document.createElement('li');
        historyItem.textContent = `${expression} = ${result}`;
        UI.historyList.appendChild(historyItem);
    }
};
