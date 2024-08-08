var a = parseFloat(prompt("Digite o primeiro numero:"));
var b = parseFloat(prompt("Digite o segundo numero:"));
var c = parseFloat(prompt("Digite o terceiro numero:"));

function RetornaOrdem(a, b, c){
 maior = Math.max(a, b, c);
 menor = Math.min(a, b, c);
 if (maior == a && menor == b || maior == b && menor == a){
    meio = c;
 } else if (maior == a && menor == c || maior == c && menor == a){
    meio = b;
 }
 else{
    meio = a;
 }
 return (" Menor: " + menor + " Meio: " + meio + "Maior: " + maior) ;
}

alert(RetornaOrdem(a, b, c));