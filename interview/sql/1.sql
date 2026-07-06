Сложность: 🟡 Middle

Темы
SELECT
WHERE
GROUP BY
HAVING
COUNT
ORDER BY

Задача
Найти все отделы, в которых работает не менее трех сотрудников, а средняя зарплата сотрудников больше 70000.

Вывести
название отдела
количество сотрудников
среднюю зарплату
Отсортировать по средней зарплате по убыванию.






















select
    d.name,
    count(e.id) as total_employees_count,
    avg(e.salary) as average_employees_salary
from departments d
join employees e on d.id = e.department_id
group by d.id
having count(e.id) >= 3 and avg(e.salary) > 70000
order by average_employees_salary desc