//Develop a script that uses an array to store the days of the week. Use array methods such as push, pop,
//  shift, or unshift to modify the array. Print the array after each modification. 
// Additionally, use the indexOf method to find the index of a specific day.

let arr =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
console.log("Before pop operation:",arr);
arr.pop();
arr.pop();
console.log("After pop operation:",arr);

arr.push("friday");
console.log("push operation:",arr);

arr.shift();
console.log("After shift operation:",arr);

arr.unshift("saturday");
console.log("After Unshift:",arr);

let index= arr.indexOf("wednesday");
console.log("Index of wednesday is:",index);