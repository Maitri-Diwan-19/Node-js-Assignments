//Create a constructor function called Person that takes name and age as parameters and assigns them as properties.
//  Add a method greet to the prototype of the constructor, which logs a greeting message using the person's name.
//  Instantiate two objects using the Person constructor and call the greet method on both.

function Person(name, age) {
  this.name = name;
  this.age = age;

  Person.prototype.greet = function () {
    console.log(`Hello my name is ${this.name}`);
  };
}

const person1 = new Person("Maitri", 20);
const person2 = new Person("Binal", 25);

person1.greet();
person2.greet();
