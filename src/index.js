import './style.css';
import Interact from './interactive';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const form = document.querySelector('#todo-form');
const data = [];
const inputText = document.querySelector('#text');
const lists = new Interact(form, data, inputText);
lists.data();
lists.loadList();
lists.options();

window.addEventListener('load', () => {
  JSON.parse(localStorage.getItem('todos'));
});
