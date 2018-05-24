// C is for Cookie
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let x = 1; y < cookies.length; x++) {
  const currentCookie = cookies[y]
  console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}


// // Conjunction Function
// const conjunction = function (firstWord, secondWord) {
//   const conjoinedWord = `${firstWord} ${secondWord}`
// }

// conjunction("Master", "Card")
// console.log(conjoinedWord)


// // Mod Squad
// {
//   const ModSquad = {
//     "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"]
//         "series": {
//       "start": "1968",
//       "end": "1973"
//     }
//   }

//   const HTMLRepresentation = `<h1>The Mod Squad</h1>`

//   ModSquad.members.forEach(member => {
//     const HTMLRepresentation += `<div>${member}</div>`
//   })
// }

// document.querySelector(".show-info").innerHTML = HTMLRepresentation


// // Simon Says
// const locations = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3]]

// for (let k = 0; k < locations.length; k++) {
//   const currentLocation = locations[k]

//   if (currentLocation[0] > 2) {
//     const invalidLocation = true
//   }

//   if (invalidLocation) {
//     console.log("This location is invalid")
//   }
// }

// console.log(`There were ${k} locations displayed`)

// // Lambda Llama
// const llamaNamer = function () {
//   const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
//   const randomizer = Math.floor(Math.random() * 7)

//   const namer = function () {
//     const suffix = " the Llama"
//     const name = possibleNames[randomizer]
//   }

//   return name + suffix
// }

// nameMaker = llamaNamer()
// console.log(nameMaker())