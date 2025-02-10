//Write a script that utilizes const for declaring constants.
//  Attempt to reassign values to these constants and observe the behavior. 
//  Include comments explaining the concept of immutability with const and when it is appropriate to use it.


const PI = 3.14159;
console.log("Value of PI:", PI);

// PI = 3.14; // re-assign is not allowed. TypeError: Assignment to constant variable

// Explanation: 
// The value of a const variable cannot be reassigned once it's defined.
// This ensures immutability for the variable binding, making the code more predictable.

// Appropriate use case:
// Constants like mathematical values or fixed configuration settings should be declared with const.
const MAX_USERS = 100;
console.log("Max allowed users:", MAX_USERS);

// Note: Objects declared with const can have mutable properties.
const user = { name: "Alice", age: 25 };
user.age = 26; // Allowed: Mutating properties of a const object
console.log("Updated user object:", user);

