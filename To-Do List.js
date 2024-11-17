console.log("HELLO")
document.addEventListener('DOMContentLoaded', () => {
    const addtask = document.querySelector("#add_task")
    const taskContainer = document.querySelector("#taskContainer")
    const taskInput = document.querySelector("#task")

    document.querySelector('#task_form').addEventListener('submit',(Event)=>{
        Event.preventDefault();
        if(taskInput.value.trim()!==""){
            const newTask = document.createElement('div');
            newTask.textContent =  taskInput.value;
            newTask.classList.add('task');

            taskContainer.appendChild(newTask);

            taskInput.value = "";
            
        }
    })
});