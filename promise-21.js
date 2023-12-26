const randomNumberPromise = new Promise((resolve, reject) => {
  // async operations
  setTimeout(() => {
    const randomValue = Math.random();
    if (randomValue > 0.5) {
      resolve(randomValue);
    } else {
      reject(new Error("value is too small"));
    }
  }, 2000);
});

randomNumberPromise
  .then((result) => {
    console.log("promise is fulfilled with the value " + result);
  })
  .catch((error) => {
    console.log("your promise is rejected with error ", error);
  });
