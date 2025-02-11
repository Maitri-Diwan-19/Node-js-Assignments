//Create a program that demonstrates variable hoisting in JavaScript. 
// Declare variables using both var and let within functions and blocks, and then attempt to access these 
// variables before and after their declarations. Explain the behavior observed in the comments.




function hoistingfunc() {
    console.log("function scope");
    // Accessing 'var' before declaration (undefined)
    console.log("Before var declaration:");
    console.log(a);
  
    // Accessing 'let' before declaration (ReferenceError due to temporal dead zone)
    // console.log("Before let declaration:", b); // Uncaught ReferenceError: b is not defined
  
    var a = 10; // 'var' is hoisted and initialized to undefined
    let b = 20; // 'let' is hoisted but remains in the Temporal Dead Zone (TDZ) until assignment
     
     
    console.log("After declaration:");
     
    console.log(a); // Output: 10
    console.log(b); // Output: 20
  }
  hoistingfunc();
  
  console.log("Block Scope");
  if (true) {
    console.log("Before var declaration");
    // Accessing 'var' before declaration inside a block (undefined)
    console.log(c); 
    
    // Accessing 'let' before declaration inside a block (ReferenceError)
    // console.log("let before declaration:", d); // Uncaught ReferenceError
  
    var c = 30; // Hoisted to the function level (not block-scoped)
    let d = 40; // Block-scoped with temporal dead zone (TDZ)
     
    console.log("After declaration");
    console.log(c); // Output: 30
    console.log(d); // Output: 40
  }
  console.log("Outside block");
  
  console.log(c); // Output: 30 (still accessible)
  // console.log("Outside block, let:", d); // Uncaught ReferenceError: d is not defined

  
  /*
  1. var:
     - Hoisted to the top of its function or global scope.
     - Initializes to undefined when accessed before the declaration.
  
  2. let:
     - Hoisted but kept in the Temporal Dead Zone (TDZ) until initialized.
     - Block-scoped, so it cannot be accessed outside of its block.
     - Trying to access it before declaration results in a ReferenceError.
  */
  