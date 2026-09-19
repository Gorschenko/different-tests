## Employees

id
name
department_id
salary
hire_date

## Departments

id
name

SELECT
d.department_name,
COUNT(e.id) AS emp_count,
AVG(e.salary) AS avg_salary
FROM employees e
JOIN departments d ON e.department_id = d.id
WHERE e.hire_date > '2020-01-01'
GROUP BY d.department_name
HAVING COUNT(e.id) > 5
ORDER BY avg_salary DESC
LIMIT 3;

# Этап Что происходит

1 FROM Берутся таблицы employees e и departments d
2 JOIN Соединяются по e.department_id = d.id
3 WHERE Фильтруются строки: hire_date > '2020-01-01'
4 GROUP BY Группировка по department_name
5 HAVING Фильтрация групп: COUNT(e.id) > 5
6 SELECT Вычисляются выражения: COUNT, AVG, выбираются колонки
7 ORDER BY Сортировка по avg_salary DESC
8 LIMIT Оставляются первые 3 строки
