Условие:
Необходимо сформировать отчет по клиентам,
которые сделали хотя бы один заказ в 2026 году.
Для каждого такого клиента вывести:
Имя клиента
Страна клиента
Общая сумма всех его заказов за 2026 год
Количество заказов
В выборку должны попасть только те клиенты,
у которых количество заказов больше 1 и общая сумма превышает 5000.



























select
    c.name,
    c.country,
    sum(o.amount) as sum_amount,
    count(o.id) as total_orders
from orders o
join customers c on c.id = o.customer_id
where o.created_at >= '2026-01-01'
group by c.name
having count(o.id) > 1 and sum(o.amount) > 5000