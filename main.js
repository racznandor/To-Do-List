const addButton = document.getElementById('add');
const printToDo = document.querySelector('.printToDo');
const inputToDo = document.getElementById('toDo');
const toDoError = document.querySelector('.toDoError');

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputToDo.value) {
        let toDo = document.createElement('div');
        toDo.innerHTML = '' + inputToDo.value;
        printToDo.appendChild(toDo);
        clearModal();
    }
    else {
        toDoError.style.display = 'block';
    }
});

function clearModal() {
    toDoError.style.display = 'none';
    inputToDo.value = '';
}