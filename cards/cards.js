// Requirements
// When the user enters in text into the text area and then clicks the create button, use a factory function that creates a new DOM component that has a border, and includes its own delete button.
document.getElementById('submitCard').addEventListener('click', () => {
  let userText = document.getElementById('userText').value;
  console.log('user text', userText);



})


// Insert that new component into the DOM.
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM.Not just made invisible, actually removed from the DOM.
// Pro tip: The card's id attribute, and the button's id attribute should share some common value.Then, when the button is clicked, find the corresponding parent DOM component.Remember the split() method on a string ? That will be helpful.

