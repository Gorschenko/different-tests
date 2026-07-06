Сложность: 🟠 Middle+

Темы
JOIN
WHERE
BETWEEN
DISTINCT
даты

Задача
Найти страны, в которых в 2024 году был хотя бы один заказ.
Вернуть список стран без повторений.































select distinct c.country from customers c
left join orders o on o.customer_id = c.id
where created_at between '2024-01-01' and '2024-31-12' 