const { PassThrough } = require("stream");

const db = require("../db/index");

class OrderController {
    async create(req, res) {
        const {orderId, quantity, productId } = req.body
        const query = `
        INSERT INTO public."orderDetails"(
            "od_orderId", od_quantity, "od_productId")
            VALUES ($1, $2, $3)
        `;
        const result = await db.query(query, [orderId, quantity, productId])
        res.json(result.rows[0])
    }

    async delete(req, res) {
        const {id} = req.body
        const remProduct = await db.query('DELETE FROM "orderDetails" WHERE id =  $1 RETUNRNING *', [id])
        res.json(remProduct.rows[0])
    } 
    
    async update(req, res) {
        const {id} = req.params.id
        const {customerId, totalPrice, orderDate} = req.body;
        const remProduct = await db.query('UPDATE "orderDetails" SET "od_orderId" = $2, "od_quantity" = $3, "od_productId" = $4 WHERE "od_orderId" =  $1 RETUNRNING *', [id,customerId, totalPrice, orderDate])
        res.json(remProduct.rows[0])
    }
    
    async getAll(req, res) {
        let {id} = req.query;
        page = page || 2;
        limit = limit || 10;
        let offset = page + limit - limit;
        let ordersDetailed;

        ordersDetailed = await db.query('SELECT * FROM "orders", "orderDetails" WHERE "o_orderId" = "od_orderId" LIMIT $1 OFFSET $2', [limit, offset]);

        return res.json(ordersDetailed.rows)
    }

    async getOne(req, res) {
        const id = req.params.id;
        const reqOrder = await db.query('SELECT * FROM "orders","orderDetails" WHERE "o_orderId" = "od_orderId" AND "o_orderId" = $1' , [id])
        return res.json(reqOrder.rows[0]);
    }
}

module.exports = new OrderController();