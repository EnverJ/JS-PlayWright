class Car {
  // variable are  available by default
  constructor(name, price, model, color) {
    this.name = name;
    this.price = price;
    this.model = model;
    this.color = color;
  }

  // method
  refuel() {
    console.log(this.name + " car is refueled");
  }
}

// new keyword: in order to create an object
const c1 = new Car("toyota", 40000, "2023", "white");
console.log(c1.name); // tesla
c1.refuel(); // toyota car is refueled

const c2 = new Car("honda", 20000, "2023", "black");
console.log(c2.name);
console.log(c2.price);
console.log(c2.model);
console.log(c2.color);
// honda
// 20000
// 2023
// black
