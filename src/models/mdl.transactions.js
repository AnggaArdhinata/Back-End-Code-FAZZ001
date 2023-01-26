const models = {}
const db = require('../configs/db')

models.showAll = ({sortby, orderby}) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM trans ORDER BY ${orderby} ${sortby}`)
        .then((res) => {
            resolve(res.rows)
        })
        .catch((err) => {
            console.log(err)
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

models.updateData = (userid, total, date, id) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE trans SET userId = $1, total = $2, 
        date = $3, updated_at = now() WHERE id = $4 RETURNING *`,[userid, total, date, id])
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
        db.query(`DELETE FROM trans WHERE id= $1`, [id])
        .then((res) => {
            resolve(res.rows)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

module.exports = models