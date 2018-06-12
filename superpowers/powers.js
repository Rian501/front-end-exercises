/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/

const flightClickHandler = (event) => {
  console.log('event', event);
  console.log('flight section', document.getElementById('flight'));
  console.log('classlist of section', document.getElementById('flight').classList);
  document.getElementById('flight').classList.toggle('disabled');
}

document.querySelector("#activate-flight").addEventListener('click', flightClickHandler);

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/


/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/