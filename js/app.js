// js/app.js
import { UI } from './ui.js';
import { Calculator } from './calculator.js';
import { History } from './history.js';

document.addEventListener('DOMContentLoaded', () => {
    // Number and operator buttons
    document.querySelectorAll('.buttons button').forEach(button => {
        button.addEventListener('click', (event) => {
            const buttonId = event.target.id;
            const buttonText = event.target.textContent;

            if (buttonId === 'clear') {
                UI.clearDisplay();
            } else if (buttonId === 'backspace') {
                UI.backspaceDisplay();
            } else if (buttonId === 'calculate') {
                const expression = UI.resultInput.value;
                const result = Calculator.calculate(expression);
                UI.updateDisplay(result);
                History.add(expression, result);
                UI.addHistoryItem(expression, result);
            } else if (['sin', 'cos', 'tan', 'log', 'sqrt'].includes(buttonId)) {
                const currentValue = UI.resultInput.value;
                let result;
                try {
                    const valueToCalculate = parseFloat(currentValue);
                    if (isNaN(valueToCalculate)) {
                        throw new Error("Invalid input for function");
                    }
                    switch (buttonId) {
                        case 'sin':
                            result = Calculator.sin(valueToCalculate);
                            break;
                        case 'cos':
                            result = Calculator.cos(valueToCalculate);
                            break;
                        case 'tan':
                            result = Calculator.tan(valueToCalculate);
                            break;
                        case 'log':
                            result = Calculator.log(valueToCalculate);
                            break;
                        case 'sqrt':
                            result = Calculator.sqrt(valueToCalculate);
                            break;
                    }
                    UI.updateDisplay(result);
                    History.add(`${buttonId}(${currentValue})`, result);
                    UI.addHistoryItem(`${buttonId}(${currentValue})`, result);
                } catch (error) {
                    UI.updateDisplay('Error');
                    console.error("Function calculation error:", error);
                }
            } else {
                UI.appendToDisplay(buttonText);
            }
        });
    });
});
