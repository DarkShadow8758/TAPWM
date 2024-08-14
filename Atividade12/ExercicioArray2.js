function subconjuntos(arr){

    if (!arr[0] || !arr[1]){
        //throw new Error("Uma das palavras esta vazia ou undefined.");
        return "Uma das palavras esta vazia ou undefined.";
    }

    if (arr[0].includes(arr[1])){
        return "É um subconjunto";
    } 
    else
    {
       return "Não é um subconjunto";
    }
}
var array =  Array(2);
array[0] = prompt("Digite a primeira palavra: ");
array[1] = prompt("Digite a segunda palavra: ");
result = subconjuntos(array)
alert(result);
