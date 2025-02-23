SELECT language.name,film.title,film.description FROM language
LEFT JOIN film ON language.language_id=film.language_id 

