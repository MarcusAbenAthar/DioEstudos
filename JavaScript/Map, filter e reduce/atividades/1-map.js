const meuArray = [3, 4, 5, 6, 7];

console.log('console direto ' + meuArray.map((numero) => numero * 2));

function exibeArrraySemThis(array) {
    return array.map(function (item) {
        return item * 2;
    })
}

console.log('função sem this ' + exibeArrraySemThis(meuArray));

const qnt = { num: 0.5 }; //isso é uma lista

function exibeArray() {
    const arrayFuncao = [1, 2, 3, 4, 5];
    return arrayFuncao.map(function (item) {
        return item * this.num
    }, qnt)
}

console.log('função com this ' + exibeArray());