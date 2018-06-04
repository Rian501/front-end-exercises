

// In your JavaScript file, load your home inventory from local storage.

const loadDatabase = function (localStorageKey) {
  // Get the string version of the database
  const databaseString = localStorage.getItem(localStorageKey)

  // Use JSON.parse() to convert the string back into an object
  return JSON.parse(databaseString)
}

// Persist the database to localStorage
// saveDatabase(HomeInventoryDatabase, "HomeInventory")


let fetchedData = loadDatabase("HomeInventory");
console.log("fetched data", fetchedData);

const myStuff = document.querySelector('#myStuff');

////regular FOR LOOP type:
// for (type in fetchedData) {
//   console.log("fetchedData[type]", fetchedData[type]);
//   for (let i=0; i<fetchedData[type].length; i++) {
//     console.log("fetched", fetchedData[type][i])
//   }
// }


// Iterate over every data set in the database and create a < section > component.
for (type in fetchedData) {
  // console.log(fetchedData[type]);
  fetchedData[type].forEach((item) => {
    // let itemSection = document.createElement('section');
    // // That component itself should contain three < p > components.One for the name, location, and description.
    // let nameOf = document.createElement('p');
    // let locOf = document.createElement('p');
    // let descripOf = document.createElement('p');
    // let name = document.createTextNode(item.name);
    // nameOf.appendChild(name);
    // let location = document.createTextNode(item.location);
    // let description = document.createTextNode(item.description);
    // descripOf.appendChild(description);
    // locOf.appendChild(location);
    // // Attach the p components as children of the section.
    // itemSection.appendChild(nameOf);
    // itemSection.appendChild(locOf);
    // itemSection.appendChild(descripOf);
    // // Attach the section as a child of the article.
    // myStuff.appendChild(itemSection);
  })
}




// Write a function that performs the operation of creating your DOM components
const makeDOMcomponent = (item) => {
  let itemSection = document.createElement('section');
  // That component itself should contain three < p > components.One for the name, location, and description.
  let nameOf = document.createElement('p');
  let locOf = document.createElement('p');
  let descripOf = document.createElement('p');
  let name = document.createTextNode(item.name);
  nameOf.appendChild(name);
  let location = document.createTextNode(item.location);
  let description = document.createTextNode(item.description);
  descripOf.appendChild(description);
  locOf.appendChild(location);
  // Attach the p components as children of the section.
  itemSection.appendChild(nameOf);
  itemSection.appendChild(locOf);
  itemSection.appendChild(descripOf);
  // Attach the section as a child of the article.
  myStuff.appendChild(itemSection);
}

// for (type in fetchedData) {
//   fetchedData[type].forEach((item) => {
//     makeDOMcomponent(item);
//   })
// }

const dataBySet = (setName) => {
  fetchedData[setName].forEach((item) => {
    makeDOMcomponent(item);
  })
}

dataBySet("crafts");

// Define an argument to the function that will filter the data to one of the data sets.For example, if I pass a string value of "crafts" to the function, only items in the crafts table in the database should appear.
