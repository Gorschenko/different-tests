Сложность: 🟠 Middle

Темы
LEFT JOIN
COUNT
GROUP BY
агрегаты
NULL

Задача
Для каждого отдела вывести
название отдела
количество сотрудников
Даже если в отделе нет сотрудников, он должен попасть в результат.


























select
    name,
    count(e.id) as total_employees
from departments d
left join employees e on e.department_id = d.id
group by d.name