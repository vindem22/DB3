SELECT o_ordeId, count(*) FROM orders INNER JOIN customer ON customer.c_customerId = orders.o_customeId INNER JOIN order_details ON orders.o_orderId = order_details.od_orderId INNER JOIN product ON order_details.od_productId = product.p_productId INNER JOIN product_category ON product_category.pc_categoryId = product.p_categoryId INNER JOIN pet ON pet.pt_petId = product_category.pc_petId WHERE pt_petName = "Cat" AND pt_petName = "Fish" GROUP BY c_cityId;
