const x = [2, 3, 4, 5, 6]
// console.log(x)
let jsString = JSON.stringify(x)
localStorage.setItem('item', jsString)

console.log(JSON.parse(localStorage.getItem('item')))

