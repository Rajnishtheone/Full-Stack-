function changebackground(colour) {
    document.body.style.backgroundColor = colour;
}

const addbtn = document.getElementById('add-btn');
const todoinput = document.getElementById('todo-input');
const todoitemscontainer = document.getElementById('todo-items-container');

addbtn.addEventListener('click', () => {
    const value = todoinput.value;
    if (value) {
        const li = document.createElement('li');
        li.innerHTML = `${value} <button onclick="removeItem(this)">X</button>`;
        todoitemscontainer.appendChild(li);
        todoinput.value = '';
    }
});

function removeItem(button) {
    const li = button.parentElement;
    todoitemscontainer.removeChild(li);
}
