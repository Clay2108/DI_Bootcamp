--SELECT * FROM actor WHERE (first_name='Penelope' AND last_name= 'Monroe') 
--SELECT * FROM film 
select film_actor.film_id,film.film_id, film.title,film.fulltext,actor.first_name,actor.last_name from film_actor 
INNER JOIN actor ON first_name='Penelope' AND last_name= 'Monroe'
INNER JOIN film ON film.film_id= film_actor.film_id 
AND film.fulltext @@ to_tsquery('english','sumo')