// function that returns a resoled promise

const resolvePromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved!!!");
    }, 1000);
  });
};

// function that returns a rejected promise
const rejectedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("rejected :) ");
    }, 500);
  });
};

// use Promise.race() tp see which promise settled first
Promise.race([resolvePromise(), rejectedPromise()])
  .then((result) => {
    console.log("Result: ", result);
  })
  .catch((error) => {
    console.log("Error ", error);
  });

// Error  rejected :)
