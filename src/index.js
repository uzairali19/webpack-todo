import './style.css';
import Check from './status';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const list = document.querySelector('#todo-data');
const todoInput = document.querySelector('#todo-task').value;

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

const check = new Check(list, todoInput, data);
check.displaylist();
