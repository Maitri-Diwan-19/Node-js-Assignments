//Define an object called calculator with properties x and y. Add a method named calculate to the object,
// which takes an operation string ("add", "subtract", "multiply", "divide") and uses an arrow function
//  to perform the corresponding operation on x and y. Inside the arrow function, use the "this" keyword
// to access the object properties. Test the calculator with different operations.

const calculator = {
  x: 60,
  y: 30,

  calculate: function (operation) {
    const performOperation = () => {
      switch (operation) {
        case "add":
          return this.x + this.y;
        case "subtract":
          return this.x - this.y;
        case "multiply":
          return this.x * this.y;
        case "divide":
          return this.y !== 0 ? this.x / this.y : "Cannot divide by zero";
        default:
          return "Invalid operation";
      }
    };
    return performOperation();
  },
};

console.log("Addition:", calculator.calculate("add"));
console.log("Subtraction:", calculator.calculate("subtract"));
console.log("Multiplication:", calculator.calculate("multiply"));
console.log("Division:", calculator.calculate("divide"));
