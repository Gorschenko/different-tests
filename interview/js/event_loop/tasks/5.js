setTimeout(() => console.log("Step 1: In setTimeout"));
setTimeout(() => {
  new Promise((resolve) => {
    console.log("Step 2: In promise constructor (inside setTimeout)");
    resolve();
  }).then(() => console.log("Step 3: In then (inside setTimeout)"));
});

new Promise((resolve) => {
  console.log("Step 4: In promise constructor");
  resolve();
}).then(() => {
  console.log("Step 5: In then");
});

setTimeout(() => console.log("Step 6: In another setTimeout"));

/*






















Макрозадачи выполняются по одной.
Перед тем как выполнять каждую следующую задачу Event Loop проверяет нет ли у нас активных задач из Call Stack, а также нет ли микрозадач.
Как только новая задача находится и Call Stack пустой - она сразу же выполняется. Вот почему Step 3 выполнился сразу же после Step 2.
*/
