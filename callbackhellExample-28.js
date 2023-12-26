// Start the coffee machine. - 2 seconds
// Grind coffee beans. -
// Boil the water - 1.5
// Pour boiling water into a cup. -0.5
// Add ground coffee to the cup. -0.5
// Stir the coffee. -0.3
// Enjoy your coffee!!!

function startCoffeeMachine(callback) {
  console.log("Starting the coffee machine ...");
  setTimeout(function () {
    console.log("Coffee machine is ready.");
    callback("Coffee machine is ready");
  }, 2000);
}

function grindCoffeeBeans(callback) {
  console.log("Grinding coffee beans...");
  setTimeout(function () {
    console.log("Coffee beans are ground.");
    callback("ground coffee");
  }, 1000);
}

function boilWater(callback) {
  console.log("Boiling water...");
  setTimeout(function () {
    console.log("Water is boiled. ");
    callback("Boiled water");
  }, 1500);
}

function pourBoilingWaterIntoCup(boiledWater, callback) {
  console.log("Pouring boiling water into a cup...");
  setTimeout(function () {
    console.log("Boiling water is in the cup.");
    callback(boiledWater + " in cup");
  }, 500);
}

function addCoffeeToCup(groundCoffee, callback) {
  setTimeout(function () {
    console.log("coffee is added to the cup.");
    callback("coffee is added to " + groundCoffee);
  }, 500);
}

function stirCoffee(coffeeInCup, callback) {
  console.log("Stirring the coffee...");
  setTimeout(function () {
    console.log("Coffee is stirred.");
    callback("enjoyable " + coffeeInCup);
  }, 300);
}

function enjoyCoffee(finalCoffee) {
  console.log("Enjoying my coffee " + finalCoffee);
}

// Grind coffee beans. -
// Boil the water - 1.5
// Pour boiling water into a cup. -0.5
// Add ground coffee to the cup. -0.5
// Stir the coffee. -0.3
// Enjoy your coffee!!!

startCoffeeMachine(function (coffeeMachineStatus) {
  grindCoffeeBeans(function (groundCoffee) {
    boilWater(function (boiledWater) {
      pourBoilingWaterIntoCup(boiledWater, function (waterInCup) {
        addCoffeeToCup(groundCoffee, function (coffeeInCup) {
          stirCoffee(coffeeInCup, function (finalCup) {
            enjoyCoffee(finalCup);
          });
        });
      });
    });
  });
});

// Starting the coffee machine ...
// Coffee machine is ready.
// Grinding coffee beans...
// Coffee beans are ground.
// Boiling water...
// Water is boiled.
// Pouring boiling water into a cup...
// Boiling water is in the cup.
// coffee is added to the cup.
// Stirring the coffee...
// Coffee is stirred.
// Enjoying my coffee enjoyable coffee is added to ground coffee
