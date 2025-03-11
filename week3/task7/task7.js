const process = require("process");

const args = process.argv.slice(2);

if (args.length !== 3) {
  console.log("Use 2 numbers and the operation to perform");
  process.exit(1);
}
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);
const operation = args[2].toLowerCase();

if (isNaN(num1) || isNaN(num2)) {
  console.log("Enter valid numbers");
}
let result;
switch (operation) {
  case "add":
    result = num1 + num2;
    break;
  case "subtract":
    result = num1 - num2;
    break;
  case "multiply":
    result = num1 * num2;
    break;
  case "divide":
    if (num2 === 0) {
      console.log("Error: Division by zero is not allowed.");
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.log("Invalid operation");
    process.exit(1);
}
console.log(`The Result is ${result}`);
