SELECT * FROM inventory
INNER JOIN film ON film.film_id = inventory.film_id
INNER JOIN rental ON rental.inventory_id =inventory.inventory_id
INNER JOIN customer ON customer.customer_id= rental.customer_id
WHERE customer.first_name='Matthew'
AND customer.last_name='Mahan'
AND film.description LIKE '%Boat%'
ORDER BY film.replacement_cost DESC 
LIMIT 1
