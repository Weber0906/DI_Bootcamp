-- Database: dailychallenge2w4d3

-- DROP DATABASE IF EXISTS dailychallenge2w4d3;

-- CREATE DATABASE dailychallenge2w4d3
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'en_US.UTF-8'
--     LC_CTYPE = 'en_US.UTF-8'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- create table items (
-- item_id serial primary key,
-- item_name varchar(100),
-- item_stock smallint,
-- item_price smallint
-- )

-- create table product_orders (
-- id serial primary key,
-- item_id smallint,
-- item_name varchar(100),
-- quantity smallint,
-- constraint df_item_id foreign key (item_id) references items(item_id)
-- )

-- insert into items (item_name, item_stock, item_price)
-- values
-- ('TV', 20, 50),
-- ('Projector', 25, 100),
-- ('Vinyl Player', 15, 90);

-- insert into product_orders (quantity, item_id)
-- values
-- ((select item_id from items where item_name = 'TV'), 2),
-- ((select item_id from items where item_name = 'Projector'), 1),
-- ((select item_id from items where item_name = 'Vinyl Player'), 2);

