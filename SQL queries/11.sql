SELECT o_customerId, c_firstName, c_lastName from orders INNER JOIN customer ON customer.c_customerId = orders.o_customerId GROUP BY o_customerId HAVING count(*) > 20;
