// You're going to create a simple list of chat messages that you might have with one of your family members. Maybe it's that wacky aunt that you see every Christmas and Fourth of July.

// Put an article DOM element in your index.html with the id attribute value of messages.
// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
let messArtElement = document.querySelector('#messages');

// Create five(5) section elements, each with a class of message, and with textContent of your choosing.

const m1 = document.createElement('section')
m1.setAttribute('class', 'message');
m1.textContent = "Hey Aunt Denise, what's up?";
const m2 = document.createElement('section')
m2.setAttribute('class', 'message')
m2.textContent = "Hey Emily, how are you?"
const m3 = document.createElement('section')
m3.setAttribute('class', 'message')
m3.textContent = "Pretty good. I hear you moved back up to Pennsylvania."
const m4 = document.createElement('section')
m4.setAttribute('class', 'message')
m4.textContent = "Yeah, just wanted a change of scenery."
const m5 = document.createElement('section')
m5.setAttribute('class', 'message')
m5.textContent = "Well, see you around. Let me know if you end up back in GA again."

// // Using appendChild(), attach each message as a child to the messages element.
// messArtElement.appendChild(m1);
// messArtElement.appendChild(m2);
// messArtElement.appendChild(m3);
// messArtElement.appendChild(m4);
// messArtElement.appendChild(m5);



//REFACTORED to use document fragment:
const fragment = document.createDocumentFragment()

fragment.appendChild(m1);
fragment.appendChild(m2);
fragment.appendChild(m3);
fragment.appendChild(m4);
fragment.appendChild(m5);

messArtElement.appendChild(fragment);