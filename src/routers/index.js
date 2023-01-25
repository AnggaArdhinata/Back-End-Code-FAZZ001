const express = require('express')
const routers = express.Router()
const transaction = require('./transaction')
const users = require('./users')

routers.use('/transaction', transaction)
routers.use('/users', users)

module.exports = routers

