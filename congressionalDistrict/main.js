console.log('Woooooooo, main.js is hooked up!');


let repComponent = document.querySelector('#mainRepComponent');

let newSection = document.createElement("section");
// newSection.innerHTML = '<p>Win win win</p>'
let missionStatement = document.createTextNode("Win at all costs.");
newSection.appendChild(missionStatement);

repComponent.appendChild(newSection);



//challenge 2
let customAtt = document.createAttribute("congressional-district"); // Create a custom attribute
customAtt.value = "5";   //the value is that of my district
repComponent.setAttributeNode(customAtt); // Add the attribute to the article (made into a variable above)