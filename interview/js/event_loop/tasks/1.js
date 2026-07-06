console.log("Step 1: In global scope");

setTimeout(() => console.log("Step 2: In setTimeout"));

new Promise((resolve) => {
  console.log("Step 3: In promise constructor");
  resolve();
}).then(() => console.log("Step 4: In then"));

setTimeout(() => console.log("Step 5: In another setTimeout"));

/*




















Конструктор Promise вызывается синхронно, то есть new Promise((resolve) => {console.log("test"); resolve()})
*/
