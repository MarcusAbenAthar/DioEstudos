class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this.saldo = 0
    }
    get saldo() {
        return this._saldo
    }

    set saldo(valor) {
        this._saldo = valor
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return console.log('Saldo insuficiente!')
        }
        this._saldo -= valor
        return this._saldo
    }

    depositar(valor) {
        this._saldo += valor
        return this._saldo
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'Conta Corrente';
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito() {
        return this._cartaoCredito
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor
    }

}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'Conta Poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Conta Universitária';
    }

    sacar(valor) {
        if (valor > 500) {
            return 'Operação negada.';
        }
        this._saldo -= valor
        return this._saldo
    }
}

const cc = new ContaCorrente(001, 12345, true)
const cp = new ContaPoupanca(002, 12340)
const cu = new ContaUniversitaria(003, 12346)

console.log(cc)
cc.sacar(200)
cc.depositar(400)
console.log(cc)

console.log(cp)
cp.depositar(4000)
cp.sacar(2000)
console.log(cp)

console.log(cu)
cu.depositar(400)
console.log(cu.sacar(600))
console.log(cu)