//Create an object called originalPerson with properties name, age, and an array hobbies.
//  Use both shallow copy and deep copy techniques to create a new object called shallowCopyPerson
//  and deepCopyPerson. Modify the hobbies array in one of the copies and observe how it affects
// the original object. Log the properties of all three objects.

const originalPerson = {
  name: "Maitri",
  age: 20,
  hobbies: ["dancing", "singing", "drawing"],
};

const shallowCopyPerson = Object.assign({}, originalPerson);
console.log("Shallow copy", shallowCopyPerson);

shallowCopyPerson.hobbies[1] = "reading";
console.log("After modification");
console.log("original obj", originalPerson);
console.log("shallow copy", shallowCopyPerson);

console.log("Deep copy");

const deepCopyPerson = JSON.parse(JSON.stringify(originalPerson));
deepCopyPerson.hobbies[0] = "cooking";
console.log("Original obj:", originalPerson);
console.log("Deep copy", deepCopyPerson);
