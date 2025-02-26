SELECT DISTINCT customer.first_name, customer.last_name, city.city, customer.store_id
FROM customer
INNER JOIN address ON customer.address_id = address.address_id
INNER JOIN city ON city.city_id = address.city_id
INNER JOIN store ON store.address_id = store.address_id
