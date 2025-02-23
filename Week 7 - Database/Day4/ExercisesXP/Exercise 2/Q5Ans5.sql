--SELECT * FROM inventory
 SELECT * FROM rental 
 INNER JOIN inventory ON rental.inventory_id=inventory.inventory_id
INNER JOIN film ON inventory.film_id=film.film_id 
 WHERE rental.return_date IS NULL
 ORDER BY film.replacement_cost DESC
 LIMIT 30
