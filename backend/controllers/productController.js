const { PassThrough } = require("stream");

const db = require("../db/index");

class ProductController {
    async create(req, res) {
        const {productName, description, price, productImage, manufacturer } = req.body
        const query = 'INSERT INTO products("p_productName", p_description, p_price, "p_productImg", p_manufacturer) VALUES ($1, $2, $3, $4 , $5) RETURNING *';
        const result = await db.query(query, [productName, description,price, productImage, manufacturer])
        res.json(result.rows[0])
    }

    async delete(req, res) {
        const id = req.params.id
        const remProduct = await db.query('DELETE FROM products WHERE "p_productId" =  $1 RETURNING *', [id])
        res.json(remProduct.rows[0])
    } 
    
    async update(req, res) {
        const {productName, description, price, productImage, manufacturer } = req.body
        const query = 'UPDATE product SET "p_productName" = $1, p_description = $2, p_price = $3, "p_productImg" = $4 , p_manufacturer = $5';
        const result = await db.query(query, [productName, price, description, productImage, manufacturer])
        res.json(result.rows[0])
    }
    
    async getProducts(req, res) {
        const products = await db.query('SELECT * FROM products')
        res.json(products.rows);
    }

    async getProduct(req, res) {
        const id = req.params.id;
        const reqProduct = await db.query('SELECT * FROM products WHERE "p_productId" = $1', [id])
        return res.json(reqProduct.rows[0]);
    }
}

module.exports = new ProductController();