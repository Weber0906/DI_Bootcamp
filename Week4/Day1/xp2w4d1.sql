-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'en_US.UTF-8'
--     LC_CTYPE = 'en_US.UTF-8'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;
	
		
-- CREATE TABLE students(
--  student_id SERIAL PRIMARY KEY,
--  last_name VARCHAR (100) NOT NULL,
--  first_name VARCHAR (50) NOT NULL,
--  birthdate DATE NOT NULL,
-- );

--  INSERT INTO students (last_name, first_name, birthdate)
-- VALUES
-- ('Benichou', 'Marc', '11/02/1998'),
-- ('Cohen', 'Yoan', '12/03/2010'),
-- ('Benichou', 'Lea',	'07/27/1987'),
-- ('Dux', 'Amelia', '04/07/1996'),
-- ('Grez', 'David', '06/14/2003'),
-- ('Simpson', 'Omer', '10/03/1980');

-- INSERT INTO students (last_name, first_name, birthdate)
-- VALUES('Weber', 'Nikolas', '06/09/1980');

-- select * from students;

-- select first_name, last_name from students;

-- select * from students where student_id = 2;

-- select * from students where first_name like 'Marc' and last_name like 'Benichou';

-- select * from students where first_name like 'Marc' or last_name like 'Benichou';

-- select * from students where first_name like '%a%';

-- select * from students where first_name like 'A%';

-- select * from students where first_name like '%a_';

-- select * from students where student_id in (1, 3);

-- select * from students where birthdate >= '2000-01-01';
