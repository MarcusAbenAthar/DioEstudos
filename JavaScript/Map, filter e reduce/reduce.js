const arrayReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const callbackFn = function (accumulator, currentValue, index, array) {
    accumulator + currentValue
}
console.log(arrayReduce.reduce(callbackFn, 0));