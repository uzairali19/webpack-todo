import './style.css';
import Check from './status';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

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
    index: 3,
  },
];

function displaylist() {
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

  const check = new Check();
  check.todoList(todos);
  check.updateCheckbox(todos);

  window.addEventListener('load', () => {
    check.getItems();
  });
}

displaylist();
