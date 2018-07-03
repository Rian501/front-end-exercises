// A ContactList component that displays all contacts.It should import the Contact component and the ContactCollection component.
const Contact = require("Contact.js");
const ContactCollection = require("ContactCollection.js");

//loop through the data gotten from contactcollection and display them using the function in Contact

const ContactList = {
  buildDomContacts: (DOM) => {
    let listOfContacts = ContactCollection.fetchCollection("ContactListCollection");
    listOfContacts.forEach((contactObj) => {
      let piece = Contact.createSingleContactDisplay(contactObj);
      console.log(piece)
      DOM.appendChild(piece);
    })
  }
}

module.exports = ContactList;
