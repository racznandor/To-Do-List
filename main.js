const modal = document.getElementById('modal');
const saveButton = document.getElementById('save');
const createToDoButton = document.getElementById('createToDo');
const printToDo = document.querySelector('.print-toDo');
const inputToDo = document.getElementById('toDo');
const toDoError = document.querySelector('.toDoError');
const closeButton = document.getElementById('close');

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    clearModal();
});

createToDoButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

saveButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputToDo.value) {
        modal.style.display = 'none';
        printToDo.innerHTML = '' + inputToDo.value;
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