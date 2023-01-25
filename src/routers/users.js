const express = require('express')
const route = express.Router()
const { getAll, addUser, showDetail } = require('../controllers/ctrl.users')

route.get('/', getAll)
route.get('/detail/:id', showDetail)
route.post('/', addUser)

module.exports = route