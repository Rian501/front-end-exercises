// A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage.It should import the ContactCollection component.
const ContactCollection = require("./ContactCollection");
const ContactForm = {
  createContactInputForDom: (DOM) => {
    docFrag = document.createDocumentFragment();
    const nameInput = document.createElement("input");
    nameInput.id = "nameInput";
    const addressInput = document.createElement("input");
    addressInput.id = "addressInput";
    const phoneInput = document.createElement("input");
    phoneInput.id = "phoneInput";
    const nameLabel = document.createElement("label");
    nameLabel.htmlFor = "nameInput"
    nameLabel.textContent = "Name: "
    const addressLabel = document.createElement("label");
    addressLabel.htmlFor = "addressInput"
    addressLabel.textContent = "address: "
    const phoneLabel = document.createElement("label");
    phoneLabel.htmlFor = "phoneInput"
    phoneLabel.textContent = "phone: "
    docFrag.appendChild(nameLabel);
    docFrag.appendChild(nameInput);
    docFrag.appendChild(addressLabel);
    docFrag.appendChild(addressInput);
    docFrag.appendChild(phoneLabel);
    docFrag.appendChild(phoneInput);
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.id = "submit"
    docFrag.appendChild(submitBtn);
    DOM.appendChild(docFrag);
  },


}

module.exports = ContactForm;