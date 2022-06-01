function numeros(n1, n2) {
    let result = "";

    if (n1 == n2) {
        result += "Os números são iguais. ";
    } else {
        result += "Os números são diferentes. "
    }
    if (n1 + n2 > 10 && n1 + n2 < 20) {
        result += "A soma dos números é maior do que 10 e menor do que 20";
    } else {
        result += "A soma dos números é maior do que 10 e não é menor do que 20";

    }

    return result;
}

console.log(numeros(10, 10));