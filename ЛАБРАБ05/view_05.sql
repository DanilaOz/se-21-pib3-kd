CREATE VIEW view_05 AS
SELECT `lastName`, ROUND(AVG(mark), 2) AS avg_mark
FROM `students`, `marks`
WHERE `marks`.`keyStudent` = `students`.`id`
GROUP BY `keyStudent`
ORDER BY avg_mark DESC
LIMIT 5