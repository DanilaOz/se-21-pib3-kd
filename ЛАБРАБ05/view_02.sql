CREATE VIEW view_02 AS
SELECT `id`, `lastName`
FROM `students`
JOIN `studygroups` ON `studygroups`.`idGr` = `students`.`keyGroup`
JOIN `curators` ON `curators`.`idCur` = `studygroups`.`keyCur`
WHERE `curators`.`nameCur` = 'Дуров'
ORDER BY `lastName` ASC