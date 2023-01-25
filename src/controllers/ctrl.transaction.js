const ctrl = {}
const models = require('../models/mdl.transactions')
const response = require('../helpers/response')

ctrl.getAll = async (req, res) => {
    try {
        const result = await models.showAll()
        return response(res, 200, result)
    } catch (error) {
        return response(res, 500, error)
    }
}

ctrl.getJoin = async (req, res) => {
    try {
        const result = await models.showJoin()
        return response(res, 200, result)
    } catch (error) {
        return response(res, 500, error)
    }
}

ctrl.getById = async (req, res) => {
    try {
        const {id} = req.params
        const result = await models.showId(id)
        return response(res, 200, result)
    } catch (error) {
        return response(res, 500, error)
    }
}

ctrl.addTrans = async (req, res) => {
    try {
        const {userid, total, date} = req.body
        const result = await models.insertData(userid, total, date)
        return response(res, 200, result)
        
    } catch (error) {
        return response(res, 500, error)
    }
}

module.exports = ctrl