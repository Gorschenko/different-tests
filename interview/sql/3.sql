Сложность: 🔴 Senior

Темы
GROUP BY
HAVING
SUM
подзапросы
MAX
агрегаты поверх агрегатов

Задача
Для каждой страны вычислить общую сумму заказов.
Вернуть только ту страну, у которой сумма заказов максимальна.
Если стран несколько — вернуть все.

























select c.country, sum(o.amount) as total_amount
from orders o
join customers c on o.customer_id = c.id
group by c.country
having sum(o.amount) = (
    select max(total_amount)
    from (
        select sum(amount) as total_amount
        from orders o2
        join customers c2 on o2.customer_id = c2.id
        group by c2.country
    ) as sub
)