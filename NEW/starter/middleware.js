const container = document.getElementById("addTaskZone")
const input = document.getElementById("js-inputbox")

export let data = [
  // {
  //   task: 'clean the house and dust everything',
  //   id: 'Wa9WJ1pb72BR90wZ'
  // }, {
  //   task: 'learn node js and master expreess js and later learn react js',
  //   id: 'NjNHe0zINMsaN1rs'
  // }
]

function generateRandomId() {
  // Combine random numbers and letters for a more unique ID
  const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < 16; i++) {
    id += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return id;
}

export let generateHTML = () => {
  data = JSON.parse(localStorage.getItem('data')) || []
  data.forEach((dataset) => {
    const id = dataset.id
    const tasks = dataset.task
    container.innerHTML +=
      `
      <div id="item-${id}" class="tasks">
        <div class="msg">
          <p id="${id}">${tasks}</p>
        </div>
        <div class="buttons-div">
          <button class="js-edit-button" data-productId="${id}">Edit</button>
          <button class="js-delete-button" data-productId="${id}">Delete</button>
        </div>
      </div>
`
  })
  // console.log(data)
  document.querySelectorAll(".js-delete-button").forEach((button) => {
    button.addEventListener('click', () => {
      const itemId = button.dataset.productid;
      const elementToDelete = document.querySelector(`#item-${itemId}`)
      elementToDelete.remove()
      deleteFromArray(itemId)

    })

  })

  document.querySelectorAll(".js-edit-button").forEach((button) => {
    button.addEventListener('click', () => {
      const itemId = button.dataset.productid;
      const elementToEdit = document.querySelector(`#${itemId}`)
      input.value = elementToEdit.innerHTML
      document.querySelector(`#item-${itemId}`).remove()
      deleteFromArray(itemId)
    })

  })
  console.log(data)

}

const getData = () => {
  const task = input.value
  return { task: task, id: generateRandomId() }

}

export const addTask = () => {
  if (!input.value) {
    document.getElementById('js-errorMsg').innerHTML = 'Please enter something!'
  } else {
    let newTask = getData()
    data.push(newTask)
    localStorage.setItem('data', JSON.stringify(data))
    deleteAllTasks()
    generateHTML(data)
    input.value = ""
    document.getElementById('js-errorMsg').innerHTML = ""
  }

}

const deleteAllTasks = () => {
  const rapper = document.getElementById('addTaskZone')
  rapper.innerHTML = ''

}

const deleteFromArray = (itemId) => {
  const filtereddata = data.filter(data => data.id !== itemId);
  data = filtereddata
  localStorage.setItem('data', JSON.stringify(data))
}

