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
    let updateButton = document.createElement('i');
    let buttonsDiv = document.createElement('div');
    let toDoText = document.createElement('div');
    let updateDiv = document.createElement('div');
    let showUpdateDiv = false;

    toDo.classList.add('itemToDo');
    deleteButton.classList.add('fa-solid', 'fa-xmark', 'fa-xl', 'itemDeleteButton');
    toDoText.classList.add('itemToDoText');
    updateButton.classList.add('fa-solid', 'fa-pen', 'fa-lg', 'itemUpdateButton');
    buttonsDiv.classList.add('buttonsDiv');
    updateDiv.classList.add('updateDiv');

    toDo.appendChild(toDoText);
    buttonsDiv.appendChild(updateButton);
    buttonsDiv.appendChild(deleteButton);
    toDo.appendChild(buttonsDiv);

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
        let parentParentElement = parentElement.parentElement;
        parentParentElement.style.display = 'none';
    });

    updateButton.addEventListener('mouseover', (e) => {
        updateButton.classList.add('fa-beat-fade');
    });

    updateButton.addEventListener('mouseout', (e) => {
        updateButton.classList.remove('fa-beat-fade');
    });

    updateButton.addEventListener('click', (e) => {
        console.log('update');
        updateDiv.innerHTML = 'Update';
        buttonsDiv.appendChild(updateDiv);

        showUpdateDiv = !showUpdateDiv;
        console.log(showUpdateDiv);
        if (showUpdateDiv) {
            updateDiv.style.display = 'block';
            updateButton.style.color = 'blue';
        }
        else {
            updateDiv.style.display = 'none';
            updateButton.style.color = 'white';
        }
    });

    toDoText.addEventListener('click', (e) => {
        toDo.style.backgroundColor = 'rgba(255, 255, 255, 0.50)';
        toDoText.style.textDecoration = 'line-through';
        toDoText.style.textDecorationColor = 'black';
        updateButton.style.display = 'none';
    });
}

function clearModal() {
    toDoError.style.display = 'none';
    inputToDo.value = '';
}