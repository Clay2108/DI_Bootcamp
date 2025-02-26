select * from film
INNER JOIN film_category on film.film_id=film_category.film_id
INNER JOIN film_actor on film.film_id= film_actor.film_id
INNER JOIN actor on actor.actor_id= film_actor.actor_id
INNER JOIN category on category.category_id = film_category.category_id
WHERE actor.first_name = 'Joe'
AND actor.last_name= 'Swank'
AND category.name= 'Action'