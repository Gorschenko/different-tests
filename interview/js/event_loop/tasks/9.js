console.log("begin");

setTimeout(() => {
  console.log("timer");
}, 0);

queueMicrotask(function repeat() {
  console.log("micro");

  Promise.resolve().then(repeat);
});

console.log("end");
