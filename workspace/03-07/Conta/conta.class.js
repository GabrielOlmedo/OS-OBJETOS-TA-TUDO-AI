export class Conta {
    constructor(agencia, numero) {
        // imutaveis
        this._agencia = agencia;
        this._numero = numero;
        // mutaveis
        this._saldo = 500;
    }

    get agencia() {
        return this._agencia;
    }
    get numero() {
        return this._numero;
    }
    get saldo() {
        return this._saldo;
    }

    sacar(saque) {
        if (saque <= this.saldo) {
            this._saldo = this._saldo - saque;
        }
    }
    depositarEmDinheiro(deposito) {
        if (deposito <= 1000) {
            this._saldo += deposito;
        }
    }
    depositarEmCheque(deposito) {
        if (deposito <= 10000) {
            this._saldo += deposito;
        }
    }
    toString() { // arrumar
        return ('ag ' + this._agencia + ' cc ' + this._numero + ' saldo ' + this._saldo + '.00');
    }
}
