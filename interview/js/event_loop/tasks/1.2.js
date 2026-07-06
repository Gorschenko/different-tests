console.log("1");

setTimeout(() => console.log("2"), 0);

queueMicrotask(() => {
  console.log("3");

  queueMicrotask(() => {
    console.log("4");
  });
});

Promise.resolve()
  .then(() => {
    console.log("5");

    setTimeout(() => {
      console.log("6");
    }, 0);

    return Promise.resolve();
  })
  .then(() => {
    console.log("7");
  });

(async () => {
  console.log("8");

  await null;

  console.log("9");

  queueMicrotask(() => {
    console.log("10");
  });
})();

new Promise((resolve) => {
  console.log("11");
  resolve();
}).then(() => {
  console.log("12");
});

console.log("13");

/*





1 8 11 13 3 5 9 12 4 10 7 2 6

microtasks: queueMicrotask-3 Promise-5 function-9 Promise-12 queueMicrotask-4 Promise-return queueMicrotask-10 Promise-7
macrotasks: setTimeout-2 setTimeout-6

Запись 
Promise.resolve()
  .then(() => {
    console.log("5");
    return Promise.resolve();
  })
  .then(() => {
    console.log("7");
  });

эквивалентна
Promise.resolve()
  .then(() => {
    return Promise.resolve();
  })
  .then((_, resolve) => resolve())
  .then(() => {
    console.log("7");
  });
*/
