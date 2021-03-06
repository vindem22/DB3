CREATE FUNCTION get_seq RETURN NUMBER IS
BEGIN
  RETURN CATALOG_ID_SEQ.nextval;
END;

INSERT ALL
   INTO catalog (catalog_id, catalog_name) VALUES (get_seq, 'Птицы')
   INTO catalog (catalog_id, catalog_name) VALUES (get_seq, 'Грызуны')
   INTO catalog (catalog_id, catalog_name) VALUES (get_seq, 'Рыбы')
   INTO catalog (catalog_id, catalog_name) VALUES (get_seq, 'Кошки')
   INTO catalog (catalog_id, catalog_name) VALUES (get_seq, 'Собаки')
   INTO catalog (catalog_id, catalog_name) VALUES (get_seq, 'Хорьки')
   INTO catalog (catalog_id, catalog_name) VALUES (get_seq, 'Рептилии')
SELECT 1 FROM DUAL;

CREATE FUNCTION get_seq RETURN NUMBER IS
BEGIN
  RETURN PET_ID_SEQ.nextval;
END;

INSERT ALL
   INTO pet (pet_id, pet_name) VALUES (get_seq, 'Птицы')
   INTO pet (pet_id, pet_name) VALUES (get_seq, 'Грызуны')
   INTO pet (pet_id, pet_name) VALUES (get_seq, 'Рыбы')
   INTO pet (pet_id, pet_name) VALUES (get_seq, 'Кошки')
   INTO pet (pet_id, pet_name) VALUES (get_seq, 'Собаки')
   INTO pet (pet_id, pet_name) VALUES (get_seq, 'Хорьки')
   INTO pet (pet_id, pet_name) VALUES (get_seq, 'Рептилии')
SELECT 1 FROM DUAL;

CREATE FUNCTION get_seq RETURN NUMBER IS
BEGIN
  RETURN PRODUCT_ID_SEQ.nextval;
END;

INSERT ALL
   INTO product_category (pc_id, pc_name) VALUES (get_seq, 'Корм')
   INTO product_category (pc_id, pc_name) VALUES (get_seq, 'Аксессуары')
   INTO product_category (pc_id, pc_name) VALUES (get_seq, 'Игрушки')
   INTO product_category (pc_id, pc_name) VALUES (get_seq, 'Домики')
   INTO product_category (pc_id, pc_name) VALUES (get_seq, 'Туалеты')
   INTO product_category (pc_id, pc_name) VALUES (get_seq, 'Косметика')
   INTO product_category (pc_id, pc_name) VALUES (get_seq, 'Посуда')
   INTO product_category (pc_id, pc_name) VALUES (get_seq, 'Одежда и обувь')
   INTO product_category (pc_id, pc_name) VALUES (get_seq, 'Лекарство и витамины')
   INTO product_category (pc_id, pc_name) VALUES (get_seq, 'Гигиена')
SELECT 1 FROM DUAL;



