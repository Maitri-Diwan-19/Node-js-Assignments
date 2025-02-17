//Create an object called student with properties name, age, and an array grades.
//  Add a method named calculateAverage to the object, which calculates and returns the average of the grades.
// Iterate through the object properties using a loop and log each property and its value.
//  Call the calculateAverage method and log the result.

const student = {
  name: "Maitri",
  age: 20,
  grades: [85, 90, 78, 92, 88],

  calculateAverage: function () {
    const total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return total / this.grades.length;
  },
};

// Iterate through the object properties and log them
for (let property in student) {
  if (typeof student[property] != "function") {
    console.log(`${property}: ${student[property]}`);
  }
}

const average = student.calculateAverage();
console.log("Average grade:", average);
