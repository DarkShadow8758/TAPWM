class Conta{
    constructor(nomeCorrentista, banco, numeroDaConta, saldo){

        this._nomeCorrentista = nomeCorrentista;
        this._banco = banco;
        this._numeroDaConta = numeroDaConta;
        this._saldo = saldo;
    }
    //Get
    getNomeCorrentista() {
        return this._nomeCorrentista;
    }

    getBanco() {
        return this._banco;
    }

    getNumeroConta() {
        return this._numeroDaConta;
    }

    getSaldo() {
        return this._saldo;
    }

    //Set
    setNomeCorrentista(nomeCorrentista) {
        this._nomeCorrentista = nomeCorrentista;
    }

    setBanco(banco) {
        this._banco = banco;
    }

    setNumeroConta(numeroDaConta) {
        this._numeroDaConta = numeroDaConta;
    }

    setSaldo(saldo) {
        this._saldo = saldo;
    }
}

class Corrente extends Conta{
    constructor(nomeCorrentista, banco, numeroDaConta, saldo, saldoEspecial){
        super(nomeCorrentista, banco, numeroDaConta, saldo);
        this._saldoEspecial = saldoEspecial;
    }
    setSaldoEspecial(value){
        this._saldoEspecial = value;
    }
    getSaldoEspecial(){
        return this._saldoEspecial;
    }
}

class Poupanca extends Conta{
    constructor(nomeCorrentista, banco, numeroDaConta, saldo, juros, dataVencimento){
        super(nomeCorrentista, banco, numeroDaConta, saldo);
        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }
    setJuros(value){
        this._juros = value;
    }
    getJuros(){
        return this._juros;
    }
    setDataVencimento(value){
        this._dataVencimento = value;
    }
    getDataVencimento(){
        return this._dataVencimento;
    }

}

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