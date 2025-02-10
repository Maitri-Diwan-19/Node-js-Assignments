//Write a JavaScript program with comments explaining the differences between let, var, and const in terms 
// of variable declaration. Include examples that showcase the scope of each type of variable and any restrictions
//  they might have.



// Global Scope Example
var a = 3; // Function-scoped, not block-scoped
let b =4; // Block-scoped
const c = 5; // Block-scoped and immutable

console.log("Global Scope:");
console.log(a); 
console.log(b);
console.log(c); 

function scopeExample() {
  console.log("Function Scope:");

  // Function-scoped example
  var a = 44;
  console.log(a); 

  if (true) {
    var a = 55;
    let b = 33;
    const c = 22;

    console.log("Inside Block:");
    console.log(a);
    console.log(b);
    console.log(c);
  }

  console.log("Outside Block:");
  console.log(a); 
  // console.log(b); // ReferenceError: Block-scoped variable
  // console.log(c); // ReferenceError: Block-scoped variable
}
scopeExample();


// let
let x = 10;
x = 20; // Re-assignment Allowed 
//let x = 30; // Re-declaration not allowed
console.log("let example:", x);

// var
var y = 5;
var y = 15; // Re-declaration allowed
y = 25; // Re-assignment also allowed
console.log("var example:", y);

// const
const z = 50;
// z = 60; // Re-assignment not allowed
// const z = 70; // Re-declaration not allowed
console.log("const example:", z);
