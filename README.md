# DB3
## Description
Many people have pets with whom they spend a lot of time
And over time, they become part of the family and therefore care for them for their owners becomes very important . However, not many people know how to properly care for them, especially people who have a pet for the first time. Our project is a pet store where everyone can order all the necessary goods for their pet: food, clothing, portable bags, toys, medicines, etc . Also in the "Articles" section, people can find useful tips and articles related to the care of their pets - this will improve help young and experienced owners care for their pets and establish a strong relationship with them.


We are going to create an online store of products for pets . Here people can find the right products for their pets, place an order with delivery, or find interesting articles about pets and their care.

User Interface: Web application 
Programming language: Node JS/ Express JS
Database Server:  PostgresSQL.
We chose PostgresSQL because it is a free database. It has good documentation and is great for this purpose, as well as being a well-scalable database.

## Questions:
-------------

*1. Find order date of the customers  whose name begin with 'b' from Nur-Sultan, and who bought toys for cats or for dogs. 
*2. What is the minimum, maximum, average order price in each city?
*3. As an output we need a list of all orderids and their payments 
*4. As an output we need a list of all customerid and the total payment received from them in the year 2020.
*5. As an output we need a list of all customers who have in the year 2020, bought from category called “cats” but not bought from category called "dogs”.
*6. How many orders are made by customers in each city who have cats and fish?
*7. List all customers who bought toys for their cat and купалка for bird
*8. Which foods are available for specific city?
*9. Which toys are available for the specific kind of pet in particular city?
*10. List all customers who bought food for the specific kind of pet by the particular manufaturer in total more than ... for particular date in the city with a specific name.
*11. List all customers who bought / ordered N number of times.
*12. How many products are available for a specific animal so that customers can order from their city?
*13. The total sum of all goods for a specific animal.
*14. For which animal has more products been sold to date?
*15. Is there a buyer who ordered goods for all animals that we have in stock?

### UseCase Diagram
-------------------

![alt text](https://github.com/vindem22/DB3/blob/main/ProjectX-UseCase-UML.png?raw=true)

## Tables
---------

*1. care_product
*2. accessories
*3. furniture
*4. manifacturer
*5. bags and houses
*6. feeder
*7. transportation
*8. hygiene products
*9. pet_dishes
*10. consumable
*11. customers
*12. orders
*13. cities

## Datasets
-----------

### Orders
- Number of rows: 5454
- Number of columns:
- Columns
  - order_id - Num
  - customer_id - **FK** Num
  - order_date - Datetime
  - total_price - Num

### Customers
- Number of rows: 554
- Number of columns: 6
- Columns 
  - id - **PK** Num
  - first_name - Str
  - last_name - Str
  - email - Str
  - gender - Str
  - date of birth - Datetime
  - city_id - Num
