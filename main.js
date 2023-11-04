const addButton = document.getElementById('add');
const printToDo = document.querySelector('.printToDo');
const inputToDo = document.getElementById('toDo');
const toDoError = document.querySelector('.toDoError');

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputToDo.value) {
        newElement();
        clearModal();
    }
    else {
        toDoError.style.display = 'block';
    }
});

function newElement() {
    let toDo = document.createElement('div');
    let deleteButton = document.createElement('i');
    let toDoText = document.createElement('div');

    toDo.classList.add('itemToDo');
    deleteButton.classList.add('fa-solid', 'fa-xmark', 'fa-xl', 'itemDeleteButton');
    toDoText.classList.add('itemToDoText');

    toDo.appendChild(toDoText);
    toDo.appendChild(deleteButton);

    toDoText.innerHTML = '' + inputToDo.value;
    printToDo.appendChild(toDo);

    deleteButton.addEventListener('mouseover', (e) => {
        deleteButton.classList.add('fa-beat-fade');
    });
    
    deleteButton.addEventListener('mouseout', (e) => {
        deleteButton.classList.remove('fa-beat-fade');
    });
    
    deleteButton.addEventListener('click', (e) => {
        let parentElement = e.target.parentElement;
        parentElement.style.display = 'none';
    });

    toDo.addEventListener('click', (e) => {
        toDo.style.backgroundColor = 'rgba(255, 255, 255, 0.50)';
        toDoText.style.textDecoration = 'line-through';
    });
}

function clearModal() {
    toDoError.style.display = 'none';
    inputToDo.value = '';
}