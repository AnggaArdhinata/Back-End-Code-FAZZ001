const ctrl = {}
const models = require('../models/mdl.users')
const response = require('../helpers/response')

ctrl.getAll = async (req, res) => {
    try {
        const result = await models.userFindAll()
        if(result.length <= 0) {
            return response(res, 404, {msg: 'data not found'})
        }
        return response(res, 200, result)
    } catch (error) {
        return response(res, 500, error)
    }
}

ctrl.getById = async(req, res) => {
    try {
        const {id} = req.params
        const result = await models.userFindById(id)
        if(result.length <= 0) {
            return response(res, 404, {msg: 'data not found'})
        }
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
       if (find.length <= 0) {
        return response(res, 404, {msg : "data not found !"})
       }
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

ctrl.updateUsers = async (req, res) => {
    try {
        const {id} = req.params
        const {name} = req.body
        const find = await models.userFindById(id)
        if (find.length <= 0) {
            return response(res, 404, {msg : "data not found !"})
        }
        const result = await models.updateData(id, name)
        return response(res, 200, result)
    } catch (error) {
        return response(res, 500, error)
    }
}

ctrl.deleteUsers = async (req, res) => {
    try {
        const {id} = req.params
        const find = await models.userFindById(id)
        if (find.length <= 0) {
            return response(res, 404, {msg : "Data Not Found"})
        }
        const result = await models.deleteData(id)
        if (result.length <= 0) {
            return response(res, 200, {msg : "successfully delete data"})  
        }
    } catch (error) {
        return response(res, 500, error)
    }
}

module.exports = ctrl