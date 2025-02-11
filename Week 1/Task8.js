//Create a document outlining best practices for variable declaration in modern JavaScript.
// Include guidelines on when to use let, var, or const, taking into consideration block scoping, hoisting, and
// the immutability of constants. Provide code examples to illustrate each best practice.

// Best Practices for Variable Declaration in JavaScript

function BestPractice() {
  // 1. Use const by default for variables that do not change
  const greeting = "Hello, world!";
  // greeting = 'New greeting'; // Uncommenting will throw an error

  // 2. Use let for block-scoped variables
  let temperature = 72;
  if (true) {
    let temperature = 60; // Block-scoped variable
    console.log(`Inside block: ${temperature}`); // Output: Inside block: 60
  }
  console.log(`Outside block: ${temperature}`); // Output: Outside block: 72

  // 3. Avoid var (use let or const instead)
  let counter = 100;
  console.log(`Counter: ${counter}`); // Output: Counter: 100

  // 4. Hoisting behavior: let and const in Temporal Dead Zone
  try {
    console.log(a); // ReferenceError
  } catch (e) {
    console.log(e); // Output: ReferenceError: Cannot access 'a' before initialization
  }
  let a = 5;
  console.log(a); // Output: 5

  // 5. Use const for objects when reference shouldn't change
  const userInfo = { name: "Alice", age: 28 };
  userInfo.age = 29; // Allowed: modifying object content
  console.log(userInfo); // Output: { name: 'Alice', age: 29 }
}

BestPractice();
