// A Contact component that displays a person"s name, phone number, and address.

let contactCardId = 1
const Contact = {
  createSingleContactDisplay: (contactObj) => {
    let contactCard = document.createElement("section");
    contactCard.id = contactCardId;
    contactCardId++;
    contactCard.innerHTML = `
    <h4>${contactObj.name}</h4>
    <p>Address: ${contactObj.address}</p>
    <p>Phone: ${contactObj.phone}</p>`
    return contactCard;
  }
}

module.exports = Contact;