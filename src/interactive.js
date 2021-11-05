class Interact {
  constructor(form, newData, input) {
    this.form = form;
    this.newData = newData;
    this.input = input;
  }

  data() {
    const list = document.querySelector('#todo-data');
    const todoList = JSON.parse(localStorage.getItem('todos'));
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (todoList === null) {
        this.newData.push({
          todoText: this.input.value,
          completed: false,
          todoIndex: this.newData.length,
        });
      } else {
        this.newData = todoList;
        this.newData.push({
          todoText: this.input.value,
          completed: false,
          todoIndex: this.newData.length,
        });
      }

      const todos = this.newData.sort((a, b) => {
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
        const text = `<div class="list-container"> <input class='check-input' type='checkbox' value='${task.completed}'>
                <p class="todo-text" contenteditable="true">${task.todoText}</p><div class="del-menu"><a class="edit" href="#">
                <i class="fas fa-edit edit-box"></i></a><a href="#" class="del"><i class="fas fa-trash del-box"></i></a></div></div>`;
        li.classList.add('list-item');
        li.innerHTML = text;
      });

      list.appendChild(li);
      this.form.reset();
      this.addItem(todos);
      this.editItem();
      const check = document.querySelectorAll('.check-input');
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
      });
      this.options();
      this.delItem();
    });
  }

  loadList() {
    const todoList = JSON.parse(localStorage.getItem('todos'));
    const list = document.querySelector('#todo-data');
    if (todoList !== null) {
      todoList.forEach((task) => {
        const li = document.createElement('li');
        if (task.completed === true) {
          const text = `<div class="list-container"> <input class='check-input' type='checkbox' value='${task.completed}' checked>
                <p class="todo-text" contenteditable="true">${task.todoText}</p><div class="del-menu"><a class="edit" href="#">
                <i class="fas fa-edit edit-box"></i></a><a href="#" class="del"><i class="fas fa-trash del-box"></i></a></div></div>`;
          li.classList.add('list-item');
          li.innerHTML = text;
          list.appendChild(li);
        } else {
          const text = `<div class="list-container"> <input class='check-input' type='checkbox' value='${task.completed}'>
              <p class="todo-text" contenteditable="true">${task.todoText}</p><div class="del-menu"><a class="edit" href="#">
              <i class="fas fa-edit edit-box"></i></a><a href="#" class="del"><i class="fas fa-trash del-box"></i></a></div></div>`;
          li.classList.add('list-item');
          li.innerHTML = text;
          list.appendChild(li);
        }
      });
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
  }

  editItem() {
    const edit = document.querySelectorAll('.edit');
    const todoList = JSON.parse(localStorage.getItem('todos'));
    edit.forEach((v, i) => {
      v.addEventListener('click', (e) => {
        e.preventDefault();
        const aDiv = v.parentElement;
        const listItem = aDiv.parentElement;
        const p = listItem.children[1];

        todoList[i].todoText = p.innerText;
        localStorage.setItem('todos', JSON.stringify(todoList));
      });
    });
  }

  delItem() {
    const del = document.querySelectorAll('.del');
    const todoList = JSON.parse(localStorage.getItem('todos'));
    del.forEach((v, i) => {
      setTimeout(() => {
        const aDiv = v.parentElement;
        const listItem = aDiv.parentElement.parentElement;
        v.addEventListener('click', (e) => {
          e.preventDefault();
          listItem.remove();
          todoList.splice(i, 1);
          this.addItem(todoList);
        });
      }, 500);
    });
  }

  clearAll() {
    const clearBtn = document.querySelector('#completed');
    clearBtn.addEventListener('click', () => {
      const mainList = document.querySelector('#todo-data');
      mainList.remove();
      localStorage.setItem('todos', null);
      window.addEventListener('load', (e) => {
        e.preventDefault();
        localStorage.getItem('todos');
      });
    });
  }

  addItem(todos) {
    return localStorage.setItem('todos', JSON.stringify(todos));
  }
}

export default Interact;
