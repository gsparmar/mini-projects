const todoList = document.getElementById('todo-list');
const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');

input.addEventListener('input', onTypeTodo);
addButton.addEventListener('click', addItem);

// enable the addbtn is the input length is > 0
function onTypeTodo() {
  addButton.disabled = input.value.length === 0;
}

function addItem() {
  const li = createListItem(input.value);
  todoList.append(li);
  input.value = '';
  addButton.disabled = true;
}

function createListItem(name) {
  const li = document.createElement('li');
  const heading = document.createElement('h2');

  heading.textContent = name;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.classList.add('delete-button');
  deleteBtn.addEventListener('click', deleteItem);

  li.append(heading);
  li.append(deleteBtn);

  return li;
}

function deleteItem() {
  this.parentNode.remove();
}
