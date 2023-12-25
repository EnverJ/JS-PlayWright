// case 1:
// f1 -- resolve
// f2 -- resolve
// f3 -- resolve

const function1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //  resolve("data from function 1");
      const data = [1, 2, 3, 4];
      resolve(data);
    }, 2000);
  });
};

const function2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //  resolve("data from function 2");
      const data = [5, 6, 7, 8];
      resolve(data);
    }, 2000);
  });
};

const function3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("data from function 3");
      const data = [9, 10, 11, 12];
      resolve(data);
    }, 2000);
  });
};

Promise.all([function1(), function2(), function3()])
  .then((dataArray) => {
    console.log("all data from functions:", dataArray);
  })
  .catch((error) => {
    console.log("error in promise", error);
  });

//   all data from functions: [
//     'data from function 1',
//     'data from function 2',
//     'data from function 3'
//   ]

// or

//all data from functions: [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ] ]

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

Promise.all([getData1(), getError()])
  .then((dataArray) => {
    console.log("All data fetched: " + dataArray);
  })
  .catch((error) => {
    console.log("error occurred" + error);
  });
