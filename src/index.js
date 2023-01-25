import './style.css';

const tasksArray = [];

function createTask(obj) {
  let myindex;
  if (tasksArray.length === 0) {
    myindex = 0;
  } else {
    myindex = tasksArray.length;
  }

  const task = {
    description: obj,
    completed: false,
    index: myindex,
  };
  tasksArray.push(task);

  const contenedor = document.querySelector('#contenedorTasks');
  contenedor.innerHTML += `<li>
  <div class="taskCont">
    <input type="checkbox">
    <div class="task">${task.description}</div>
  </div>
  <div class="icon">&#8942</div>
</li>
`;
  const inputText = document.querySelector('#inputNewTask');
  inputText.value = '';
}

window.onload = () => {
  // const button = document.querySelector('.clearAll');
  // button.onclick = function name() { sayHi(); };

  const inputText = document.querySelector('#inputNewTask');
  inputText.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) { createTask(inputText.value); }
  });
};
