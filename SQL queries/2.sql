SELECT min(od_unitPrice), max(od_unitPrice), avg(od_unitPrice) FROM orderDetails
       INNER JOIN orders ON orders.o_orderId = orderDetails.od_orderid
       INNER JOIN customer ON customer.c_customerId = orders.o_customerId GROUP by c_city;