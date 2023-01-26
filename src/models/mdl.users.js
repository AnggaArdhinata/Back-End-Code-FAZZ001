const models = {}
const db = require('../configs/db')

models.userFindAll = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM users`)
        .then((res) => {
            
            resolve(res.rows)
        })
        .catch((err) => {
            console.log(err)
            reject(err)
        })
    })

}

models.userFindById = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM users WHERE id= $1`, [id])
        .then((res) => {
            
            resolve(res.rows)
        })
        .catch((err) => {
            console.log(err)
            reject(err)
        })
    })

}

models.showJoin = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT
        t.id, u.id AS userId, t.total, t.date FROM users AS u
        INNER JOIN trans AS t
        ON t.userid = u.id WHERE u.id = $1`, [id])
        .then((res) => {
            resolve(res.rows)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

models.userAdd = (name) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO users (name) VALUES ($1) RETURNING *`, [name])
        .then((res) => {
            resolve(res.rows)
        })
        .catch((err) => {
            reject(err)
        })
    })

}

models.updateData = (id, name) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE users SET name = $1, updated_at = now() WHERE id = $2 RETURNING *`,[name, id])
        .then((res) => {
            resolve(res.rows)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

models.deleteData = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM users WHERE id= $1`, [id])
        .then((res) => {
            resolve(res.rows)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

module.exports = models