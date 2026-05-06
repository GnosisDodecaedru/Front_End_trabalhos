const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


function addTask(){
  const textItem = taskInput.value.trim();
  if (textItem != ''){
    const newTask = document.createElement('li');
    newTask.innerHTML = `
      <span>${textItem}</span>
      <button onclick="editar()">Editar</button>
      <button onclick="delet(this)">Remover</button>
      <button onclick="feito(this)">feito</button>
       `;
  
  taskList.appendChild(newTask);
  taskInput.value = '';
  }
}



function delet(button){
 const taskToRemove = button.parentElement; 
 taskList.removeChild(taskToRemove);  
}
function feito(button){
  const taskComplete = button.parentElement;
  taskComplete.classList.add('completed');
  
}
