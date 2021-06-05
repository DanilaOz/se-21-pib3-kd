CREATE VIEW view_03 AS
SELECT `students`.`id`,
	CONCAT_WS(
        ' ',
        `students`.`lastName`,
        `students`.`firstName`
    ) AS `fullName`
FROM `students`
JOIN `marks` ON `marks`.`keyStudent` = `students`.`id`
JOIN `edusubjects` ON `edusubjects`.`id` = `marks`.`keySubject`
WHERE `edusubjects`.`nameSubject` = 'ООП' AND `marks`.`mark` = 5