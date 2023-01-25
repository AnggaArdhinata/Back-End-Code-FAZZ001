const express = require('express')
const route = express.Router()
const ctrl = require('../controllers/ctrl.transaction')

route.get('/', ctrl.getAll)
route.get('/show', ctrl.getJoin)
route.get('/:id', ctrl.getById)
route.post('/', ctrl.addTrans)

module.exports = route