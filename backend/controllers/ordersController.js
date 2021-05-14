const { PassThrough } = require("stream");

const db = require("../db/index");

class OrderController {
    async create(req, res) {
        const {customerId, totalPrice, o_orderDate} = req.body
        const query = `
        INSERT INTO public.orders(
            "o_customerId", "o_totalPrice", "o_orderDate")
            VALUES ($1, $2, $3)
        `;
        const result = await db.query(query, [customerId, totalPrice, o_orderDate])
        res.json(result.rows[0])
    }

    async delete(req, res) {
        const {id} = req.body
        const remProduct = await db.query("DELETE FROM products WHERE id =  $1 RETUNRNING *", [id])
        res.json(remProduct.rows[0])
    } 
    
    async update(req, res) {
        const {id} = req.params.id
        const {customerId, totalPrice, orderDate} = req.body;
        const remProduct = await db.query('UPDATE "orders" SET "o_customerId" = $2, "o_totalPrice" = $3, "o_orderDate" = $4 WHERE "o_orderId" =  $1 RETUNRNING *', [id,customerId, totalPrice, orderDate])
        res.json(remProduct.rows[0])
    }
    
    async getAll(req, res) {
        let {customerId, totalPriceMax, totalPriceMin, orderDate, startDate, endDate,limit, page} = req.query;
        page = page || 2;
        limit = limit || 40;
        let offset = page + limit - limit;
        let orders;
        if(customerId) {
            orders = await db.query('SELECT * FROM "orders" WHERE "o_customerId" = $1 LIMIT $2 OFFSET $3', [customerId, limit, offset]);
        }
        else if(orderDate ){
            orders = await db.query('SELECT * FROM "orders" WHERE "o_orderDate" = $1 LIMIT $2 OFFSET $3', [orderDate, limit, offset]);
        }
        else if(totalPriceMax ){
            orders = await db.query('SELECT * FROM "orders" WHERE "o_totalPrice" <= $1 LIMIT $2 OFFSET $3', [totalPriceMax, limit, offset]);
        }
        else if(totalPriceMin ){
            orders = await db.query('SELECT * FROM "orders" WHERE "o_totalPrice" >= $1 LIMIT $2 OFFSET $3', [totalPriceMin, limit, offset]);
        }
        else if(totalPriceMin && totalPriceMax){
            orders = await db.query('SELECT * FROM "orders" WHERE "o_totalPrice" >= $1 AND "o_totalPrice" < $4 LIMIT $2 OFFSET $3', [totalPriceMin, limit, offset, totalPriceMax]);
        }
        else if(customerId && totalPriceMax ){
            orders = await db.query('SELECT * FROM "orders" WHERE "o_customerId" = $1 AND "o_totalPrice" >= $4 LIMIT $2 OFFSET $3', [customerId, limit, offset, totalPriceMax]);
        }
        else if(customerId && totalPriceMin ){
            orders = await db.query('SELECT * FROM "orders" WHERE "o_customerId" = $1 AND "o_totalPrice" <= $4 LIMIT $2 OFFSET $3', [customerId, limit, offset, totalPriceMin]);
        }
        else {
            orders = await db.query('SELECT * FROM "orders" LIMIT $1 OFFSET $2', [limit, offset]);
        }

        //products = await db.query('SELECT * FROM products limi');
        return res.json(orders.rows);

    }

    async getOne(req, res) {
        const id = req.params.id;
        const reqOrder = await db.query('SELECT * FROM "orders" WHERE "o_orderId" = $1', [id])
        return res.json(reqOrder.rows[0]);
    }
}

module.exports = new OrderController();