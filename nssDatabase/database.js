const saveDatabase = (databaseObject, localStorageKey) => {
  const stringifiedDatabase = JSON.stringify(databaseObject);
  localStorage.setItem(localStorageKey, stringifiedDatabase)
}

const loadDatabase = (localStorageKey) => {
  let storedStuff = localStorage.getItem(localStorageKey);
  let parsedStuff = JSON.parse(storedStuff);
  return parsedStuff;
}

// let NssDatabase;
let NssDatabase = loadDatabase("NSS Database");

if (!NssDatabase) {
  NssDatabase = {}
  NssDatabase.staff=[];
}