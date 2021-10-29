class Check {
  constructor(list, input, data) {
    this.data = data;
    this.input = input;
    this.list = list;
  }

  displaylist() {
    const todos = this.data.sort((a, b) => {
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

    todos.forEach((task) => {
      const li = document.createElement('li');
      const text = `<div class="list-container"> <input class='check-input' type='checkbox' value='${task.completed}' aria-label='...'>
        <p class="todo-text">${task.itemText}</p><a class="del-menu" href="#"><i class="fas fa-ellipsis-v"></i></a></div>`;
      li.classList.add('list-item');
      li.innerHTML = text;
      this.list.appendChild(li);
    });
  }
}

export default Check;
