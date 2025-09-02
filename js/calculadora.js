// Seleciona elementos
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

let currentInput = "";

// Atualiza o display com operador ternário
const updateDisplay = () => display.value = currentInput ? currentInput : "0";

// Adiciona valor usando ternário
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value; 
        value ? (currentInput += value, updateDisplay()) : null;
    });
});

// Limpa display (sem necessidade de if)
clearButton.addEventListener('click', () => (currentInput = "", updateDisplay()));

// Calcula resultado com try/catch e ternário
equalsButton.addEventListener('click', () => {
    try {
        currentInput = currentInput ? eval(currentInput).toString() : "";
    } catch {
        currentInput = "Erro";
    }
    updateDisplay();
});
