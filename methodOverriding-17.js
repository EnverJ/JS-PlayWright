class Car {
  minSpeed = 100;
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  startEngine() {
    console.log("String engine .. for car");
  }
}

class Audi extends Car {
  minSpeed = 200;
  startEngine() {
    console.log("String engine .. for Audi");
  }

  autoParking() {
    console.log("this is Audi auto parking");
  }
}

const audi = new Audi();
audi.startEngine(); // String engine .. for Audi
audi.autoParking(); // this is Audi auto parking
console.log(audi.minSpeed); // 100 // if child have speed limit then 200

// hwo if object of parent class
const car = new Car();
car.startEngine(); // String engine .. for car
// car.autoParking(); // TypeError: car.autoParking is not a function
