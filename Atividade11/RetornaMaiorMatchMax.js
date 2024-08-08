var a = parseFloat(prompt("Digite o primeiro numero:"));
var b = parseFloat(prompt("Digite o segundo numero:"));
var c = parseFloat(prompt("Digite o terceiro numero:"));
var d = parseFloat(prompt("Digite o quarto numero:"));

function RetornaMaiorIf(a, b, c, d){
 maior = Math.max(a, b, c, d);
    return maior;
}

alert(RetornaMaiorIf(a, b, c, d));