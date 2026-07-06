Условие:
Руководство хочет выявить отделы,
в которых средняя зарплата сотрудников превышает среднюю зарплату по всей компании.
Для таких отделов необходимо вывести:
Название отдела
Количество сотрудников в отделе
Среднюю зарплату в отделе
































select
    d.name,
    count(e.id) as employees_count,
    avg(e.salary) as avg_salary
from departments d
join employees e on e.department_id = d.id
group by d.name
having avg(e.salary) > (select avg(salary) from employees)