class Interact {
  constructor(todos) {
    this.todos = todos;
  }

  displaylist() {
    const list = document.querySelector('#todo-data');
    this.todos.forEach((task) => {
      const li = document.createElement('li');
      const text = `<div class="list-container"> <input class='check-input' type='checkbox' value='${task.completed}' aria-label='...'>
          <p class="todo-text">${task.itemText}</p><a class="del-menu" href="#"><i class="fas fa-ellipsis-v"></i></a></div>`;
      li.classList.add('list-item');
      li.innerHTML = text;
      list.appendChild(li);
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
    const check = document.querySelectorAll('.check-input');
    const todos = JSON.parse(localStorage.getItem('todos'));
    check.forEach((check, index) => {
      check.addEventListener('change', (e) => {
        e.preventDefault();
        const divWrapper = check.parentElement;
        if (check.checked) {
          divWrapper.classList.add('checked');
          todos[index].completed = true;
        } else {
          divWrapper.classList.remove('checked');
          todos[index].completed = false;
        }
        localStorage.setItem('todos', JSON.stringify(todos));
      });
    });
  }
}

export default Interact;
