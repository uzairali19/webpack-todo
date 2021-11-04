class Interact {
  constructor(todos) {
    this.todos = todos;
  }

  displaylist() {
    const todoList = JSON.parse(localStorage.getItem('todos'));
    const list = document.querySelector('#todo-data');
    if (todoList === null) {
      this.todos.forEach((task) => {
        const li = document.createElement('li');
        const text = `<div class="list-container"> <input class='check-input' type='checkbox' value='${task.completed}'>
                <p class="todo-text">${task.itemText}</p><a class="del-menu" href="#"><i class="fas fa-ellipsis-v"></i></a></div>`;
        li.classList.add('list-item');
        li.innerHTML = text;
        list.appendChild(li);
      });
    } else {
      todoList.forEach((task) => {
        const li = document.createElement('li');
        if (task.completed === true) {
          const text = `<div class="list-container"> <input class='check-input' type='checkbox' value='${task.completed}' checked>
                <p class="todo-text">${task.itemText}</p><a class="del-menu" href="#"><i class="fas fa-ellipsis-v"></i></a></div>`;
          li.classList.add('list-item');
          li.innerHTML = text;
          list.appendChild(li);
        } else {
          const text = `<div class="list-container"> <input class='check-input' type='checkbox' value='${task.completed}'>
              <p class="todo-text">${task.itemText}</p><a class="del-menu" href="#"><i class="fas fa-ellipsis-v"></i></a></div>`;
          li.classList.add('list-item');
          li.innerHTML = text;
          list.appendChild(li);
        }
      });
    }

    const check = document.querySelectorAll('.check-input');
    const todos = JSON.parse(localStorage.getItem('todos'));
    check.forEach((check, index) => {
      check.addEventListener('change', (e) => {
        e.preventDefault();
        const divWrapper = check.parentElement;
        if (check.checked) {
          divWrapper.classList.add('checked');
          check.checked = true;
          todos[index].completed = true;
          localStorage.setItem('todos', JSON.stringify(todos));
        } else {
          divWrapper.classList.remove('checked');
          todos[index].completed = false;
          localStorage.setItem('todos', JSON.stringify(todos));
        }
      });
      window.addEventListener('load', (e) => {
        e.preventDefault();
        const divWrapper = check.parentElement;
        if (check.checked) {
          divWrapper.classList.add('checked');
          check.checked = true;
          todos[index].completed = true;
          localStorage.setItem('todos', JSON.stringify(todos));
        } else {
          divWrapper.classList.remove('checked');
          todos[index].completed = false;
          localStorage.setItem('todos', JSON.stringify(todos));
        }
      });
    });
  }

  addItem() {
    return localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}

export default Interact;
