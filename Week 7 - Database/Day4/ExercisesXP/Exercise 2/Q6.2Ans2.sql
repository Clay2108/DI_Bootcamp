--select title,length,rating from film WHERE length<60 AND rating='R'  
--SELECT * FROM film_category WHERE category_id=6
select film.film_id,film_category.film_id,film_category.category_id,category.name,film.length,film.rating,film.title from film_category 
INNER JOIN film ON film_category.film_id = film.film_id
INNER JOIN category ON film_category.category_id=6 AND film.rating= 'R' AND length<60 AND category.name= 'Documentary'
