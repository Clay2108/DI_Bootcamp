--select * from customer WHERE customer_id=323
--select * from rental WHERE customer_id=323
--select * from payment
SELECT * FROM inventory
INNER JOIN film ON film.film_id = inventory.film_id
INNER JOIN rental ON rental.inventory_id =inventory.inventory_id
INNER JOIN customer ON customer.customer_id= rental.customer_id
WHERE customer.first_name='Matthew'
AND customer.last_name='Mahan'
AND film.rental_rate >4
AND rental.return_date > '2005-07-28'
AND rental.return_date < '2005-08-01'
