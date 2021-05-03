const express = require('express')
const path = require('path')

require('dotenv').config({path:path.resolve(__dirname, '../config/dev.env') })

require('./db/mongoose')
const userRouter = require('./routers/user')



const app = express()

app.use(express.json())
app.use(userRouter)


module.exports = app
