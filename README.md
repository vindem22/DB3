# DB3
## Description
Many people have pets with whom they spend a lot of time
And over time, they become part of the family and therefore care for them for their owners becomes very important . However, not many people know how to properly care for them, especially people who have a pet for the first time. Our project is a pet store where everyone can order all the necessary goods for their pet: food, clothing, portable bags, toys, medicines, etc . Also in the "Articles" section, people can find useful tips and articles related to the care of their pets - this will improve help young and experienced owners care for their pets and establish a strong relationship with them.


We are going to create an online store of products for pets . Here people can find the right products for their pets, place an order with delivery, or find interesting articles about pets and their care.

User Interface: Web application 
Programming language(s): JavaScript, Python, SQL

Tech. Stack: 
- Frontend : React, React-bootstrap
- Backend : NodeJS, ExpressJS
- Database Server :  PostgresSQL.

We chose PostgresSQL because it is a free database. It has good documentation and is great for this purpose, as well as being a well-scalable database.

## Questions:
-------------

 1. Find order date of the customers  whose name begin with 'b' from Nur-Sultan, and who bought toys for cats or for dogs. 
 2. What is the minimum, maximum, average order price in each city?
 3. As an output we need a list of all orderids and their payments 
 4. As an output we need a list of all customerid and the total payment received from them in the year 2020.
 5. As an output we need a list of all customers who have in the year 2020, bought from category called “cats” but not bought from category called "dogs”.
 6. How many orders are made by customers in each city who have cats and fish?
 7. List all customers who bought toys for their cat and купалка for bird
 8. Which foods are available for specific city?
 9. Which toys are available for the specific kind of pet in particular city?
 10. List all customers who bought food for the specific kind of pet by the particular manufaturer in total more than ... for particular date in the city with a specific name.
 11. List all customers who bought / ordered N number of times.
 12. How many products are available for a specific animal so that customers can order from their city?
 13. The total sum of all goods for a specific animal.
 14. For which animal has more products been sold to date?
 15. Is there a buyer who ordered goods for all animals that we have in stock?

### UseCase Diagram
-------------------

![alt text](https://github.com/vindem22/DB3/blob/main/ProjectX-UseCase-UML.png?raw=true)


## Datasets

### birds_delicacy
- Format : csv
- Number of rows: 49
- Number of columns: 5
- Columns
  - p_productImg - product image
  - p_productName - product title
  - p_price - product unit price
  - p_description - product description
  - p_categoryId - product category

### birds_feed
- Format : csv
- Number of rows: 49
- Number of columns: 5
- Columns
  - p_productImg - product image
  - p_productName - product title
  - p_price - product unit price
  - p_description - product description
  - p_categoryId - product category

### cat_medications
- Format : csv
- Number of rows: 73
- Number of columns: 5
- Columns
  - p_productImg - product image
  - p_productName - product title
  - p_price - product unit price
  - p_description - product description
  - p_categoryId - product category

### cat_products
- Format : csv
- Number of rows: 1513
- Number of columns: 5
- Columns
  - p_productImg - product image
  - p_productName - product title
  - p_price - product unit price
  - p_description - product description
  - p_categoryId - product category

### cat_toys
- Format : csv
- Number of rows: 73
- Number of columns: 5
- Columns
  - p_productImg - product image
  - p_productName - product title
  - p_price - product unit price
  - p_description - product description
  - p_categoryId - product category

### customers
- Format : csv
- Number of rows: 555
- Number of columns: 7
- Columns
  - id - product image
  - first_name - first name
  - last_name - last name
  - email	 - email address
  - gender - gender
  - date of birth - customer birth date
  - city_id - unique city identificator

### dog_feed
- Format : csv
- Number of rows: 650
- Number of columns: 5
- Columns
  - p_productImg - product image
  - p_productName - product title
  - p_price - product unit price
  - p_description - product description
  - p_categoryId - product category

### dog_toys
- Format : csv
- Number of rows: 218
- Number of columns: 5
- Columns
  - p_productImg - product image
  - p_productName - product title
  - p_price - product unit price
  - p_description - product description
  - p_categoryId - product category

### orders
- Format : csv
- Number of rows: 5455
- Number of columns: 4
- Columns
  - order_id - product image
  - customer_id - product title
  - order_date - product unit price
  - total_price - total order price

### rodents_feed
- Format : csv
- Number of rows: 10
- Number of columns: 5
- Columns
  - p_productImg - product image
  - p_productName - product title
  - p_price - product unit price
  - p_description - product description
  - p_categoryId - product category

### rodents_toys
- Format : csv
- Number of rows: 8
- Number of columns: 5
- Columns
  - p_productImg - product image
  - p_productName - product title
  - p_price - product unit price
  - p_description - product description
  - p_categoryId - product category

### products
- Format : csv
- Number of rows: 2433
- Number of columns: 3
- Columns
  - p_productImg - product image
  - p_productName - product title
  - p_price - product unit price


## Tables
---------

1. admin - Adminstrators of website
2. cart - Information about cart and it's owner
3. cartProduct - All products in user's cart
4. catalog - Product section
5. cities - Cities which user can specify and where store works or deliveres its products 
6. customers - Information about customers
7. orderDetails - Detailed information related to order
8. orders - All orders that were made 
9. pet - Pets categories
10. productCategory - Product categories
11. products - All products 


### orders
- Number of rows: 5454
- Number of columns: 4
- Columns
  - order_id - Num
  - customer_id - **FK** Num
  - order_date - Datetime
  - total_price - Num

### cities
- Number of rows: 14
- Number of columns: 4
- Columns
  - cy_cityName - Num - city name
  - cy_cityId - **FK** Num - unique city identificator
  - cy_isDelivered - Boolean - Specifies whether delivery for city exist or not
  - cy_district - Str - 

### orderDetails
- Number of rows: 10000
- Number of columns: 4
- Columns
  - od_orderId - Num - unique order identificator
  - od_id - **FK** Num - unique identificator
  - od_productId - unique product identificator
  - od_quantity - Num - count of items

### customers
- Number of rows: 558
- Number of columns: 9
- Columns 
  - c_customerId - **PK** Num - unique customer identificator
  - c_firstName - Str - first name
  - c_lastName - Str - last name
  - c_email - Str - email address
  - c_gender - Str - gender
  - c_birthDate - Datetime - birth date
  - c_cityId - Num - unique city identificator 

### admin
- Number of rows: 1
- Number of columns: 5
- Columns
  - a_adminId - **PK** Num - unique admin identificator 
  - a_firstName - Str - first name
  - a_lastName - Str - last name
  - a_email - Str - email adress 
  - a_password - Str - password

### pet
- Number of rows: 5
- Number of columns: 3
- Columns
  - pt_petId - **PK** Num - unique identificator 
  - pt_petName - Str - pet name
  - pt_catalogId - Num - unique catalog identificator

### products
- Number of rows: 5064
- Number of columns: 7
- Columns
  - p_productId - **PK** Num - unique category identificator 
  - p_productName - Str - product title
  - p_description - Str - product description
  - p_price - Str - product unit price
  - p_productImg - Str - product image
  - p_manufacturer - Str - product manufacturer
  - p_categoryId - Num - unique product category identificator

### productCategory
- Number of rows: 42
- Number of columns: 3
- Columns
  - pc_categoryId - **PK** Num - unique category identificator 
  - pc_name - Str - catalog name
  - pc_petId - Num - unique pet identificator



## E/R diagram
---------

![alt text](https://github.com/vindem22/DB3/blob/main/BrothersInIT-ER.png?raw=true)

### Explanation of ERD
- Each entity(Catalog, Pet, ProductCategory, Product, Admin, Customer, Order, OrderDetails) contains primary key and unique keys.
- Catolog table contains Pet names. Pet belongs to particular catalog. 
- Each Pet has Product categories.
- Product Categories have many products.
- Admin can add a product to Product table.
- Customer gives an order.
- Each order has Order details.
- Order details has Product.
