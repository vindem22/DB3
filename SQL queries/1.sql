SELECT o_orderDate FROM orders 
       INNER JOIN customer ON customer.c_customerId = orders.o_customerId
       INNER JOIN orderDetails ON orderDetails.od_orderid = orders.o_orderId
       INNER JOIN product ON product.p_productId = orderDetails.od_productId
       INNER JOIN productCategory ON productCategory.pc_categoryId = product.p_categoryId
       INNER JOIN pet ON pet.pt_petId = productCategory.pc_petId
       INNER JOIN catalog ON catalog.cg_catalogId = pet.pt_catalogId
       AND c_firstName LIKE 'B%' AND c_city = "Nur-Sultan" AND pc_name = "Игрушки" AND pt_name = "Кошки" OR pt_name = "Собаки";
