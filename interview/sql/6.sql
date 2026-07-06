Условие:
Маркетинговый отдел хочет сегментировать клиентов по их покупательской активности в первом квартале 2026 года (январь, февраль, март).
Необходимо вывести:
Имя клиента
Страна клиента
Общая сумма заказов за Q1 2026
Количество заказов за Q1 2026
Средняя сумма заказа (округленная до 2 знаков)

Важные условия:
В выборку попадают только клиенты из стран: 'USA', 'Germany', 'UK'
Клиент должен иметь хотя бы 3 заказа за Q1 2026
Общая сумма заказов должна быть в диапазоне от 1000 до 50000























select
    c.name,
    c.country,
    sum(o.amount) as sum_amount,
    count(o.id) as total_orders,
    avg(o.amount) as avg_amount
from customers c
join orders o on o.customer_id = c.id
where o.created_at >= '2026-01-01' and o.created_at < '2026-04-01' and c.country in ('USA', 'Germany', 'UK')
group by c.name
having count(o.id) >= 3 and sum(o.amount) >= 1000 and sum(o.amount) <= 50000 
