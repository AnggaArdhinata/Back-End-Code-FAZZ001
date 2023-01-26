const express = require('express')
const route = express.Router()
const { 
    getAll,
    addUser,
    showDetail, 
    updateUsers,
    deleteUsers,
    getById } = require('../controllers/ctrl.users')

route.get('/', getAll)
route.get('/:id', getById)
route.get('/detail/:id', showDetail)
route.post('/', addUser)
route.put('/:id', updateUsers)
route.delete('/:id', deleteUsers)

module.exports = route