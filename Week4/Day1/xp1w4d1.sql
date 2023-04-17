-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'en_US.UTF-8'
--     LC_CTYPE = 'en_US.UTF-8'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;
	
-- CREATE TABLE items(
--  item_id SERIAL PRIMARY KEY,
--  item_name VARCHAR (50) NOT NULL,
--  price smallint NOT NULL
-- );

-- CREATE TABLE customers(
--  item_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL
-- );

-- INSERT INTO items (item_name, price)
-- VALUES
-- ('Small Desk', 100),
-- ('Large Desk', 300),
-- ('Fan', 80);

-- INSERT INTO customers (first_name, last_name)
-- VALUES
-- ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson');

-- select * from items;

-- select * from customers;


-- SELECT * FROM items WHERE price > 80;

-- SELECT * FROM items WHERE price <= 300;

-- select last_name = 'Smith' from customers;

-- SELECT * FROM customers WHERE last_name = 'Smith';

-- select last_name = 'Jones' from customers;

-- SELECT * FROM customers WHERE last_name = 'Jones';

-- SELECT * FROM customers WHERE last_name != 'Scott';

-- alter table customers rename column item_id to customer_id;






