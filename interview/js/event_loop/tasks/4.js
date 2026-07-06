setTimeout(() => console.log("Step 1: In setTimeout"));

new Promise((resolve) => {
  console.log("Step 2: In promise constructor");
  resolve();
}).then(() => {
  console.log("Step 3: In then");
  setTimeout(() => console.log('Step 4: In setTimeout (inside of "then")'));
});

setTimeout(() => console.log("Step 5: In another setTimeout"));
