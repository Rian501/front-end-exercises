/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/

const activateFlight = (event) => {
  console.log('event', event);
  console.log('flight section', document.getElementById('flight'));
  console.log('classlist of section', document.getElementById('flight').classList);
  document.getElementById('flight').classList.remove('disabled');
  document.getElementById('flight').classList.add('enabled');
  console.log('classlist of section AFTER TOGGLE', document.getElementById('flight').classList);
}

document.querySelector("#activate-flight").addEventListener('click', activateFlight);

/*
Now write two more event handlers that activate the other two powers
when the corresponding buttons are clicked.
*/

const activateMindread = () => {
  document.getElementById('mindreading').classList.remove('disabled');
  document.getElementById('mindreading').classList.add('enabled');
}

const activateXray = () => {
  document.getElementById('xray').classList.remove('disabled');
  document.getElementById('xray').classList.add('enabled');
}


document.querySelector("#activate-mindreading").addEventListener('click', activateMindread);
document.querySelector("#activate-xray").addEventListener('click', activateXray);

/*
Write two more event handlers for activating and deactivating all powers
when the corresponding buttons are clicked. You will need to use the
`document.querySelectorAll()` method for these.
*/

const activateAll = () => {
  let currentlyDisabledPowers = document.querySelectorAll('.disabled');
  currentlyDisabledPowers.forEach( (power) => {
    power.classList.remove('disabled');
    power.classList.add('enabled');
  })
}

const deactivateAll = () => {
  let currentlyEnabledPowers = document.querySelectorAll('.enabled');
  currentlyEnabledPowers.forEach( (power) => {
    power.classList.remove('enabled');
    power.classList.add('disabled');
  })
}

document.querySelector("#activate-all").addEventListener('click', activateAll);
document.querySelector("#deactivate-all").addEventListener('click', deactivateAll);
