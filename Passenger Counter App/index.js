let count = 0
let savedNums = ""

let counter = document.getElementById("counter")
counter.innerText = count

let previousEntries = document.getElementById("previous-list")

const increment = () => {
   count += 1
   counter.innerText = count
}

const decrement = () => {
   count -= 1
   if (count < 0)
      count = 0
   counter.innerText = count
}

const save = () => {
   counter.innerText = 0
   savedNums = count
   previousEntries.textContent += savedNums + ", "
   count = 0
}

previousEntries.innerText = "Previous entries: "