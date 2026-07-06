Задача
Найти клиентов, которые не сделали ни одного заказа.
Решить двумя способами.

После первого решения интервьюер почти всегда задает вопрос:
«А как можно решить без LEFT JOIN?»
Или наоборот:
«Что будет эффективнее: NOT EXISTS, NOT IN или LEFT JOIN ... IS NULL?»
















Ответ 1

SELECT
    c.id,
    c.name
FROM Customers c
LEFT JOIN Orders o
    ON o.customer_id = c.id
WHERE o.id IS NULL;


Ответ 2 

SELECT
    c.id,
    c.name
FROM Customers c
WHERE NOT EXISTS (
    SELECT 1
    FROM Orders o
    WHERE o.customer_id = c.id
);

💡 Почему это любят спрашивать

