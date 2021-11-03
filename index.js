
const numberCounterEl = document.getElementById("number-counter")
const incrementButtonEl = document.getElementById("increment")
const addPlusButtonEl = document.getElementById("add-plus")
const removePlusButtonEl = document.getElementById("remove-plus")
const resetButtonEl = document.getElementById("reset")

let count = 0


const addPlusEvent = () => {
  incrementButtonEl.addEventListener("click", plusOne)
}

const removePlusEvent = () => {
  incrementButtonEl.removeEventListener("click", plusOne)
}
// Increment current count by one
const plusOne = () => {
  count+=1
  numberCounterEl.innerHTML = count
}

const resetCounter = () => {
  count = 0
  numberCounterEl.innerHTML = count
}



/* Event Handlers - Add Event Listeners Onload */
addPlusButtonEl.addEventListener("click", addPlusEvent)
removePlusButtonEl.addEventListener("click",removePlusEvent)
resetButtonEl.addEventListener("click", resetCounter)
