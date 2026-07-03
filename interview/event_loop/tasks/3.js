console.log("Step 1: In global scope");

setTimeout(() => console.log("Step 2: In setTimeout"));

new Promise((resolve) => {
  console.log("Step 3: In promise constructor");
  resolve();
})
  .then(() => console.log("Step 4: In then"))
  .then(() => console.log("Step 5: In another then"));

setTimeout(() => console.log("Step 6: In another setTimeout"));

new Promise((resolve) => {
  console.log("Step 7: In promise constructor");
  resolve();
})
  .then(() => console.log("Step 8: In then"))
  .then(() => console.log("Step 9: In another then"));
