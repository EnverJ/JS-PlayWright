// paren class  -- or suer class
class Vehicle {
  constructor(make, model, year) {
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
    console.log("driving the car" + this.model);
  }
}

class Truck extends Vehicle {
  constructor(make, model, year, LoadingCapacity) {
    super(make, model, year); // call the paren class constructor
    this.LoadingCapacity = LoadingCapacity;
  }
  driveCar() {
    console.log(
      "driving the truck" + this.model + " ,capacity: " + this.LoadingCapacity
    );
  }
}

// creating the object(instance): new keyword
const car = new Car("Honda", "Civic", 2023, "petrol");
const truck = new Truck("truck", "BMW", 1900, 25);
