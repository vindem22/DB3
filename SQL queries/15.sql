SELECT c_firstName, c_lastName FROM customer 
INNER JOIN orders ON orders.o_customerID = customer.c_customer.ID
INNER JOIN orderDetails ON orderDetails.od_orderID = orders.o_orderID
INNER JOIN product ON product.pt_productID = orderDetails.od_productID
INNER JOIN productCategory ON productCategory.pc_categoryID = product.p_categoryID
GROUP BY c_customerid,pc_petID;