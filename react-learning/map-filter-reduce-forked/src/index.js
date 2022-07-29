import emojipedia from "./emojipedia.js";

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

//Map -Create a new array by doing something with each item in an array.

let newNubmers1 = numbers.map(function (x) {
  return x * 2;
});

console.log("map:  " + newNubmers1);

//Filter - Create a new array by keeping the items that return true.

let newNumbers2 = numbers.filter(function (num) {
  return num > 10;
});
console.log("filter: " + newNumbers2);

//Reduce - Accumulate a value by doing something to each item in an array.

let newNumbers3 = numbers.reduce(function (accumulator, currentNumber) {
  console.log("accumulator = " + accumulator);
  console.log("currentNumber = " + currentNumber);
  return accumulator + currentNumber;
});

console.log("reduce: " + newNumbers3);

//Find - find the first item that matches from an array.

let newNumbers4 = numbers.find(function (num) {
  return num > 10;
});

console.log("find: " + newNumbers4);

//FindIndex - find the index of the first item that matches.

let newNumbers5 = numbers.findIndex(function (num) {
  return num > 10;
});

console.log("find: " + newNumbers5);

// practice

let meanings = emojipedia.map(function (emoji) {
  console.log(emoji.meaning.substring(0, 100));
  return emoji.meaning.substring(0, 100);
});
console.log(meanings);
