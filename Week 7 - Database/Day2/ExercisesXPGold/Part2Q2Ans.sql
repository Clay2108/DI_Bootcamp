select first_name, last_name,items.item_name FROM customers
JOIN purchases on customers.id=purchases.customer_id 
JOIN items ON purchases.item_id =items.item_id;