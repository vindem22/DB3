CREATE TABLE customer 
(city		VARCHAR2(25),
cutomer_id	NUMBER(30) PRIMARY KEY,
contact_number	NUMBER(20),
customer_name	VARCHAR2(25)
);
CREATE TABLE catalog
(catalog_id	NUMBER(30) PRIMARY KEY,
catalog_name	VARCHAR2(25),
);
CREATE TABLE pet
(pet_id	NUMBER(30) PRIMARY KEY,
pet_name	VARCHAR2(25)
);
CREATE TABLE order
(order_id	NUMBER(30) PRIMARY KEY,
customer_id	NUMBER(30) REFERENCE customer (customer_id)
);
CREATE TABLE product_category
(pc_id	NUMBER(30) PRIMARY KEY,
pc_name	VARCHAR2(25)
);
CREATE TABLE product 
(product_id	NUMBER(30) PRIMARY KEY,
product_name	VARCHAR2(25),
manufacturer	VARCHAR(25),
price		NUMBER(25),
product_image	VARCHAR2(30),
description	VARCHAR2(100),
);
CREATE TABLE order_datails 
(order_id	NUMBER(30)  REFERENCE order (order_id),
product_id	NUMBER(30) REFERENCE product (product_id),
quantity	NUMBER(25),
unit_price	NUMBER(25)
);
CREATE TABLE ADMIN
(ADMIN_ID	NUMBER(30) PRIMARY KEY,
ADMIN_NAME	VARCHAR2(25),
PASSWORD	VARCHAR2(20),
);