import { data, generateHTML, addTask } from "./middleware.js"

// const deleteBtn = document.querySelectorAll(".js-delete-button")

generateHTML(data)

document.getElementById("js-add-button").addEventListener('click', () => addTask())











