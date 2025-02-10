//Develop a program that highlights the differences in scoping between let and var. 
// Create a block-scoped variable using let and a function-scoped variable using var. 
// Attempt to access these variables outside their respective scopes and explain the results in the comments.



function sum() {
    let a = 5; // Block-scoped
    var b = 3; // Function-scoped
    let sum = a + b;
    console.log("Initial sum inside function:", sum);

    if (true) {
        let x = 12; // Block-scoped
        let a = 10; // This is a new block-scoped 'a', different from the outer 'a'
        var b = 6; // Re-declares 'b', but it's function-scoped, so it affects the outer 'b'

        sum = a + b;
        console.log("Sum inside block:", sum);
        console.log("Block-scoped variable x:", x); // Accessible inside this block
    }

    console.log("Outside block:");
    // console.log(x); // ReferenceError: x is not defined because 'let' is block-scoped
    console.log("Updated sum outside block:", sum); // Function-scoped 'b' update persists
    console.log("Function-scoped variable b:", b); // Value persists due to var scoping
}

sum();
