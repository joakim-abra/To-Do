const form = document.getElementById("new-task-form")
const input = document.getElementById("new-task-input")
const tasks = document.getElementById("tasks")

// getTasks
const getTasks = () => {
    let allTasks = localStorage.getItem("taskList")
    if(allTasks!="")
    {
    allTasks = allTasks.split(",")
    console.log(allTasks)
        tasks.innerHTML= allTasks.map((task,index) => `
        <div class="task">
        <div class="content">
        <input class="text type="text" readonly="readonly" value="${task}">
        </div>
        <div class="actions">
        <button class="delete" onclick="deleteTask(${index})">Delete</button>
        </div>
        </div>
        `)
        .join("")
    }
    else
    {
        tasks.innerHTML=`
        <div class="no-tasks-found">
        <h2>No tasks found</h2>
        </div>`
    }
}
        
// addTask
const addTask = (task) =>{
    let allTasks = localStorage.getItem("taskList")
    allTasks = allTasks ? allTasks.split(",") : []
    allTasks.push(task)
    localStorage.setItem("taskList",allTasks)
}

// deleteTask
const deleteTask = (index) => {
    let allTasks = localStorage.getItem("taskList")
    allTasks = allTasks.split(",")
    allTasks.splice(index,1)
    localStorage.setItem("taskList",allTasks)
    getTasks()
}

// Form Submit
form.onsubmit = (event) => {
    event.preventDefault()
    let task = input.value
    addTask(task)
    getTasks()
    form.reset()
}

window.onload = getTasks