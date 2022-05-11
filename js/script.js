const form = document.getElementById("new-task-form")
const input = document.getElementById("new-task-input")
const tasks = document.getElementById("tasks")

// getTasks
const getTasks = () => {
    let allTasks = localStorage.getItem("taskList")
    allTasks = allTasks.split(",")
    console.log(allTasks)
    tasks.innerHTML= allTasks.map((task) => `
        <div class="task">
        <div class="content">
        <input class="text type="text" readonly="readonly" value="${task}">
        </div>
        <div class="actions">
        <button class="delete">Delete</button>
        </div>
        </div>
        `)
        .join("")
}

// addTask
const addTask = (task) =>{
    let allTasks = localStorage.getItem("taskList")
    allTasks = allTasks ? allTasks.split(".") : []
    allTasks.push(task)
    localStorage.setItem("taskList",allTasks)
}

// deleteTask

// Form Submit
form.onsubmit = (event) => {
    event.preventDefault()
    let task = input.value
    addTask(task)
    getTasks()
    form.reset()
}

window.onload = getTasks