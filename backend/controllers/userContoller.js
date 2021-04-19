require('dotenv').config()

const { next } = require("process");
const ApiError = require("../error/ApiError")
const db = require("../db/index");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const jwtGenerator = (id, email) => {
    return jwt.sign(
        {
            id : id, 
            email : email
        },
        process.env.SECRET_KEY, 
        {expiresIn : "24h"}
    )
}

class UserController {
    async registration(req, res, next) {
        const {firstName, lastName, email, password } = req.body;
        const id = req.params.id;
        
        if(!email || !password) {
            next(ApiError.badRequest("Некорректный email или пароль"))
        }

        const isUserExist = await db.query("SELECT * FROM customers WHERE c_email = $1", [email])
    
        if(isUserExist.rowCount > 0) {
            return next(ApiError.badRequest("Пользователь с таким именем уже существует"))
        }
        const hashedPassword = await bcrypt.hash(password, 5);
        const newUser = await db.query('INSERT INTO customers(c_email, c_password, "c_firstName" , "c_lastName") VALUES($1, $2, $3,$4)', [email, hashedPassword, firstName, lastName]);
        const token = jwtGenerator(id, email)

        return res.json({token})
    }

    async auth(req, res, next) {
        const {email , password} = req.body;
        const user = await db.query('SELECT * FROM customers WHERE c_email = $1', [email])
        if(user.rowCount == 0){
            return  next(ApiError.internal('Пользователь не найден.'))
        }
        const userPassword = user.rows[0].c_password;
        const userId = user.rows[0].c_customerId;
        let isPasswordValid = bcrypt.compareSync(password, userPassword)
        if(!isPasswordValid){
            return next(ApiError.internal('Вы ввели неправильный пароль или почту'))
        }
        const token = jwtGenerator(userId ,email )
        return res.json({token})
    } 
    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM customers')
        res.json(users.rows);
    }

    async updateUser(req, res){
        const {firstName, lastName, city, contactNumber} = req.body;
        const updCustomer = await db.query('UPDATE customers SET "c_firstName" = $1 , "c_lastName = $2", "c_city" = $3, "c_contactNumber" = $4 RETURNING *', [firstName, lastName, city, contactNumber]);
    }

    async deleteUser(req, res) {
        const id = req.params.id;
        const user = await db.query('DELETE FROM customers where id = $1', [id]);
        res.json(user.rows[0])
    }

    
    async check(req, res, next) {
        const token = jwtGenerator(req.user.id, req.user.email);
        return res.json({token})
    }
}

module.exports = new UserController();