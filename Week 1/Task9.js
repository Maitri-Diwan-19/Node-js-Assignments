//Create a program that declares variables with different data types: a number (age), a string (name), and
// a boolean (isStudent). Perform operations like concatenating the name with a greeting, converting the
// age to a string, and combining the boolean value with a string to form a sentence. Print the results.

let age = 18;
let name = "Maitri";
let isStudent = true;

let greeting = "Hello " + name + "!" + " Welcome to the class";
console.log(greeting);

let result = age.toString();
console.log(result);

let sentence = `${name} is ${age} years old and ${
  isStudent ? "a student " : "not a student"
}`;
console.log(sentence);
