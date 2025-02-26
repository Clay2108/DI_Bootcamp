 SELECT store.store_id, SUM(film.length) AS total_film_length
FROM film
INNER JOIN inventory ON film.film_id = inventory.film_id
INNER JOIN store ON store.store_id = inventory.store_id
GROUP BY store.store_id;



