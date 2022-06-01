function getArray(arr, n) {
    try {
        if (!arr && !n) throw new ReferenceError("Envie os parâmetros");
        if (typeof arr != 'object') throw new TypeError("O array precisa ser do tipo object");
        if (typeof n != 'number') throw new TypeError("O número precisa ser do tipo number");
        if (arr.length != n) throw new RangeError("O tamanho é inválido");
        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError");
            throw e;
        }
        else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError");
            throw e;
        }
        else if (e instanceof RangeError) {
            console.log("Este erro é um ReferenceError");
            throw e;
        }
        else {
            console.log("Um erro inexperado aconteceu: " + e);
        }
    }
}

const meuArray = [1, 2, 3, 4, 5, 6, 7];

console.log(getArray(meuArray, 7));
