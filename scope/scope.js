// C is for Cookie
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let x = 1; x < cookies.length; x++) {
  const currentCookie = cookies[x]
  console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}


// Conjunction Function
let conjoinedWord;
const conjunction = function (firstWord, secondWord) {
  conjoinedWord = `${firstWord} ${secondWord}`
}

conjunction("Master", "Card");
console.log(conjoinedWord);


// Mod Squad
{
  const ModSquad = {
    "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
    "series": {
      "start": "1968",
      "end": "1973"
    }
  }

  let HTMLRepresentation = `<h1>The Mod Squad</h1>`

  ModSquad.members.forEach(member => {
    HTMLRepresentation += `<div>${member}</div>`
  })
  document.querySelector(".show-info").innerHTML = HTMLRepresentation
}



// Simon Says
const locations = [[1, 1], [6, 2], [1, 3], [2, 1], [2, 2], [2, 3]]

let counter = 0;
for (let k = 0; k < locations.length; k++) {
  let invalidLocation = false;
  const currentLocation = locations[k]

  if (currentLocation[0] > 2) {
    invalidLocation = true
  } else {
    counter++;
  }

  if (invalidLocation) {
    console.log("This location is invalid")
  }
}
console.log(`There were ${counter} locations displayed`)


// Lambda Llama
const llamaNamer = function () {
  const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
  const randomizer = Math.floor(Math.random() * 7)

  const namer = function () {
    const suffix = " the Llama"
    const name = possibleNames[randomizer]
    return name + suffix
  }
  return namer();
}
nameMaker = llamaNamer()
console.log(nameMaker);
