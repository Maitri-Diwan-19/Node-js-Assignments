//Create two objects named originalObject and modifiedObject.
// Assign the same properties to both objects. Modify one property in modifiedObject and observe
// how it affects the other object due to reference. Log the properties of both objects to the console.

const originalObject = {
  name: "Maitri",
  age: 20,
};

const modifiedObject = originalObject;
console.log("modified obj", modifiedObject);

modifiedObject.age = 25;
console.log("original obj", originalObject); //age:25
console.log("modified obj", modifiedObject); //age:25

//modified version
const originalObject1 = {
  name: "Maitri",
  age: 22,
};

// Clone the original object to create a separate object
const modifiedObject1 = { ...originalObject1 };

modifiedObject1.age = 30;

console.log("Original Object:", originalObject1); // age:22
console.log("Modified Object:", modifiedObject1); // age:30
