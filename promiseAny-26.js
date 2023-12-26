// It's used for handling multiple promises and resolving with the value of the first fulfilled/resolved promise. similar to promise.race().
// however, unlike Promise.race(), Promise.any() dose not reject immediately when the first promise rejects;
// instead, it waits until at least one promise fulfills/resolved/

const getMessage = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("get Message from API 1");
    }, 500);
  });
};

const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error: user Data could not be fetched");
    }, 200);
  });
};

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error: Product Info could not be fetched");
    }, 1000);
  });
};

Promise.any([getMessage(), getUser(), getProducts()])
  .then((result) => {
    console.log("First successful result: ", result); // will log the first resolved promise result
  })
  .catch((error) => {
    console.error("All promises rejected ", error); // will log all rejection reason if all promises reject
  });

// First successful result:  get Message from API 1    // timeout:500
