require('dotenv').config()

const { next } = require("process");
const ApiError = require("../error/ApiError")
const db = require("../db/index");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const jwtGenerator = (id, email, role) => {
    return jwt.sign(
        {
            id : id, 
            email : email,
            role : role
        },
        process.env.SECRET_KEY, 
        {expiresIn : "24h"}
    )
}

class UserController {
    async registration(req, res, next) {
        const {firstName, lastName, email, password, role} = req.body;
        console.log(email);
        console.log(lastName);
        console.log(firstName);
        if(!email || !password) {
            next(ApiError.badRequest("Некорректный email или пароль"))
        }

        const isUserExist = await db.query("SELECT * FROM users WHERE u_email = $1", [email])
    
        if(isUserExist.rowCount > 0) {
            return next(ApiError.badRequest("Пользователь с таким именем уже существует"))
        }
        const hashedPassword = await bcrypt.hash(password, 5);
        const newUser = await db.query('INSERT INTO users(u_email, u_password, "u_firstName" , "u_lastName", u_role) VALUES($1, $2, $3,$4, $5) RETURNING *', [email, hashedPassword, firstName, lastName, role]);
        
        const userId = newUser.rows[0].u_userId;
        const newCustomer = await db.query('INSERT INTO "customers"("c_userId") VALUES($1)',[userId]);   
        const newCart = await db.query('INSERT INTO cart(ct_customerId) VALUES($1)', [userId]);

        const token = jwtGenerator(userId, email, role);

        return res.json({token})
    }

    async auth(req, res, next) {
        const {email , password} = req.body;
        const user = await db.query('SELECT * FROM users WHERE u_email = $1', [email])
        if(user.rowCount == 0){
            return next(ApiError.internal('Пользователь не найден.'))
        }
        console.log(user)
        const userPassword = user.rows[0].u_password;
        const userId = user.rows[0].u_customerId;
        console.log(userPassword, userId)
        let isPasswordValid = bcrypt.compareSync(password, userPassword)
        if(!isPasswordValid){
            return next(ApiError.internal('Вы ввели неправильный пароль или почту'))
        }
        const token = jwtGenerator(userId ,email)

        return res.json({token})
    } 

    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM users LIMIT 20')
        res.json(users.rows);
    }

    async getUser(req, res) {
        const {id} = req.params.id;
        const users = await db.query('SELECT * FROM users WHERE u_userId = $1', [id])
        res.json(users.rows[0]);
    }

    async updateUser(req, res){
        const {firstName, lastName, city, contactNumber} = req.body;
        const updCustomer = await db.query('UPDATE customers SET "c_firstName" = $1 , "c_lastName = $2", "c_city" = $3, "c_contactNumber" = $4 RETURNING *', [firstName, lastName, city, contactNumber]);
    }

    async deleteUser(req, res) {
        const id = req.params.id;
        const user = await db.query('DELETE FROM users where u_userId = $1', [id]);
        res.json(user.rows[0])
    }

    
    async check(req, res, next) {
        const token = jwtGenerator(req.user.id, req.user.email);
        return res.json({token})
    }
}

module.exports = new UserController();