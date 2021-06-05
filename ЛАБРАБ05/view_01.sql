CREATE VIEW view_01 AS
SELECT `nameGroup`, `id`,
	CONCAT_WS(
        ' ',
        `students`.`lastName`,
        `students`.`firstName`
    ) AS `fullName`
FROM `studygroups`,`students`
WHERE `keyGroup` = `idGr`
ORDER BY `namegroup` ASC, `fullName` ASC