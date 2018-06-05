
const addButton = document.querySelector('#addBtn');

const staffArticle = document.querySelector('#staff');

const staffFragment = document.createDocumentFragment();

console.log('nss database', NssDatabase);


let buildDOMlist = () => {
  while (staffArticle.firstChild) {
    staffArticle.removeChild(staffArticle.firstChild);
  }
  
  NssDatabase.staff.forEach((person) => {
    const sectionElement = document.createElement('section');
    sectionElement.textContent = `${person.name}: ${person.cohort}`;
    staffFragment.appendChild(sectionElement);
  })
  staffArticle.appendChild(staffFragment);
}

if (NssDatabase) {
  buildDOMlist();
}

const getUserInput = () => {
  console.log("event?", event);

  const inputName = document.querySelector('#staffName');
  const inputCohort = document.querySelector('#cohortInput');
  console.log('input fields', inputCohort, inputName);

  const newStaffMember = {
    name: inputName.value,
    cohort: inputCohort.value
  }
  inputName.value='';
  inputCohort.value='';
  NssDatabase.staff.push(newStaffMember)
  console.log('nss database', NssDatabase);
  saveDatabase(NssDatabase, "NSS Database");
  buildDOMlist();
}

addButton.addEventListener('click', getUserInput);