SELECT c_firstName, c_lastName FROM customer 
       INNER JOIN orders ON orders.o_customerId = customer.c_customerId  
       INNER JOIN orderDetails ON orderDetails.od_orderid = orders.o_orderId
       INNER JOIN product ON product.p_productId = orderDetails.od_productId
       INNER JOIN productCategory ON productCategory.pc_categoryId = product.p_categoryId
       INNER JOIN pet ON pet.pt_petId = productCategory.pc_petId
       INNER JOIN catalog ON catalog.cg_catalogId = pet.pt_catalogId
       AND STRFTIME('%Y', od_orderdate) = "2020" AND cg_catalogName = "Кошки" AND NOT cg_catalogName = "Собаки"
