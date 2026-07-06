console.log("1");

queueMicrotask(() => {
  console.log("2");

  queueMicrotask(() => {
    console.log("3");
  });
});

Promise.resolve()
  .then(() => {
    console.log("4");

    setTimeout(() => {
      console.log("5");
    }, 0);
  })
  .then(() => {
    console.log("6");
  });

(async () => {
  console.log("7");

  await null;

  console.log("8");
})();

setTimeout(() => {
  console.log("9");
}, 0);

console.log("10");
