console.log("1");

setTimeout(() => {
  console.log("2");

  Promise.resolve().then(() => {
    console.log("3");
  });

  setTimeout(() => {
    console.log("4");
  }, 0);
}, 0);

Promise.resolve()
  .then(() => {
    console.log("5");
  })
  .then(() => {
    console.log("6");
  });

(async function () {
  console.log("7");

  await Promise.resolve();

  console.log("8");

  await Promise.resolve();

  console.log("9");
})();

new Promise((resolve) => {
  console.log("10");
  resolve();
})
  .then(() => {
    console.log("11");
  })
  .then(() => {
    console.log("12");
  });

console.log("13");

/*









1 7 10 13 5 8 11 6 9 12 2 3 4

microtasks: Promise-5 function-8 Promise-11 Promise-6 function-9 Promise-12 Promise-3
macrotasks: setTimeout-2, setTimeout-4


Почему await использует очередь микрозадач?
Чем отличается await от .then()?
Почему конструктор new Promise() выполняется синхронно?
Когда именно следующий .then() попадает в очередь микрозадач?
Почему таймеры не могут выполниться, пока очередь микрозадач не опустеет?
Что изменится, если заменить Promise.resolve().then(...) на queueMicrotask(...)?
*/
