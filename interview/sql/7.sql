Сложность: 🟡 Middle

Темы
GROUP BY
HAVING
COUNT
AVG
отличие WHERE от HAVING

Задача
Найти сотрудников, у которых зарплата выше средней зарплаты по компании.

Вывести:
имя
зарплату
Отсортировать по зарплате по убыванию.


























select
    name,
    salary
from employees
where salary > (select avg(salary) from employees)
order by salary desc
