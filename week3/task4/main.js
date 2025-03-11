// Importing CommonJS (sum.cjs)
import { createRequire } from "module"; // Required to use require in ES modules
const require = createRequire(import.meta.url);
const sum = require("./sum.cjs");

// Importing ES Module (multiply.mjs)
import { multiply } from "./multiply.mjs"; 

console.log("Sum is:", sum(2, 3));
console.log("Multiplication is:", multiply(2, 3));
