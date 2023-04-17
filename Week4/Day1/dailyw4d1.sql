-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

-- CREATE DATABASE "Hollywood"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'en_US.UTF-8'
--     LC_CTYPE = 'en_US.UTF-8'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;
	
-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )
	
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Damon','08/10/1970', 5);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('George','Clooney','06/05/1961', 2);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Scarlett','Johansson','12/22/1984', 2);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Julia','Roberts','10/28/1967', 4);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES
-- ('Jean','Hackman','01/30/1930', 2),
-- ('Leonardo','DiCaprio','11/11/1974', 1),
-- ('Robert','De Niro','08/17/1943', 2);

-- select * from actors;

-- select count(actor_id) from actors

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Will','Smith','', );



