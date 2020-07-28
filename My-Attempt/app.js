// Setup DOM references
const todoInputEl = document.querySelector(".todo__input")
const todoListEl = document.querySelector(".todo__list")
const todoButtonEl = document.querySelector(".todo__button")

function addListItem() {
  todoInputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      let newListItem = createNewListItem(todoInputEl.value);
    }
  })
}

function createNewListItem(text) {
  const newListElement = document.createElement("li")
  const newButtonElement = document.createElement("button")
  const newSpanElement = document.createElement("span")

  newListElement.classList.add("todo__item")
  newListElement.textContent = text;
}

addListItem()