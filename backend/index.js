require('dotenv').config()
const { Client } = require('pg');
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlerMiddleware');
const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')

const client = new Client({
    user: process.env.DB_USER,
    host : process.env.DB_HOST,
    database : process.env.DB_NAME,
    password : process.env.DB_PASSWORD,
    port : process.env.DB_PORT
})

const express = require('express');

const PORT = process.env.PORT || 9876;

const server = express()
server.use(cors())
server.use(express.json())
server.use(express.static(path.resolve(__dirname, 'static')))
server.use(fileUpload({}))
server.use('/api',router)
server.use(errorHandler)

server.listen(PORT, () => {
    console.log(`It works on port ${PORT}`)
})

module.exports = client;