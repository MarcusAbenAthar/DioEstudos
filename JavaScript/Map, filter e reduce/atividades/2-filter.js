const meuArray = ['Marcus', 'Micaela', 'Miguel', 'Pamela', 'Harley', 'Joaquim', 'Bete', 'Angelita'];
const novoArray = meuArray.filter((filtro) => filtro.includes('m'));
console.log('Filtro sem função ' + novoArray);

function filtro(array, item) {
    return array.filter((filtro) => filtro.includes(item));
}

console.log('Filtro com função ' + filtro(meuArray, 'M'));


const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const paresArray = numArray.filter((item) => item % 2 == 0);
console.log('Filtro de pares sem função ' + paresArray);

function pares(array) {
    return array.filter((numero) => numero % 2 == 0);
}
console.log('Filtro de pares com função ' + pares(numArray));


