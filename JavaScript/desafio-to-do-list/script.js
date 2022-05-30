const button = document.querySelector('.btnAdd');
const listaTarefas = document.querySelector('.tarefas');

const btnAdd = () => {
    const boxTarefas = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', document.querySelector('.inputTarefa').value);

    let span = document.createElement('span');

    span.appendChild(document.createTextNode(document.querySelector('.inputTarefa').value));

    boxTarefas.appendChild(checkbox);
    boxTarefas.appendChild(span);

    listaTarefas.appendChild(boxTarefas);
}

button.addEventListener('click', btnAdd);