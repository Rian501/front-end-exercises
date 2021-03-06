const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const sectionEl = document.createElement('section');
let planetString = '';

planets.forEach((planet) => {
  planetString += ` 
    <p>${planet}</p>
  `;
})


sectionEl.innerText = planetString;

const planetEl = document.getElementById("planets");
planetEl.appendChild(sectionEl);


/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const UpCasePlanets = planets.map((planet) => {
  return planet[0].toUpperCase() + planet.slice(1);
})

console.log(UpCasePlanets);


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

let EEsArr = planets.filter( (planetString) => {
  return planetString.includes('e');
})

console.log('eees', EEsArr);


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const reducedSent = words.reduce((buildStr, nextWord) => {
  return `${buildStr} ${nextWord}`
})

console.log('reduced', reducedSent);
