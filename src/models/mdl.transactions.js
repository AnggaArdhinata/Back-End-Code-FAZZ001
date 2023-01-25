const models = {}
const db = require('../configs/db')

models.showAll = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM trans`)
        .then((res) => {
            resolve(res.rows)
        })
        .catch((err) => {
            reject(err)
        })
    })

}

models.showId = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM trans WHERE id= $1`, [id])
        .then((res) => {
            resolve(res.rows)
        })
        .catch((err) => {
            reject(err)
        })
    })

}

models.showJoin = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT
        t.id, u.name, t.total FROM trans AS t
        INNER JOIN users AS u
        ON t.userid = u.id`)
        .then((res) => {
            resolve(res.rows)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

models.insertData = (userid, total, date) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO trans (userid, total, date)
        VALUES($1, $2, $3) RETURNING *`, [userid, total, date])
        .then((res) => {
            resolve(res.rows)
        })
        .catch((err) => {
            // console.log(err)
            reject(err)
        })
    })

}

module.exports = models