select store.store_id , city, country from store
INNER JOIN customer on customer.store_id =store.store_id
INNER JOIN address on address.address_id = customer.address_id
INNER JOIN city on city.city_id = address.city_id
INNER JOIN country on country.country_id = city.country_id
ORDER BY store_id ASC
 