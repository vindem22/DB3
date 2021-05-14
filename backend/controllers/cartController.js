const { PassThrough } = require("stream");
const jwt = require('jsonwebtoken')
const db = require("../db/index");
const ApiError = require("../error/ApiError");
const { next } = require("process")

class CartController {
    async create(req, res, next) {
        try{
            const {productId} = req.body;
            let rawToken = req.headers.authorization
            let token = rawToken.split(" ")[1];
            let {email} = jwt.decode(token);
            console.log(email)
            let cartId = await db.query('select "ct_id" from cart,"customers", "users" WHERE "ct_customerid" = "c_customerId" AND "c_userId" = "u_userId" AND "u_email" = $1', [email]);
            cartId = cartId.rows[0].ct_id;
            const query = `
            INSERT INTO "cartProduct"(
                cp_cartid, cp_productid)
                VALUES ($1, $2) RETURNING *;
            `;
            const result = await db.query(query, [cartId, productId])
            res.json(result.rows[0])
            console.log('Added', productId)
        }
        catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res) {
        const {id} = req.body
        const reqCart = await db.query('DELETE FROM cart WHERE ct_id =  $1 RETUNRNING *', [id])
        res.json(reqCart.rows[0])
    } 
    
    async update(req, res) {
        const {id} = req.params.id
        const {customerId, totalPrice, orderDate} = req.body;
        const remProduct = await db.query('UPDATE cart SET ct_customerId = $2 WHERE ct_id =  $1 RETUNRNING *', [id, customerId])
        res.json(remProduct.rows[0])
    }
    
    async getCartProducts(req, res) {
        let rawToken = req.headers.authorization;
        let token = rawToken.split(" ")[1];
        let {page, limit} = req.query;
        page = page || 1;
        limit = limit || 20;

        let offset = page + limit - limit - 1;
        let {email} = jwt.decode(token);
        const cartItems = await db.query(`select "cp_cartid","cp_productid","p_productName", "p_description","p_price","p_productImg", "p_manufacturer" from cart , "cartProduct", "products", "customers", "users" where ct_id = cp_cartId AND "p_productId" = cp_productId AND "ct_customerid" = "c_customerId" AND "c_userId" = "u_userId" AND "u_email" = $1 LIMIT $2 OFFSET $3`, [email, limit, offset])
        return res.json(cartItems.rows);
    }
}

module.exports = new CartController();