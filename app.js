// Setup DOM references to HTML elements
const todoInputEl = document.querySelector(".todo__input")
const todoListEl = document.querySelector(".todo__list")
const todoItemEls = document.querySelectorAll(".todo__item")

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
    /// If the target click's nodeName is "LI" toggle the css done class
    if (event.target.classList.contains("todo__item")) {
      event.target.classList.toggle("done")
    }
  })
}

// Function creates li element with todo__item class
function createListItem(text) {
  const newListElement = document.createElement("li");
  newListElement.classList.add("todo__item");
  newListElement.textContent = text;

  return newListElement;
}

toggleDone()
addListItem()