//Develop a script that employs the reduce function to find the sum of all elements in an array.
// Print the original array and the final sum.

const arr = [11, 22, 33, 44, 55];
console.log("Original array:", arr);

const newarr = arr.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue;
});
console.log("After Modification:", newarr);
