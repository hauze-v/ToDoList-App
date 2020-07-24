// Setup DOM references to HTML elements
const todoInputEl = document.querySelector(".todo__input")
const todoListEl = document.querySelector(".todo__list")
const todoItemEl = document.querySelectorAll(".todo__item")

// Function to add input text to list
function addListItem() {
  // Event listener for "Enter" keypress that adds input text to todo__list
  todoInputEl.addEventListener("keypress", function(event) {
    // If the keypress "code" is "Enter"
    if (event.code === "Enter") {
      // Call createListItem and pass value from todoInputEl and add the returned value to todoListEl
      let newListItem = createListItem(todoInputEl.value)
      todoListEl.appendChild(newListItem)

      // Clear the todoInputEl field
      todoInputEl.value = "";
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

addListItem()