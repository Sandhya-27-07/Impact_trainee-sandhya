use assignment;
select * from product;

CREATE table employee(
empid int,
empname varchar(45),
empsalary int,
empdomain varchar(30),
emp_age int);

INSERT into employee value
(200, 'priya', 20000, 'metmat', 23),
(207, 'reema', 17000, 'cse', 22),
(210, 'velu', 30000, 'DA', 24),
(223, 'arun', 22000,'DAt', 25),
(227, 'kavya', 32000, 'AI', 27);

select * from employee;

DELIMITER $$

CREATE TRIGGER after_insert_employee
AFTER INSERT ON employee
FOR EACH ROW
BEGIN
    DECLARE row_count INT;
    SELECT COUNT(*) INTO row_count FROM employee;
    INSERT INTO log1_table (message)
    VALUES (CONCAT('Total rows after insertion: ', row_count));
END$$

DELIMITER ;


CREATE TABLE log1_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message VARCHAR(255)
);

INSERT INTO employee (empid, empname, empsalary, empdomain, emp_age)
VALUES (231, 'Jo', 23000, 'HR1', 28);

select * from log1_table;

alter table employee
add primary key (empid);

update employee
set location='hyderabad'
where empid = 231;

alter table log1_table
MODIFY message VARCHAR(255)NOT NULL;

alter table employee
ADD location varchar(50);

alter table employee
add DOJ DATE;

UPDATE employee set DOJ='2024-12-12' WHERE empId = 200;
UPDATE employee set DOJ='2023-10-10' WHERE empId = 207;
UPDATE employee set DOJ='2022-09-27' WHERE empId = 210;
UPDATE employee set DOJ='2022-08-11' WHERE empId = 223;
UPDATE employee set DOJ='2020-04-09' WHERE empId = 227;
UPDATE employee set DOJ='2021-07-01' WHERE empId = 230;

DELIMITER //
CREATE procedure getJoin(IN year INT)
BEGIN
select * from employee
where YEAR (DOJ)=YEAR ;
END //
DELIMITER ;

CALL getJoin(2022);
 

UPDATE employee set DOJ='2021-07-05' WHERE empId = 231;


CREATE VIEW employeeView
AS
(select*from employee
where location='chennai' AND
empdomain='TN');