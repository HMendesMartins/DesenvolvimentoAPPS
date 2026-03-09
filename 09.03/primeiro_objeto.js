class Conta {
    constructor (tipo, titular, saldo){
        this.tipo = tipo;
        this.titular = titular;
        this.saldo = saldo;
    };
    mostrarExtrato(){
        return `A conta ${this.tipo} do ${this.titular} tem ${this.saldo} de saldo.`
    }
    depositar(valor){
        this.valor = this.valor + valor
    };
}
let contaCorrente = new Conta("Corrente", "João", 1200)
let contaPoupanca = new Conta("Pupança", "Maria", 2000)
console.log(contaCorrente.mostrarExtrato());
