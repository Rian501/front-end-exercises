// Use Object.create() to define objects for every place that you've worked before NSS.


const FRA = Object.create({}, {
  business: {
    enumerable: true,
    writable: false,
    value: "Private K-12 Academy"
  },
  role: {
    enumerable: true,
    writable: false,
    value: "Substitute Teacher"
  },
  startDate: {
    enumerable: true,
    writable: false,
    value: "August 2016"
  },
  endDate: {
    enumerable: true,
    writable: false,
    value: "May 2017"
  }
})

let jobsArr = [FRA];

// Challenge
// Write a function that will build, and return, a job object.Make sure you define an argument for each one of the properties you want to be in the object.

const jobMaker = (business, role, start, end) => {
  let job = Object.create({}, {
    business: {
      enumerable: true,
      writable: false,
      value: business
    },
    role: {
      enumerable: true,
      writable: false,
      value: role
    },
    startDate: {
      enumerable: true,
      writable: false,
      value: start
    },
    endDate: {
      enumerable: true,
      writable: false,
      value: end
    }
  })
  jobsArr.push(job);
  return job;
}

jobMaker("PrepSource", "tutor", "December 2016", "May 2018");
jobMaker("JET Programme/Shiso-shi BOE", "English Teacher", "August 2009", "August 2012");

// Advanced Challenge
// Put each of your jobs into an array.
console.log('jobs array', jobsArr);
// Iterate over the array, and use document.createElement() to build an < article > element representing each job.The id property of the element should be the name of the business.
const theDOM = document.querySelector('#mainContent');
jobsArr.forEach((job) => {
  let zeesJob = document.createElement('article');
  let info = document.createTextNode(`At ${job.business} I was a ${job.role} from ${job.startDate} til ${job.endDate}`);
  zeesJob.appendChild(info);
  zeesJob.setAttribute('id', job.business);
  theDOM.appendChild(zeesJob);
});