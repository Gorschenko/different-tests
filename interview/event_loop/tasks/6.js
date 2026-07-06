console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

(async () => {
  console.log("C");

  await Promise.resolve();

  console.log("D");
})();

Promise.resolve()
  .then(() => {
    console.log("E");
  })
  .then(() => {
    console.log("F");
  });

new Promise((resolve) => {
  console.log("G");
  resolve();
}).then(() => {
  console.log("H");
});

console.log("I");
