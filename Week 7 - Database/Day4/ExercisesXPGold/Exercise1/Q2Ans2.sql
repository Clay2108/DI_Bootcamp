select * from rental
LEFT JOIN customer ON rental.customer_id = customer.customer_id
WHERE return_date IS NULL


