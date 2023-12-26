function getEvenNumber(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value % 2 == 0) {
        resolve(value);
      } else {
        reject(new Error("Value is not an even number"));
      }
    }, delay);
  });
}

// promise chain
getEvenNumber(41, 1000)
  .then((result) => {
    console.log("step 1: getting the result with even number ", result);
    return getEvenNumber(8, 2000);
  })
  .then((result) => {
    console.log("step 2: getting result with even number number ", result);
  })
  .catch((error) => {
    console.log("promise chain error", error);
  });
