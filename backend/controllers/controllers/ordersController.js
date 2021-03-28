const { PassThrough } = require("stream");

const db = require("../db/index");

class OrderController {
    async create(req, res) {
        const {customer } = req.body
        const query = `
        INSERT name FROM Products WHERE id = $1
        `;
        const result = await db.query(query, [id])
        res.json(result.rows[0])
    }

    async delete(req, res) {
        const {id} = req.body
        const remProduct = await db.query("DELETE FROM products WHERE id =  $1 RETUNRNING *", [id])
        res.json(remProduct.rows[0])
    } 
    
    async update(req, res) {
        
    }
    
    async getAll(req, res) {
        let {id, productName, price, description, productImage, manufacturer} = req.query;
        page = page || 1;
        limit = limit || 1;
        let offset = page + limit - limit;
        let products;

    }

    async getOne(req, res) {
        
    }
}

module.exports = new OrderController();