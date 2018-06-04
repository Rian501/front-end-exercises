// Define the database as an object
const HomeInventoryDatabase = {}

// Define the arrays (a.k.a. tables) in the database to store each type of items
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []


// The ink well is a craft data item
const vintageInkwell = {
  name: "Vintage Ink Well",
  location: "Writing desk",
  description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
}

// The writing desk is a furniture data item
const writingDesk = {
  name: "Shaker Writing Desk",
  location: "Bedroom",
  description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
}

const decorativeBakersRack = {
  name: "Decorative Baker's Rack",
  location: "living room",
  description: "Previously used to store cookbooks and other random kitchen items, this is now mostly for holding display pieces."
}

const functionalBakersRack = {
  name: "Functional Baker's Rack",
  location: "kitchen",
  description: "Has a cutting board (rubber) surface and hanging hooks for utensils, also holds dishtowels/rags."
}

const tv = {
  name: "television",
  location: "office room",
  description: "This old tv was a hand-me-down from Andrea before she moved to the Philippines. It is not connected to anything but the DVD player."
}

const dvdPlayer = {
  name: "DVD player",
  location: "office room",
  description: "noisy, used to play DVDs obtained from redbox and libraries."
}

const dresser = {
  name: "Emily dresser",
  location: "bedroom",
  description: "Got from Music City Thrift on Charlotte, not the cheap, but a nice piece."
}

const couch = {
  name: "Couch",
  location: "living room",
  description: "Wonderful couch, great for sleeping or sitting. Grey or green? Can't tell."
}

const futon = {
  name: "Futon",
  location: "office room",
  description: "Good for guests, also serve as couch. Not the most comfy for sleeping, has storage underneath for blankets. Dark green."
}

const postcardBox = {
  name: "Postcard Box",
  location: "living room, on writing desk",
  description: "purchased in Malaysia, I like this because it looks like a mini treasure chest and smells like the incense I carried in it for so long."
}

HomeInventoryDatabase.crafts.push(vintageInkwell);
HomeInventoryDatabase.crafts.push(postcardBox);
HomeInventoryDatabase.furniture.push(writingDesk);
HomeInventoryDatabase.furniture.push(futon);
HomeInventoryDatabase.furniture.push(couch);
HomeInventoryDatabase.furniture.push(functionalBakersRack);
HomeInventoryDatabase.furniture.push(decorativeBakersRack);
HomeInventoryDatabase.furniture.push(dresser);
HomeInventoryDatabase.electronics.push(tv);
HomeInventoryDatabase.electronics.push(dvdPlayer);

console.log(HomeInventoryDatabase);

const saveDatabase = function (databaseObject, localStorageKey) {
  /*
      Convert the Object into a string.
  */
  const stringifiedDatabase = JSON.stringify(databaseObject)

  /*
      Create a key in local storage, and store the string
      version of your inventory database as the value
  */
  localStorage.setItem(localStorageKey, stringifiedDatabase)
}


// const loadDatabase = function (localStorageKey) {
//   // Get the string version of the database
//   const databaseString = localStorage.getItem(localStorageKey)

//   // Use JSON.parse() to convert the string back into an object
//   return JSON.parse(databaseString)
// }

// // Persist the database to localStorage
saveDatabase(HomeInventoryDatabase, "HomeInventory")


// let fetchedData = loadDatabase("HomeInventory");
// console.log("fetched data", fetchedData);
