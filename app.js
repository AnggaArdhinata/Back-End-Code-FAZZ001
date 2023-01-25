require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./src/configs/db')
const mainRoute = require('./src/routers/index')
const PORT = process.env.APP_PORT
  
  app.use(express.json())
  app.use(express.urlencoded({extended : true}))
  
  app.use('/api/v1', mainRoute)
    //TODO Example route : localhost:8080/api/vi/
    //TODO List Users with relation : localhost:8080/api/v1/transaction/show
    //TODO Detail Users with transaction : localhost:8080/api/v1/transaction/detail/1

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
