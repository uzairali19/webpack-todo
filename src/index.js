import './style.css';
import Status from './status';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const form = document.querySelector('#form');
const todoTask = document.querySelector('#todo-task');
const mainList = document.querySelector('#todo-data');
const list = document.querySelectorAll('.main-list');
const newData = [];

const data = new Status(form, todoTask, mainList, list, newData);

data.addData();
data.loadData();
data.completeTodo();
