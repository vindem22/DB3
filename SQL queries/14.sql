SELECT pt_petName FROM pet
INNER JOIN productCategory ON productCategory.pc_petID = pet.pt_petID
INNER JOIN product ON product.p_categoryID = productCategory.pc_categoryID
INNER JOIN orderDetails ON orderDetails.od_productID = product.p_productID
WHERE COUNT(od_orderID) > 10 GROUP BY pc_petID;