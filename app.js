require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./src/configs/db')
const mainRoute = require('./src/routers/index')
const PORT = process.env.APP_PORT


//? Example method + route
// app.get('/', (req, res) => {
  //     res.send('Hello World!')
  //   })
  
  app.use(express.json())
  app.use(express.urlencoded({extended : true}))
  
  app.use('/api/v1', mainRoute)

  db.connect()
  .then(() => {
    console.log("Database Successfully Connected")
    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`)
      })
  })
  .catch((err) => {
    console.log(err)
  })
