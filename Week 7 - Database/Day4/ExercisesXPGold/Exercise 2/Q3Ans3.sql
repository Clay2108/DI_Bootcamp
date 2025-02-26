SELECT *
FROM inventory
INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
WHERE rental.return_date IS NOT NULL;
