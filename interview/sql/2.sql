Сложность: 🟠 Middle+

Темы
LEFT JOIN
NULL
COUNT
GROUP BY
агрегаты

Задача
Найти клиентов, которые никогда ничего не заказывали.
Вывести
id
имя клиента





























select c.id, c.name from customers c 
left join orders o on c.id = o.customer_id
where o.id is null