const inputTexto = document.getElementById('texto');
const checkboxMaiusculo = document.getElementById('Uppercase');
const checkboxMinusculo = document.getElementById('Lowercase');

function aplicarFormatacao() {
    if (checkboxMaiusculo.checked) {
        inputTexto.value = inputTexto.value.toUpperCase();
        checkboxMinusculo.checked = false; 
    } else if (checkboxMinusculo.checked) {
        inputTexto.value = inputTexto.value.toLowerCase();
        checkboxMaiusculo.checked = false; 
    }
}

checkboxMaiusculo.addEventListener('change', aplicarFormatacao);
checkboxMinusculo.addEventListener('change', aplicarFormatacao);