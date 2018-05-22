// Your job is to write a function that accepts any band name as an argument.The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

let currentNumOfBands = 0;

const takeNumber = (bandName) => {
  currentNumOfBands +=1;
  return `${currentNumOfBands}. ${bandName}`
}

let myth = takeNumber("Mythos Badass");
console.log(myth);