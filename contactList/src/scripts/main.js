// In main.js, import the ContactList component and the ContactForm component.
const ContactForm = require("./ContactForm");
const ContactList = require("./ContactList");

// The user should see the contact form at the top of the view, and the list of contacts underneath it.
const DOM = document.getElementById("root");
ContactForm.createContactInputForDom(DOM);

let button = document.getElementById("submit");
button.addEventListener("click", ()=>{
  console.log("clicked!")
})
//   Bonus: Are there any other modules that could be made ? Do any modules have more than one possible responsibility ? Perhaps something that is a general utility function.