//Write a JavaScript program that uses the map function to transform an array of numbers.
// Square each element in the array and create a new array with the squared values.
// Print both the original and transformed arrays.

const arr = [1, 2, 3, 4, 5, 6];
console.log("Original array:", arr);

const newarr = arr.map((i) => {
  return i * i;
});
console.log("Modified array:", newarr);
