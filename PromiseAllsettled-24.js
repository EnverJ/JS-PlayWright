// promise.allSettled():
// behavior:

// it returns a single promise that is fulfilled with an array of result objects, one for each promise.
// each result object contains:
// a status (either "fulfilled" or "rejected") an
// a value (fulfilled value ) or reason (rejection reason).

// use case:
// useful when want to process all promises, wether they succeed or fail,
// and you want to gather information about the outcomes of each promise.

// case 2:
// f1 -- resolved
// f2 -- rejected

const getData1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data from function 2");
    }, 2000);
  });
};

const getError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error: data is not available get error");
    }, 2000);
  });
};

// Promise.all([getData1(), getError()])
//   .then((dataArray) => {
//     console.log("All data fetched: " + dataArray);
//   })
//   .catch((error) => {
//     console.log("error occurred " + error);
//   });

Promise.allSettled([getData1(), getError()]).then((results) => {
  results.forEach((result) => {
    if ((result.status = "fulfilled")) {
      console.log("value: " + result.value);
    } else {
      console.error("reason for rejection: ", result.reason);
    }
  });
});
