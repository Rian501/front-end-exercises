// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

let bandNumber = 0;

const takeNumber = function (bandName) {
  bandNumber = bandNumber + 1;
  // bandNumber +=1;
  // bandNumber++;
  return `${bandNumber}. ${bandName}`; // if it sees a return statement, it returns to the call site (the point at which it was called)
}

const scum = takeNumber("Galactic Scum");
console.log(scum);  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs");
console.log(under);  // This should print "2. Underdogs" in the console




























// let currentNumOfBands = 0;

// const takeNumber = (bandName) => {
//   currentNumOfBands +=1;
//   return `${currentNumOfBands}. ${bandName}`
// }

// let myth = takeNumber("Mythos Badass");
// console.log(myth);