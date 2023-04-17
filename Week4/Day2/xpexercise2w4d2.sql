-- select * from customer;

-- select first_name || ' ' || last_name as full_name from customer ;

-- select distinct create_date from customer;

-- select * from customer order by first_name desc;

-- select film_id, title, description, release_year,rental_rate from film order by rental_rate asc;

-- select address, phone from address where district = 'Texas';

-- select * from film where film_id between 15 and 150;

-- select film_id, title, description, length, rental_rate from film where title like 'Godfather';

-- select film_id, title, description, length, rental_rate from film where title like 'Go%';

-- select * from film order by rental_rate asc limit 10;

-- select * from film order by rental_rate asc fetch first 20 rows only;

-- select customer.customer_id,first_name, last_name, amount, payment_date 
-- from customer inner join payment on payment.customer_id =customer.customer_id 
-- order by customer_id asc;

-- select film.film_id, title, inventory_id 
-- from film left join inventory on inventory.film_id = film.film_id 
-- where inventory.film_id is NULL;

-- select country.country_id, city.city, country 
-- from country left join city on city.country_id = country.country_id;

-- select
-- 	customer.customer_id,
-- 	customer.first_name customer_first_name,
-- 	customer.last_name customer_last_name,
-- 	staff.first_name staff_first_name,
-- 	staff.staff_id staff_id,
-- 	amount,
-- 	payment_date
-- from
-- 	customer customer
-- inner join payment payment 
--     on payment.customer_id = customer.customer_id
-- inner join staff staff 
--     on payment.staff_id = staff.staff_id
-- order by payment.staff_id;


-- You want to be able to see how your sellers have been doing? 
-- Write a query to get the customer’s id, names (first and last)
-- , the amount and the date of payment ordered by the id of the 
-- staff member who sold them the dvd.








