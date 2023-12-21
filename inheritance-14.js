// class Cycle {
//   constructor(make, year) {
//     this.make = make;
//     this.year = year;
//   }
// }
// multiple inheritance are not allowed in JavaScript(same java)

class Automobile {
  constructor(chaisesNumber) {
    this.chaisesNumber = chaisesNumber;
  }
  useAeroDynamic() {
    console.log("Automobile -- aerodynamics " + this.chaisesNumber);
  }
}

// paren class  -- or super class
class Vehicle extends Automobile {
  constructor(make, model, year) {
    super(1000);
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getInfo() {
    return `${this.make},${this.model},${this.year}`;
  }

  startEngine() {
    console.log("engine start");
  }
  stopEngine() {
    console.log("engine stop");
  }
}

// child class
class Car extends Vehicle {
  constructor(make, model, year, fuelType) {
    super(make, model, year); // call the paren class constructor
    this.fuelType = fuelType;
  }
  driveCar() {
    console.log("driving the car " + this.model);
  }
}

class Truck extends Vehicle {
  constructor(make, model, year, LoadingCapacity) {
    super(make, model, year); // call the paren class constructor
    this.LoadingCapacity = LoadingCapacity;
  }
  driveTruck() {
    console.log(
      "driving the truck" + this.model + " ,capacity: " + this.LoadingCapacity
    );
  }
}

// creating the object(instance): new keyword
const car = new Car("Honda", "Civic", 2023, "petrol");
const truck = new Truck("truck", " BMW", 1900, 25);

car.startEngine();
console.log(car.getInfo());
car.driveCar();
car.stopEngine();

// access grandParents
car.useAeroDynamic();

console.log("--------Truck--------");
truck.startEngine();
console.log(truck.getInfo());
truck.driveTruck();

// access grandParents
truck.useAeroDynamic();

// engine start
// Honda,Civic,2023
// driving the car Civic
// engine stop
// Automobile -- aerodynamics 1000
// --------Truck--------
// engine start
// truck, BMW,1900
// driving the truck BMW ,capacity: 25
// Automobile -- aerodynamics 1000
