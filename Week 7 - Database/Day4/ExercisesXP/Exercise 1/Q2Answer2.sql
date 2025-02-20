select title,description,name from film
LEFT JOIN 
language ON language.language_id = film.language_id

