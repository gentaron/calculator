// js/calculator.js
export const Calculator = {
    calculate: (expression) => {
        try {
            // Basic parsing for now, will be replaced by backend API
            // This is a simplified example and does not handle operator precedence
            // or complex expressions like a full-fledged parser would.
            // For a real calculator, a proper shunting-yard algorithm or similar
            // would be needed, or rely on a backend service.

            // Replace common math functions for evaluation
            let safeExpression = expression
                .replace(/sin\(([^)]+)\)/g, 'Math.sin($1)')
                .replace(/cos\(([^)]+)\)/g, 'Math.cos($1)')
                .replace(/tan\(([^)]+)\)/g, 'Math.tan($1)')
                .replace(/log\(([^)]+)\)/g, 'Math.log10($1)') // Assuming log base 10
                .replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)');

            // Basic validation to prevent arbitrary code execution
            if (!/^[\d+\-*/().\sMath]+$/.test(safeExpression)) {
                throw new Error('Invalid characters in expression');
            }

            const result = Function('return ' + safeExpression)();

            if (result === 123456789) {
                return '>_<';
            }
            return result;
        } catch (error) {
            console.error("Calculation error:", error);
            return 'Error';
        }
    },
    sin: (value) => Math.sin(value),
    cos: (value) => Math.cos(value),
    tan: (value) => Math.tan(value),
    log: (value) => Math.log10(value),
    sqrt: (value) => Math.sqrt(value)
};