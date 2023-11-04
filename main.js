const addButton = document.getElementById('add');
const printToDo = document.querySelector('.print-toDo');
const inputToDo = document.getElementById('toDo');
const toDoError = document.querySelector('.toDoError');

addButton.addEventListener('click', (e) => {
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