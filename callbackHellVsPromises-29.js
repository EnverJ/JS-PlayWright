// Start the coffee machine. - 2 seconds
// Grind coffee beans. -
// Boil the water - 1.5
// Pour boiling water into a cup. -0.5
// Add ground coffee to the cup. -0.5
// Stir the coffee. -0.3
// Enjoy your coffee!!!

function startCoffeeMachine() {
  return new Promise((resolve) => {
    console.log("Starting the coffee machine ...");
    setTimeout(() => {
      console.log("Coffee machine is ready.");
      resolve("Coffee machine is ready");
    }, 2000);
  });
}

function grindCoffeeBeans() {
  return new Promise((resolve) => {
    console.log("Grinding coffee beans...");
    setTimeout(() => {
      console.log("Coffee beans are ground.");
      resolve("ground coffee");
    }, 1000);
  });
}

function boilWater() {
  return new Promise((resolve) => {
    console.log("Boiling water...");
    setTimeout(() => {
      console.log("Water is boiled. ");
      resolve("Boiled water");
    }, 1500);
  });
}

function pourBoilingWaterIntoCup(boiledWater) {
  return new Promise((resolve) => {
    console.log("Pouring boiling water into a cup...");
    setTimeout(() => {
      console.log("Boiling water is in the cup.");
      resolve(boiledWater + " in cup");
    }, 500);
  });
}

function addCoffeeToCup(groundCoffee) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("coffee is added to the cup.");
      resolve("coffee is added to " + groundCoffee);
    }, 500);
  });
}

function stirCoffee(coffeeInCup) {
  return new Promise((resolve) => {
    console.log("Stirring the coffee...");
    setTimeout(() => {
      console.log("Coffee is stirred.");
      resolve("enjoyable " + coffeeInCup);
    }, 300);
  });
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

// startCoffeeMachine(function (coffeeMachineStatus) {
//   grindCoffeeBeans(function (groundCoffee) {
//     boilWater(function (boiledWater) {
//       pourBoilingWaterIntoCup(boiledWater, function (waterInCup) {
//         addCoffeeToCup(groundCoffee, function (coffeeInCup) {
//           stirCoffee(coffeeInCup, function (finalCup) {
//             enjoyCoffee(finalCup);
//           });
//         });
//       });
//     });
//   });
// });

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
// console.log("------------ callback hell with arrow => --------------");
// // callback hell with arrow =>
// startCoffeeMachine((coffeeMachineStatus) => {
//   grindCoffeeBeans((groundCoffee) => {
//     boilWater((boiledWater) => {
//       pourBoilingWaterIntoCup(boiledWater, (waterInCup) => {
//         addCoffeeToCup(groundCoffee, (coffeeInCup) => {
//           stirCoffee(coffeeInCup, (finalCup) => {
//             enjoyCoffee(finalCup);
//           });
//         });
//       });
//     });
//   });
// });

// ------------ callback hell with arrow => --------------
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

// Promises Chaining
startCoffeeMachine((coffeeMachineStatus) => {
  console.log(coffeeMachineStatus);
  return grindCoffeeBeans();
})
  .then((groundCoffee) => {
    console.log(groundCoffee);
    return boilWater();
  })
  .then((boiledWater) => {
    console.log(boiledWater);
    return pourBoilingWaterIntoCup(boiledWater);
  })
  .then((waterInCup) => {
    console.log(waterInCup);
    return addCoffeeToCup(waterInCup);
  })
  .then((coffeeInCup) => {
    console.log(coffeeInCup);
    return stirCoffee(coffeeInCup);
  })
  .then((finalCoffee) => {
    enjoyCoffee(finalCoffee);
  })
  .catch((error) => {
    console.log("Error occurred ", error);
  });

//   Starting the coffee machine ...
// Coffee machine is ready.
// Coffee machine is ready
// Boiling water...
// Water is boiled.
// Boiled water
// Pouring boiling water into a cup...
// Boiling water is in the cup.
// Boiled water in cup
// coffee is added to the cup.
// coffee is added to Boiled water in cup
// Stirring the coffee...
// Coffee is stirred.
// Enjoying my coffee enjoyable coffee is added to Boiled water in cup
