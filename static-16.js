class Car {
  static wheels = 4;

  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
    // this.wheels = 400;  this can be removed
  }
  static stop() {
    console.log("car --- stop");
  }

  drive() {
    console.log(this.name + " is driving");
  }
}

const car1 = new Car("Honda", 2023, 50);
console.log(`${car1.name}`, `${car1.model}`, `${car1.price}`, `${Car.wheels}`); //Honda 2023 50 4
console.log(`${car1.wheels}`); // 4
//car1.stop(); // TypeError: car1.stop is not a function
Car.stop(); // car --- stop
car1.drive(); // Honda is driving
//Car.drive(); // TypeError: Car.drive is not a function

// static car/function: call it by using class name
// non static var/function: call it by using object reference name

//console.log(wheels); // ReferenceError: wheels is not defined
console.log(Car.wheels); // 4
