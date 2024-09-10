const addBtn = document.getElementById("js-add-button")
const input = document.getElementById("js-inputbox")
const container = document.getElementById("addTaskZone")
let data = {}

const getData = () => {
  const task = input.value
  return task
}

const addTask = () => {
  const newTask = getData()
  data['task'] = newTask
  console.log(data)
  container.innerHTML +=
    `
  <div class="tasks">
    <div class="msg">
      <p>${data.task}</p>
    </div>
    <div class="buttons-div">
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </div>
  `
  input.value = ""
}

addBtn.addEventListener('click', () => addTask())