import './style.css';
import Interact from './interactive';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const data = [
  {
    itemText: 'Hello World!',
    completed: false,
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

const lists = new Interact(todos);
lists.displaylist();
