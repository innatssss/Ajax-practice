// Create a promise that resolves to the string "Hello, Promises!"

const myPromise = new Promise((resolve, reject) => {
  resolve("Hello, Promises!");
});

myPromise.then((result) => {
  console.log(result);
});

// Create a function that returns a promise. The promise should resolve after a random delay (between 1 to 5 seconds) with a message like "Promise resolved after X seconds".

function delayedResolve() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => {
      resolve(`Promise resolved after ${delay} seconds`);
    }, delay * 1000); // seconds to milliseconds
  });
}

delayedResolve().then((message) => {
  console.log(message);
});
