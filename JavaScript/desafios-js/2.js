let totalDeDias = parseInt(30);

let qtdAnos, qtdMeses;

qtdAnos = parseInt(totalDeDias / 365);
totalDeDias = totalDeDias % 365;

qtdMeses = parseInt(totalDeDias / 30);
totalDeDias = totalDeDias % 30;

let resultado = (qtdAnos + " ano(s) " + '\n' +
    qtdMeses + " mes(es)" + '\n' +
    totalDeDias + " dia(s)");

console.log(resultado);