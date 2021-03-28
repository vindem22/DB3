const { next } = require("process");
const ApiError = require("../error/ApiError")
const db = require("../db/index");

class UserController {
    async getUser(req, res) {
        const id = req.params.id;
        const reqUser = await db.query('SELECT * FROM customers WHERE c_customerId = $1', [id])
        return res.json(reqUser.rows[0]);
    }

    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM customers')
        res.json(users.rows);
    }

    async updateUser(req, res){
        const {firstName, lastName, city, contactNumber} = req.body;
        const updCustomer = await db.query('UPDATE customers SET c_firstName = $1 , c_lastName = $2, c_city = $3, c_contactNumber = $4 RETURNING *', [firstName, lastName, city, contactNumber]);
    }

    async deleteUser(req, res) {
        const id = req.params.id;
        const user = await db.query('DELETE FROM customers where id = $1', [id]);
        res.json(user.rows[0])
    }

    async registration(req, res) {
        const {firstName, lastName, city, contactNumber} = req.body;
        const newCustomer = await db.query('INSERT INTO customers (c_firstName, c_lastName, c_city, c_contactNumber) values ($1, $2, $3, $4) RETURNING *', [firstName, lastName, city, contactNumber]);
        res.json(newCustomer.rows[0])
    }

    async auth(req, res) {
        
    } 
    
    async check(req, res, next) {
        const {id} = req.query;
        if(!id) {
            return next(ApiError.badRequest("ID wasn't set up"));
        }
    }
}

module.exports = new UserController();