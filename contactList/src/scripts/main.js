// In main.js, import the ContactList component and the ContactForm component.
const ContactForm = require("./ContactForm");
const ContactList = require("./ContactList");

// The user should see the contact form at the top of the view, and the list of contacts underneath it.
const DOM = document.getElementById("root");
ContactForm.createContactInputForDom(DOM);
ContactList.buildDomContacts(DOM);

let button = document.getElementById("submit");
button.addEventListener("click", () => {
  console.log("clicked", nameInput.value)
  //build an object from the values of the fields
  let newContactObject = {
    name: nameInput.value,
    address: addressInput.value,
    phone: phoneInput.value,
  }
  ContactForm.saveNewContact(newContactObject);
  //repopulate the dom
  ContactList.buildDomContacts(DOM);
  //blank out the input fields
  nameInput.value = "";
  addressInput.value = "";
  phoneInput.value = "";
})


//   Bonus: Are there any other modules that could be made ? Do any modules have more than one possible responsibility ? Perhaps something that is a general utility function.