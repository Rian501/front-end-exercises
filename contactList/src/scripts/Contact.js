// A Contact component that displays a person"s name, phone number, and address.

let contactCardId = 1

const createSingleContactDisplay = (contactObj) => {
  let contactCard = document.createElement("section");
  contactCard.id = contactCardId;
  contactCardId++;
  contactCard.textContent = `
  <h4>${contactObj.name}</h4>
  <p>Address: ${contactObj.address}</p>
  <p>Phone: ${contactObj.phone}</p>`
  return contactCard;
}