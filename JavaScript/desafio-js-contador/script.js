const contador = document.querySelector('#contador');

function somar() {
    contador.innerHTML = parseInt(contador.innerHTML) + 1;
};

function subtrair() {
    contador.innerHTML = parseInt(contador.innerHTML) - 1;
}