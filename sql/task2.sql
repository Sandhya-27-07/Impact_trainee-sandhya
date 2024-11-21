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

alter table log1_table
MODIFY message VARCHAR(255)NOT NULL;