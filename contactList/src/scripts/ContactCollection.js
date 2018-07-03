// A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto - generated identifier.
const ContactCollection = {
  saveCollection: (databaseObject, localStorageKey) => {
    const stringifiedDatabase  = JSON.stringify(databaseObject)
    localStorage.setItem(localStorageKey, stringifiedDatabase)
  },

  fetchCollection: (localStorageKey) => {
    const databaseString = localStorage.getItem(localStorageKey)
    if (databaseString) {
      return JSON.parse(databaseString);
    } else {
      return [];
    }
  }
}

module.exports = ContactCollection;