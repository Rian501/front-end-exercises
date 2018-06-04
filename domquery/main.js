// Use JavaScript to obtain a reference to the first article header 

const firstArtHead = document.querySelector('.article__header');

//and change its text with textContent property to "Welcome the {insert your name here} blog"

firstArtHead.textContent = "Welcome to the Borderlands";

// Use JavaScript to obtain a reference to all article__header elements 

const artHeadSet = document.querySelectorAll('.article__header');

//and change their classList property value to "article__header important".

artHeadSet.forEach((artHead) => {
  // console.log("for each does work", artHead);
  artHead.classList.add('important');
});


console.log(artHeadSet[1].classList);
//the output is a DOMtokenList which gives an array of the classes, and then a value that is just a string with them all
