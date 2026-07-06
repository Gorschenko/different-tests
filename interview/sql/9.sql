Сложность: 🟠 Middle+

Темы
GROUP BY
HAVING
SUM
ORDER BY

Задача
Найти клиентов, которые сделали заказов более чем на 10000.
Вывести
имя клиента
общую сумму заказов
Отсортировать по сумме по убыванию.


select
    c.name,
    avg(o.amount) as total_amount
from customers c
join orders o on o.customer_id = c.id
group by c.id, c.name
having total_amount > 10000
order by avg(o.amount) desc
