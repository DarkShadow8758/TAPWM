const prompt = require('prompt-sync')();


function saudacao(nome){
    console.log('Olá, ' + nome);

}

function entradaNome(callback){
    var nome = prompt('Digite seu Nome: ');
    callback(nome);
}

entradaNome(saudacao);
