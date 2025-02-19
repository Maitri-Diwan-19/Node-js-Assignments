//Create Car constructor function that takes parameters such as name, brand, and year.
//  Include a method displayInfo that prints the car details. Create an instance using the constructor function 
// and call the displayInfo method.


function Car(name,brand,year){
    this.name=name;
    this.brand=brand;
    this.year=year;
 
    this.displayInfo = function(){
        console.log(`Car Name:${this.name},Brand Name:${this.brand},Year:${this.year} `);
    };
}

const myCar = new Car("Model S", "Tesla", 2022);

myCar.displayInfo();  