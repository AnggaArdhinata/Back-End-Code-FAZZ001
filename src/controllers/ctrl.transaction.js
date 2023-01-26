const ctrl = {}
const models = require('../models/mdl.transactions')
const mdlUsr = require('../models/mdl.users')
const response = require('../helpers/response')

ctrl.getAll = async (req, res) => {
    try {
        const {orderby, sortby} = req.query
        console.log(sortby, orderby)
        const order = orderby ? (orderby) : 'id'
        const sort = sortby ? (sortby) : 'desc'
        const result = await models.showAll({orderby : order, sortby : sort})
        if(result.length <= 0) {
            return response(res, 404, {msg: 'data not found'})
        }
        return response(res, 200, result)
    } catch (error) {
        return response(res, 500, error)
    }
}

ctrl.getJoin = async (req, res) => {
    try {
        const result = await models.showJoin()
        if(result.length <= 0) {
            return response(res, 404, {msg: 'data not found'})
        }
        return response(res, 200, result)
    } catch (error) {
        return response(res, 500, error)
    }
}

ctrl.getById = async (req, res) => {
    try {
        const {id} = req.params
        const result = await models.showId(id)
        if(result.length <= 0) {
            return response(res, 404, {msg: 'data not found'})
        }
        return response(res, 200, result)
    } catch (error) {
        return response(res, 500, error)
    }
}

ctrl.addTrans = async (req, res) => {
    try {
        const {userid, total, date} = req.body
        const find = await mdlUsr.userFindById(userid)
        if (find.length <=0 ) {
            return response(res, 404, {msg: 'userId not found, please insert valid userid'})
        }
        const result = await models.insertData(userid, total, date)
        return response(res, 200, result)
        
    } catch (error) {
        return response(res, 500, error)
    }
}

ctrl.updateTrans = async (req, res) => {
    try {
        const {id} = req.params
        const {userid, total, date} = req.body
        const find = await models.showId(id)
        if (find <= 0) {
            return response(res, 404, {msg: 'data not found'})
        }
        const result = await models.updateData(userid, total, date, id)
        return response(res, 200, result)
    } catch (error) {
        return response(res, 500, error)
    }
}

ctrl.deleteTrans = async (req, res) => {
    try {
        const {id} = req.params
        const find = await models.showId(id)
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