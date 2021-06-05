CREATE VIEW view_04 AS
SELECT `students`.`id`, `lastName`, `mark`
FROM `students`
JOIN `studygroups` ON `studygroups`.`idGr` = `students`.`keyGroup`
JOIN `marks` ON `marks`.`keyStudent` = `students`.`id`
JOIN `edusubjects` ON `edusubjects`.`id` = `marks`.`keySubject`
WHERE `edusubjects`.`nameSubject` = 'ООП' AND `studygroups`.`nameGroup` = 'ПИнб-2'
ORDER BY `lastName` ASC