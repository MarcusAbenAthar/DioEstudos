const meuArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(meuArray.reduce(function (inicio, vlAtual) {
    return inicio + vlAtual;
}, 0));

lista = [
    {
        preco: 2,
        nome: 'maçã'
    },
    {
        preco: 30,
        nome: 'roupa'
    },
    {
        preco: 25,
        nome: 'carne'
    }
];

function calculaSaldo(saldo, itens) {
    const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);
    return `O saldo final será de ${saldoFinal} reais`;
}

console.log(calculaSaldo(60, lista))