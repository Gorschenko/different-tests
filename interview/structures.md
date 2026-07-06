- Массив — когда важен порядок и нужен быстрый доступ по индексу.
- Стек — отмена действий (например, Ctrl+Z).

```
stack.push(1);  // [1]
stack.push(2);  // [1, 2]
stack.pop();    // Удалится 2
console.log(stack); // [1]
```

- Очередь — задачи в порядке поступления (например, очередь печати).

```
const queue = [];
queue.push(1);  // [1]
queue.push(2);  // [1, 2]
queue.shift();  // Удалится 1
console.log(queue); // [2]
```

- Хеш-таблица — быстрый поиск по ключу (например, кэш).
- Дерево — иерархия (например, DOM в браузере).

```
const tree = {
  value: 10,
  left: {
    value: 5,
    left: null,
    right: null
  },
  right: {
    value: 15,
    left: null,
    right: null
  }
};
console.log(tree.left.value); // 5
```

- Граф — социальные сети (друзья друзей).

```
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D'],
  'C': ['A'],
  'D': ['B']
};
console.log(graph['A']); // ['B', 'C']
```
