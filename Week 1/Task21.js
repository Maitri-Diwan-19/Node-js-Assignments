//Create two objects user1 and user2 with similar properties.
//  Write a function compareObjects that compares the properties of both objects.
//  The function should log whether the objects are equal or not based on their properties.
//  Test the function with user1 and user2


const user1 = {
    name: "maitri",
    age: 20,
    city: "Ahmedabad"
  };
  
  const user2 = {
    name: "maitri",
    age: 20,
    city: "Ahmedabad"
  };
  
  // Function to compare objects using JSON.stringify
  function compareObjects(obj1, obj2) {
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
      console.log("Objects are equal");
    } else {
      console.log("Objects are not equal");
    }
  }
  
  
  compareObjects(user1, user2);
  