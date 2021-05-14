const { PassThrough } = require("stream");
const db = require("../db/index");
const path = require('path');
const ApiError = require("../error/ApiError")
const { next } = require("process");

class ProductController {
    async create(req, res, next) {
        try {
            const {pt_petName} = req.body;
            const query = 'INSERT INTO pet("pt_petName", "pt_catalogId") VALUES($1,$2)';
            const result = await db.query(query, [pt_petName, 1])
            return res.json(result.rows[0])
        }
        catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res) {
        const id = req.params.id
        const remPet = await db.query('DELETE FROM pet WHERE "pt_petId" = $1 RETURNING *', [id])
        res.json(remPet.rows[0])
    } 
    
    async update(req, res) {
        const {pt_petName, pt_catalogId} = req.body
        if(!pt_catalogId) {
            pt_catalogId = 1;
        }
        const query = 'UPDATE pet SET "pt_petName" = $1, "pt_catalogId" = $2';
        const result = await db.query(query, [pt_petName, pt_catalogId])
        res.json(result.rows[0])
    }
    
    async getPets(req, res) {
        let pets;
        let {limit, page} = req.query;
        page = page || 2;
        limit = limit || 20;

        let offset = page * limit - limit;
        let pagesCount = await db.query('SELECT count(*) from pet')
        pagesCount = pagesCount.rows[0]
        pagesCount = Math.round(parseInt(pagesCount.count) / limit);
        
        const query = 'SELECT * FROM pet';
        pets = await db.query(query)
        pets.rows.push({pagesCount : pagesCount})

        return res.json(products.rows);
    }

    async getPet(req, res) {
        const id = req.params.id;
        const reqPet = await db.query('SELECT * FROM pet WHERE "pt_petId" = $1', [id])
        return res.json(reqPet.rows[0]);
    }
}

module.exports = new ProductController();