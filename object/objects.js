// Your job is to define the different objects and resources, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.

// Her congressional district(you can use yours here)

const congressionalDistrict = {
  districtNumber: 5,
  currentRep: "Jim Davis"
}

// Her platform statements for the following issues.
//   Taxes
// Jobs
// Infrastructure
// Health care
// Crime and enforcement

const platformQuotes = {
  taxes: "Always on the up and up!",
  jobs: "Working is better than not working.",
  Infrastructure: "If we build it, they will come.",
  healthcare: "You're fine.",
  crimeEnforcement: "More cops but less rules."
}

// URL for donation form

let donationURL = {
  corporations: "www.give4change.org",
  individuals: "www.giveempower.org"
}

// Calendar of events

const calendar = {
  rally1: "2018-04-21",
  fundraisingDinner: "2018-05-30"
}

// Volunteer information
// Name
// Address
// Email
// Phone number
// Availability
// What activities each one is willing to do (e.g.answering phone calls, taking polls, etc.)

const volunteer = {
  name: "Eric Kramer",
  address: "1234 West Avenue, Nashville, TN  37608",
  email: "thekrae@gmail.com",
  phone: "444-444-4444",
  availability: {
    M: "none",
    Tu: "none",
    W: "none",
    Th: "none",
    F: "none",
    Sa: "all day",
    Su: "all day"
  },
  activities: ["answering phone calls", "taking polls"]
}

// Biography

let bio = {
  bornLoc: "Memphis",
  schooling: "some highschool",
  jobs: ["hard jobs from her past", "easier jobs"],
  goals: "great things"
}

// Image gallery
// Head shot
// Picture of family
// Picture of constituents

const imgGallery = {
  headShot: "http://www.imgholder.com/imgurl",
  family: "http://www.imgholder.com/2imgurl",
  constituents: "http://www.imgholder.com/22imgurl"
}

// Mission statement

const missionStat = {
  mission: "Making the world safe for karate kids.",
  quote: "Keep chasing your dreams",
  quoteAuthor: "your sister"
}

// URL for registering to vote

const voteURL = {
  TNvoters: "some.url.com",
  otherVoters: "some.other.url.com"
}

// After you have defined all the objects for representing the data, write a corresponding function for each one whose purpose is to change the state of the object.Then invoke each function, and pass a reference to the correct object to it and modify a property.


function changeObjState(anyObject, thePropertyToChange, theNewValue) {
  anyObject.thePropertyToChange = theNewValue;
};


// Use document.createElement() to build an < article > element representing Elizabeth.The id property of the element should be her congressional district, and its content should be her platform data.Once the element has been created, insert it into the DOM.