require('dotenv').config()
const { Client } = require('pg');
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlerMiddleware');
const cors = require('cors')

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
server.use('/api',router)
// Error handler . The last middleware
server.use(errorHandler)

server.listen(PORT, () => {
    console.log(`It works on port ${PORT}`)
})

module.exports = client;