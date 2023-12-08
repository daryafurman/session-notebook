/* 
We can select by:
- classes
- id
- data-js
*/

console.log("document: ", document);

const bodyContainer = document.querySelector('[data-js="body"]');
console.log("bodyContainer: ", bodyContainer);

// Change styling via classList
bodyContainer.classList.add("blue");
bodyContainer.classList.remove("blue");

const myLoggingButton = document.querySelector('[data-js="logging-button"]');
console.log("myLoggingButton: ", myLoggingButton);

const mainElement = document.querySelector('[data-js="main"]');
console.log("mainElement: ", mainElement);

// Color Buttons
const addColorButton = document.querySelector('[data-js="add-button"]');
const removeColorButton = document.querySelector('[data-js="remove-button"]');
const toggleColorButton = document.querySelector('[data-js="toggle-button"]');

console.log("addColorButton: ", addColorButton);
console.log("removeColorButton: ", removeColorButton);
console.log("toggleColorButton: ", toggleColorButton);

// console.clear();

myLoggingButton.addEventListener("click", (event) => {
  //   console.log("Event: ", event);
  console.log("You clicked a button");
});

addColorButton.addEventListener("click", () => {
  mainElement.classList.add("dark");
});

removeColorButton.addEventListener("click", () => {
  mainElement.classList.remove("dark");
});

toggleColorButton.addEventListener("click", () => {
  mainElement.classList.toggle("dark");
});
