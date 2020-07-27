// Setup DOM references to HTML elements
const todoInputEl = document.querySelector(".todo__input")
const todoListEl = document.querySelector(".todo__list")
const todoItemEls = document.querySelectorAll(".todo__item")
const todoDelButtonEl = document.querySelector(".todo__delete__button")

// Function to add input text to list
function addListItem() {
  // Event listener for "Enter" keypress that adds input text to todo__list
  todoInputEl.addEventListener("keypress", function(event) {
    // If the keypress "code" is "Enter"
    if (event.code === "Enter") {
      // Call createListItem and pass value from todoInputEl and add the returned value to todoListEl
      let newListItem = createListItem(todoInputEl.value)
      // todoListEl.appendChild(newListItem) this will append to the end of the list
      todoListEl.insertBefore(newListItem, todoListEl.childNodes[0]) // this will insert new todo before the first child node of todoListEl

      // Clear the todoInputEl field
      todoInputEl.value = "";
    }
  }) 
}

// This doesn't work because of eventListener bubbling and propagation
/* function toggleDone() {
  // Loop through all the todoItems and add eventlistener to each
  for (let todoItem of todoItemEls) {
    todoItem.addEventListener("click", function() {
      todoItem.classList.toggle("done")
    })
  }
} */

// Function that toggles css class "done" when todoItemEls are clicked (use parent element to avoid bubbling)
function toggleDone() {
  todoListEl.addEventListener("click", function(event) {
    /// If the target's classList contains "todo__item" toggle the css done class
    if (event.target.classList.contains("todo__item")) {
      event.target.classList.toggle("done")
    }
  })
}

// Function creates li element with todo__item class
function createListItem(text) {
  // Create new HTML elements
  const newListElement = document.createElement("li")
  const newDelButton = document.createElement("button")
  const newSpanElement = document.createElement("span")

  // Set classes and attributes
  newListElement.classList.add("todo__item")
  newListElement.textContent = text
  newDelButton.classList.add("todo__delete__button")
  newDelButton.type = "button"
  newSpanElement.innerHTML = "&times;"

  // Build the newListElement
  newDelButton.appendChild(newSpanElement)
  newListElement.appendChild(newDelButton)
  
  return newListElement;
}

// Deletes todoItemEl when user clicks x button
function removeListItem() {
  // Event listener on parent todoListEl to avoid event bubbling
  todoListEl.addEventListener("click", function(event) {
    // If the parentNode of spanEl contains class, removeChild
    if (event.target.parentNode.classList.contains("todo__delete__button")) {
      // Removes the parent (li) node whenever the span x button is clicked
      todoListEl.removeChild(event.target.parentNode.parentNode)
    }
  })
}

toggleDone()
addListItem()
removeListItem()