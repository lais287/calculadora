let display = document.getElementById('display');

// Função para adicionar valores no display
function appendToDisplay(value) {
    display.value += value;
}

// Função para limpar o display
function clearDisplay() {
    display.value = '';
}

// Função para calcular o valor no display
function calculate() {
    try {
        // Se tiver um valor válido, fazer o cálculo
        display.value = eval(display.value);
    } catch (e) {
        // Se houver erro no cálculo (ex: divisão por zero), exibir uma mensagem
        display.value = 'Erro';
    }
}