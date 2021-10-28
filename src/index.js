import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const list = document.querySelector('#todo-data');

const data = [
  {
    itemText: 'Hello World!',
    completed: true,
    index: 1,
  },
  {
    itemText: 'Learn Javascript',
    completed: false,
    index: 2,
  },
  {
    itemText: 'unlearn Javascript',
    completed: false,
    index: 2,
  },
];

const todos = data.sort((a, b) => {
  const indexA = a.index;
  const indexB = b.index;

  if (indexA < indexB) {
    return -1;
  }
  if (indexA > indexB) {
    return 1;
  }
  return 0;
});

function displaylist() {
  todos.forEach((task) => {
    const li = document.createElement('li');
    const text = `<div class="list-container"> <input class='check-input' type='checkbox' value='${task.completed}' aria-label='...'>
    <p class="todo-text">${task.itemText}</p><a class="del-menu" href="#"><i class="fas fa-ellipsis-v"></i></a></div>`;
    li.classList.add('list-item');
    li.innerHTML = text;
    list.appendChild(li);
  });
}

displaylist();
