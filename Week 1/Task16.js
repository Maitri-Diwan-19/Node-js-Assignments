//Create a constructor function named Car that takes a brand parameter. Inside the constructor,
// create an object property carInfo with a nested method named displayInfo.
// The displayInfo method should use the "this" keyword to access both the brand property of the object and
// a parameter passed to the displayInfo method. Instantiate a Car object and call the displayInfo method.

function Car(brand) {
  this.brand = brand;

  this.carInfo = {
    displayInfo: function (color) {
      console.log(`The car brand is ${this.brand} and the color is ${color}.`);
    },
  };
}

const myCar1 = new Car("Toyota");

// Call the displayInfo method directly on the carInfo object
myCar1.carInfo.displayInfo("red"); // Output: The car brand is undefined and the color is red.

function Car(brand) {
  this.brand = brand;

  this.carInfo = {
    displayInfo: function (color) {
      console.log(`The car brand is ${this.brand} and the color is ${color}.`);
    },
  };
}

// Instantiate a new Car object
const myCar = new Car("Toyota");

myCar.carInfo.displayInfo.call(myCar, "red");
