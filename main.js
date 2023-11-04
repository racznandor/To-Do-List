const addButton = document.getElementById('add');
const printToDo = document.querySelector('.printToDo');
const inputToDo = document.getElementById('toDo');
const toDoError = document.querySelector('.toDoError');

let toDo = document.createElement('div');
let deleteButton = document.createElement('i');
let toDoText = document.createElement('div');

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputToDo.value) {
        toDo.classList.add('itemToDo');
        deleteButton.classList.add('fa-solid', 'fa-xmark', 'fa-xl', 'itemDeleteButton');
        toDoText.classList.add('itemToDoText');

        toDo.appendChild(toDoText);
        toDo.appendChild(deleteButton);

        toDoText.innerHTML = '' + inputToDo.value;
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