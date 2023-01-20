let leads = []
let oldLeads = []

let textField = document.getElementById("text-field")
let saveInput = document.getElementById("input-button")

const list = document.getElementById("list")
const tabButton = document.getElementById("tab-button")
const deleteButton = document.getElementById("delete-button")

let leadsLocal = JSON.parse(localStorage.getItem("my-leads"))

if (leadsLocal) {
  leads = leadsLocal
  render(leads)
}

tabButton.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs1) => {
    leads.push(tabs1[0].url)
    localStorage.setItem("my-leads", JSON.stringify(leads))
    render(leads)
  })
})

deleteButton.addEventListener("dblclick", () => {
  localStorage.clear()
  leads = []
  render(leads)
})

saveInput.addEventListener("click", () => {
  leads.push(textField.value)
  textField.value = ""
  localStorage.setItem("my-leads", JSON.stringify(leads))
  render(leads)
  console.log(localStorage.getItem("my-leads"))
})

function render(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++)
    listItems += `
      <li>
        <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
      </li>
    `
  list.innerHTML = listItems
}