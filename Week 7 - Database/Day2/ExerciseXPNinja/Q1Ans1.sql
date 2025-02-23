SELECT 
    first_name AS "Customer First Name", 
    last_name AS "Customer Last Name"
FROM 
    customers
ORDER BY 
    last_name ASC, first_name ASC
LIMIT 2 OFFSET (SELECT COUNT(*) FROM customers) - 2;