class Status {
  constructor(form, todoTask, mainList, list, data) {
    this.form = form;
    this.todoTask = todoTask;
    this.mainList = mainList;
    this.list = list;
    this.data = data;
  }

  addData() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.data.push({
        todoText: this.todoTask.value,
        completed: false,
        todoIndex: this.data.length,
      });

      const todos = this.data.sort((a, b) => {
        const indexA = a.todoIndex;
        const indexB = b.todoIndex;

        if (indexA < indexB) {
          return -1;
        }
        if (indexA > indexB) {
          return 1;
        }
        return 0;
      });
      const li = document.createElement('li');
      todos.forEach((task) => {
        const text = `<div class="list-container main-list"> <input class='check-input' type='checkbox'  aria-label='...'>
            <p class="todo-text">${task.todoText}</p><a class="del-menu" id="del" href="#"><i class="fas fa-ellipsis-v"></i></a></div>`;
        li.classList.add('list-item');
        li.innerHTML = text;
        this.mainList.appendChild(li);
      });
      localStorage.setItem('task', JSON.stringify(todos));
      this.todoTask.value = '';
      this.completeTodo();
      this.removeData();
    });
  }

  loadData() {
    window.addEventListener('load', (e) => {
      e.preventDefault();
      const tasks = JSON.parse(localStorage.getItem('task'));
      tasks.forEach((task) => {
        const li = document.createElement('li');
        const text = `<div class="list-container main-list"> <input class='check-input' type='checkbox'  aria-label='...'>
              <p class="todo-text">${task.todoText}</p><a class="del-menu" id="del" href="#"><i class="fas fa-ellipsis-v"></i></a></div>`;
        li.classList.add('list-item');
        li.innerHTML = text;
        this.mainList.appendChild(li);
      });
      this.completeTodo();
      this.removeData();
    });
  }

  removeData() {
    const del = document.querySelectorAll('#del');
    del.forEach((v, i) => {
      v.addEventListener('click', (e) => {
        e.preventDefault();
        const div = v.parentElement;
        const li = div.parentElement;
        li.remove();
        const newTask = JSON.parse(localStorage.getItem('task'));
        newTask.splice(i, 1);
        localStorage.setItem('task', JSON.stringify(newTask));
      });
    });
  }

  completeTodo() {
    const checks = document.querySelectorAll('.check-input');
    checks.forEach((v, i) => {
      v.addEventListener('change', (e) => {
        e.preventDefault();
        if (v.checked === true) {
          v.parentNode.style.textDecoration = 'line-through';
        } else {
          v.parentNode.style.textDecoration = 'none';
        }
        const newTask = JSON.parse(localStorage.getItem('task'));
        newTask[i].completed = v.checked;
        localStorage.setItem('task', JSON.stringify(newTask));
      });
    });
  }
}

export default Status;
