function numbers(arr){

    function sum (a, b, c){
        return a + b + c;
    }
    function square (n){
        return n*n;
    }

    const resultSum = sum.apply(null, arr);
    const resultFirstSquare = square(arr[1]);
    const resultSecondtSquare = square(arr[2]);

    return{
        sum: resultSum,
        resultFirstSquare: resultFirstSquare,
        resultSecondtSquare: resultSecondtSquare
    };
}
var array =  Array(2);
array[0] = parseInt(prompt("Digite o primeiro numero:"));
array[1] = parseInt(prompt("Digite o segundo numero:"));
array[2] = parseInt(prompt("Digite o terceiro numero:"));
const result = numbers(array)
alert("Soma de todos os numeros: "+ result.sum +"\nQuadrado do segundo número: "+ result.resultFirstSquare + "\nQuadrado do terceiro número:" + result.resultSecondtSquare);
console.log(result);