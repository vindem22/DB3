const { PassThrough } = require("stream");

const db = require("../db/index");

const uuid = require('uuid');
const path = require('path');
const ApiError = require("../error/ApiError")
const { next } = require("process");

class ProductController {
    async create(req, res, next) {
        try {
            let fileName = uuid.v4() + ".jpg"
            const {productName, description, price, manufacturer } = req.body
            const {img} = req.files
            const query = 'INSERT INTO products("p_productName", p_description, p_price, "p_productImg", p_manufacturer) VALUES ($1, $2, $3, $4 , $5) RETURNING *';
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const result = await db.query(query, [productName, description,price, fileName, manufacturer])
            return res.json(result.rows[0])
        }
        catch(e) {
            next(ApiError.badRequest(e.message))
        }
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
        let products;
        let {manufacturer, limit, page} = req.query
        page = page || 2
        limit = limit || 20
        let offset = page * limit - limit;
        
        if(!manufacturer) {
            products = await db.query('SELECT * FROM products LIMIT $1 OFFSET $2', [limit, offset]);
        }
        else {
            products = await db.query('SELECT * FROM products WHERE p_manufacturer = $1 LIMIT $2 OFFSET $3', [manufacturer, limit, offset]);
        }

        //products = await db.query('SELECT * FROM products limi');
        return res.json(products.rows);
    }

    async getProduct(req, res) {
        const id = req.params.id;
        const reqProduct = await db.query('SELECT * FROM products WHERE "p_productId" = $1', [id])
        return res.json(reqProduct.rows[0]);
    }
}

module.exports = new ProductController();