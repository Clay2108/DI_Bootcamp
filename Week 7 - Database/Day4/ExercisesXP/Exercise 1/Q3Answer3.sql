SELECT language.name,film.title,film.description FROM film
RIGHT JOIN language ON language.language_id=film.language_id 

