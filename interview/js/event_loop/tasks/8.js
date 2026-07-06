console.log("start");

setTimeout(() => {
  console.log("timer");

  Promise.resolve().then(() => {
    console.log("timer micro");
  });
}, 0);

Promise.resolve()
  .then(() => {
    console.log("promise 1");

    queueMicrotask(() => {
      console.log("queue");
    });

    return Promise.resolve();
  })
  .then(() => {
    console.log("promise 2");
  });

(async () => {
  console.log("async start");

  await Promise.resolve();

  console.log("async end");

  Promise.resolve().then(() => {
    console.log("async micro");
  });
})();

console.log("finish");
