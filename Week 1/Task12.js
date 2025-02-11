//Create a program that utilizes the filter function to extract even numbers from an array of integers.
// Print the original array and the filtered array containing only even numbers.

// const arr=[1,2,3,4,6,7,9,8,10];
// console.log("Original array:",arr);

// function checkeven(arr){
//     return arr%2==0;

// }
// const newarr= arr.filter(checkeven);
// console.log(newarr);

const arr = [1, 2, 3, 4, 6, 7, 9, 8, 10];
console.log("Original array:", arr);

const newarr = arr.filter((num) => {
  return num % 2 == 0;
});
console.log("Modified array:", newarr);
