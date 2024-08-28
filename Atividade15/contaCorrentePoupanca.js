function Conta(nomeCorrentista, banco, numeroDaConta, saldo) {
    this._nomeCorrentista = nomeCorrentista;
    this._banco = banco;
    this._numeroDaConta = numeroDaConta;
    this._saldo = saldo;
}

Conta.prototype.getNomeCorrentista = function() {
    return this._nomeCorrentista;
};

Conta.prototype.getBanco = function() {
    return this._banco;
};

Conta.prototype.getNumeroConta = function() {
    return this._numeroDaConta;
};

Conta.prototype.getSaldo = function() {
    return this._saldo;
};

Conta.prototype.setNomeCorrentista = function(nomeCorrentista) {
    this._nomeCorrentista = nomeCorrentista;
};

Conta.prototype.setBanco = function(banco) {
    this._banco = banco;
};

Conta.prototype.setNumeroConta = function(numeroDaConta) {
    this._numeroDaConta = numeroDaConta;
};

Conta.prototype.setSaldo = function(saldo) {
    this._saldo = saldo;
};

function Corrente(nomeCorrentista, banco, numeroDaConta, saldo, saldoEspecial) {
    Conta.call(this, nomeCorrentista, banco, numeroDaConta, saldo);
    this._saldoEspecial = saldoEspecial;
}

Corrente.prototype = Object.create(Conta.prototype);
Corrente.prototype.constructor = Corrente;

Corrente.prototype.getSaldoEspecial = function() {
    return this._saldoEspecial;
};

Corrente.prototype.setSaldoEspecial = function(value) {
    this._saldoEspecial = value;
};

function Poupanca(nomeCorrentista, banco, numeroDaConta, saldo, juros, dataVencimento) {
    Conta.call(this, nomeCorrentista, banco, numeroDaConta, saldo);
    this._juros = juros;
    this._dataVencimento = dataVencimento;
}

Poupanca.prototype = Object.create(Conta.prototype);
Poupanca.prototype.constructor = Poupanca;

Poupanca.prototype.getJuros = function() {
    return this._juros;
};

Poupanca.prototype.setJuros = function(value) {
    this._juros = value;
};

Poupanca.prototype.getDataVencimento = function() {
    return this._dataVencimento;
};

Poupanca.prototype.setDataVencimento = function(value) {
    this._dataVencimento = value;
};

const contaCorrente = new Corrente("Clorivalda de Oliveira", "Banco do Brasil", "12345-6", 1000, 500);
const contaPoupanca = new Poupanca("Jerusa da Silva", "Caixa Econômica", "65432-1", 2000, 0.05, "31/12/2024");

alert(
    "Conta Corrente:\n" +
    "Nome Correntista: " + contaCorrente.getNomeCorrentista() + "\n" +
    "Banco: " + contaCorrente.getBanco() + "\n" +
    "Número da Conta: " + contaCorrente.getNumeroConta() + "\n" +
    "Saldo: " + contaCorrente.getSaldo() + "\n" +
    "Saldo Especial: " + contaCorrente.getSaldoEspecial() + "\n\n" +
    
    "Conta Poupança:\n" +
    "Nome Correntista: " + contaPoupanca.getNomeCorrentista() + "\n" +
    "Banco: " + contaPoupanca.getBanco() + "\n" +
    "Número da Conta: " + contaPoupanca.getNumeroConta() + "\n" +
    "Saldo: " + contaPoupanca.getSaldo() + "\n" +
    "Juros: " + contaPoupanca.getJuros() + "\n" +
    "Data de Vencimento: " + contaPoupanca.getDataVencimento()
);
