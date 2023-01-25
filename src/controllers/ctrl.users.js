const ctrl = {}
const models = require('../models/mdl.users')
const response = require('../helpers/response')

ctrl.getAll = async (req, res) => {
    try {
        const result = await models.userFindAll()
        return response(res, 200, result)
    } catch (error) {
        return response(res, 500, error)
    }
}

ctrl.showDetail = async (req, res) => {
    try {
       const {id} = req.params
       const find = await models.userFindById(id)
       const transDetail = await models.showJoin(id)
       const result = {
        id : find[0].id,
        name : find[0].name,
        transaction : transDetail
       }
        return response(res, 200, result)
    } catch (error) {
        return response(res, 500, error)
    }
}

ctrl.addUser = async (req, res) => {
    try {
        const {name} = req.body
        const result = await models.userAdd(name)
        return response(res, 200, result)
        
    } catch (error) {
        return response(res, 500, error)
    }
}

module.exports = ctrl