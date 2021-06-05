CREATE VIEW view_06 AS
SELECT `lastName`, ROUND(AVG(mark), 2) AS avg_mark
FROM `students`, `marks`
WHERE `marks`.`keyStudent` = `students`.`id`
GROUP BY `keyStudent` 
HAVING avg_mark < 4
ORDER BY avg_mark DESC
LIMIT 5