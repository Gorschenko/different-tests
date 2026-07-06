// "Голодание" очередей

console.log("start");

setTimeout(() => console.log("timer 1"), 0);

Promise.resolve().then(function run() {
  console.log("micro");

  Promise.resolve().then(run);
});

setTimeout(() => console.log("timer 2"), 0);

console.log("end");

/*




start end

microtasks: micro, micro
macrotasks: timer-1 timer-2
*/
