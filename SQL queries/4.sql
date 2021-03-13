SELECT o_customerId, SUM(od_unitPrice) FROM orders
       INNER JOIN orderDetails ON orderDetails.od_orderid = orders.o_orderId
       AND STRFTIME('%Y', od_orderdate) = "2020";