// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let nextSentence = ["Your", "face", "really", "smells", "like", "dog", "buns"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement(theWordArray, puncMark) {

  // Each time the for loop executes, you're going to add one more word to this string
  let buildMeUp = "";
  let marks = "";
  for (let i = 1; i < theWordArray.length+1; i++) {
    buildMeUp = `${buildMeUp} ${theWordArray[i-1]}`
    if (i%3===0) {
      marks += puncMark
      buildMeUp += marks;
    }
    console.log(buildMeUp);
  }

}

// Invoke the function and pass in the array
// addExcitement(sentence)


// Then add logic to addExcitement that places an exclamation point(!) after every third word.This will require you to do some basic math in JavaScript, and use an if statement.

// Your job is to read the following English statement and write the equivalent in JavaSript code to make it work.


// I want to use a question mark
addExcitement(sentence, "?");
addExcitement(nextSentence, "&");