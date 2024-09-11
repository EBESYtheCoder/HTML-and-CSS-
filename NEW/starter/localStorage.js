let data = [
  {
    task: 'clean the house and dust everything',
    id: 'Wa9WJ1pb72BR90wZ'
  }, {
    task: 'learn node js and master expreess js and later learn react js',
    id: 'NjNHe0zINMsaN1rs'
  }
]

export const saveToLocalstorage = (data) => {
  const jsonString = JSON.stringify(data)
  localStorage.setItem('data', jsonString)
}

export const loadFromLS = () => {
  return JSON.parse(localStorage.getItem('data'))
}

console.log(localStorage)